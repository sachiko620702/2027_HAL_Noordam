#!/usr/bin/env python3
"""Daily repository maintenance for the Osaka trip knowledge base.

This script keeps duplicated fixed travel metadata in sync, updates the
project timestamp, runs configured web/manual checks, and optionally commits
and pushes resulting changes. It is designed for cron, launchd, or another
daily scheduler.
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib import error, request


ROOT = Path(__file__).resolve().parents[1]
PROJECT_YAML = ROOT / "database" / "project.yaml"
DAILY_CHECKS_CONFIG = ROOT / "database" / "daily_checks.json"
DAILY_STATUS_REPORT = ROOT / "database" / "daily_status.json"
README = ROOT / "README.md"
AI_CONTEXT = ROOT / "AI_CONTEXT.md"
PROJECT_RULE = ROOT / "PROJECT_RULE.md"
DECISIONS = ROOT / "DECISIONS.md"
HOTELS = ROOT / "database" / "hotels.yaml"
RESERVATIONS = ROOT / "database" / "reservations.yaml"
ITINERARY = ROOT / "database" / "itinerary.yaml"

README_FIXED_FOCUS = "- 固定重點：USJ 一天、非米其林導向餐飲、精品購物、候補景點與候補美食資料庫"
AI_DINING_LINE = (
    "- Dining: non-Michelin-focused dining; prioritize taste, comfort, "
    "convenience, and reservation feasibility"
)
D006_DINING_DECISION = (
    "Decision: Michelin dining is no longer a project target. Dining should be "
    "planned around comfort, taste, convenience, reservation feasibility, and "
    "fit with Luxury Slow Travel. Michelin-starred restaurants should not be "
    "prioritized unless the user explicitly reopens this scope."
)


@dataclass(frozen=True)
class Snapshot:
    version: str
    start_date: dt.date
    end_date: dt.date
    duration_days: int
    nights: int
    hotel: str
    positioning: str

    @property
    def date_range_text(self) -> str:
        return f"{self.start_date.isoformat()} to {self.end_date.isoformat()}"

    @property
    def duration_text(self) -> str:
        return f"{self.duration_days} days and {self.nights} nights"

    @property
    def duration_compact(self) -> str:
        return f"{self.duration_days} days / {self.nights} nights"

    @property
    def readme_period(self) -> str:
        return (
            f"{self.start_date:%Y/%m/%d}（{weekday_zh(self.start_date)}）"
            f"～{self.end_date:%Y/%m/%d}（{weekday_zh(self.end_date)}）"
        )


def weekday_zh(day: dt.date) -> str:
    return "一二三四五六日"[day.weekday()]


def load_snapshot() -> Snapshot:
    text = PROJECT_YAML.read_text(encoding="utf-8")
    version = extract_scalar(text, r"^\s*version:\s*(.+)$", "version")
    start_text = extract_scalar(text, r"^\s*start:\s*(\d{4}-\d{2}-\d{2})$", "start date")
    end_text = extract_scalar(text, r"^\s*end:\s*(\d{4}-\d{2}-\d{2})$", "end date")
    duration_text = extract_scalar(text, r"^\s*duration:\s*(.+)$", "duration")
    hotel = extract_scalar(text, r"^\s*hotel:\s*(.+)$", "hotel")
    positioning = extract_scalar(text, r"^\s*positioning:\s*(.+)$", "positioning")
    duration_days, nights = parse_duration(duration_text)
    return Snapshot(
        version=version,
        start_date=dt.date.fromisoformat(start_text),
        end_date=dt.date.fromisoformat(end_text),
        duration_days=duration_days,
        nights=nights,
        hotel=hotel,
        positioning=positioning,
    )


def extract_scalar(text: str, pattern: str, label: str) -> str:
    match = re.search(pattern, text, flags=re.MULTILINE)
    if not match:
        raise RuntimeError(f"Could not find {label} in database/project.yaml")
    return match.group(1).strip()


def parse_duration(text: str) -> tuple[int, int]:
    match = re.search(r"(\d+)\s+days?\s+(\d+)\s+nights?", text, flags=re.IGNORECASE)
    if not match:
        raise RuntimeError(f"Unsupported duration format: {text!r}")
    return int(match.group(1)), int(match.group(2))


def apply_replacements(text: str, replacements: Iterable[tuple[str, str]]) -> tuple[str, bool]:
    changed = False
    for pattern, replacement in replacements:
        new_text, count = re.subn(pattern, replacement, text, count=1, flags=re.MULTILINE)
        if count == 0:
            raise RuntimeError(f"Pattern not found: {pattern}")
        if new_text != text:
            changed = True
        text = new_text
    return text, changed


def sync_readme(snapshot: Snapshot) -> str:
    text = README.read_text(encoding="utf-8")
    replacements = [
        (r"^# 2027 大阪自由行 .+$", f"# 2027 大阪自由行 {snapshot.version}"),
        (r"^- 旅行期間：.+$", f"- 旅行期間：{snapshot.readme_period}"),
        (r"^- 旅遊型態：.+$", "- 旅遊型態：五天四夜大阪自由行"),
        (r"^- 住宿：.+$", f"- 住宿：{snapshot.hotel}"),
        (r"^- 核心定位：.+$", f"- 核心定位：{snapshot.positioning}"),
        (r"^- 固定重點：.+$", README_FIXED_FOCUS),
    ]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_ai_context(snapshot: Snapshot) -> str:
    text = AI_CONTEXT.read_text(encoding="utf-8")
    replacements = [
        (r"^Version:\s*.+$", f"Version: {snapshot.version}"),
        (r"^- Dates: .+$", f"- Dates: {snapshot.date_range_text}"),
        (r"^- Duration: .+$", f"- Duration: {snapshot.duration_compact}"),
        (r"^- Hotel: .+$", f"- Hotel: {snapshot.hotel}"),
        (r"^- Style: .+$", f"- Style: {snapshot.positioning}"),
        (r"^- USJ: .+$", "- USJ: one day"),
        (r"^- Dining: .+$", AI_DINING_LINE),
        (r"^- Shopping: .+$", "- Shopping: luxury shopping"),
    ]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_project_rule(snapshot: Snapshot) -> str:
    text = PROJECT_RULE.read_text(encoding="utf-8")
    replacements = [
        (r"^- 2027-11-17 to 2027-11-21$", f"- {snapshot.date_range_text}"),
        (r"^- InterContinental Osaka$", f"- {snapshot.hotel}"),
        (r"^- Luxury Slow Travel$", f"- {snapshot.positioning}"),
        (r"^- One USJ day$", "- One USJ day"),
        (r"^- Non-Michelin-focused dining$", "- Non-Michelin-focused dining"),
    ]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_decisions(snapshot: Snapshot) -> str:
    text = DECISIONS.read_text(encoding="utf-8")
    replacements = [
        (r"^Decision: 2027-11-17 to 2027-11-21\.$", f"Decision: {snapshot.date_range_text}."),
        (r"^Decision: 5 days and 4 nights\.$", f"Decision: {snapshot.duration_text}."),
        (r"^Decision: InterContinental Osaka\.$", f"Decision: {snapshot.hotel}."),
        (r"^Decision: Luxury Slow Travel\.$", f"Decision: {snapshot.positioning}."),
        (r"^Decision: USJ is planned for one day\.$", "Decision: USJ is planned for one day."),
        (r"^Decision: Michelin dining is no longer a project target\..*$", D006_DINING_DECISION),
        (r"^Decision: luxury shopping is part of the formal project scope\.$", "Decision: luxury shopping is part of the formal project scope."),
    ]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_itinerary(snapshot: Snapshot) -> str:
    text = ITINERARY.read_text(encoding="utf-8")
    replacements = [
        (r"^    - date: 2027-11-17$", f"    - date: {snapshot.start_date.isoformat()}"),
        (r"^    - date: 2027-11-18$", f"    - date: {(snapshot.start_date + dt.timedelta(days=1)).isoformat()}"),
        (r"^    - date: 2027-11-19$", f"    - date: {(snapshot.start_date + dt.timedelta(days=2)).isoformat()}"),
        (r"^    - date: 2027-11-20$", f"    - date: {(snapshot.start_date + dt.timedelta(days=3)).isoformat()}"),
        (r"^    - date: 2027-11-21$", f"    - date: {snapshot.end_date.isoformat()}"),
        (r"^    hotel: InterContinental Osaka$", f"    hotel: {snapshot.hotel}"),
    ]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_reservations(snapshot: Snapshot) -> str:
    text = RESERVATIONS.read_text(encoding="utf-8")
    replacements = [(r"^    name: InterContinental Osaka$", f"    name: {snapshot.hotel}")]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def sync_hotels(snapshot: Snapshot) -> str:
    text = HOTELS.read_text(encoding="utf-8")
    replacements = [(r"^    name: InterContinental Osaka$", f"    name: {snapshot.hotel}")]
    new_text, _ = apply_replacements(text, replacements)
    return new_text


def update_last_updated(date_text: str) -> str:
    text = PROJECT_YAML.read_text(encoding="utf-8")
    new_text, _ = apply_replacements(
        text,
        [(r"^\s*last_updated:\s*\d{4}-\d{2}-\d{2}$", f"  last_updated: {date_text}")],
    )
    return new_text


def write_if_changed(path: Path, text: str, dry_run: bool, changed_files: list[Path]) -> None:
    current = path.read_text(encoding="utf-8") if path.exists() else None
    if current == text:
        return
    changed_files.append(path)
    if not dry_run:
        path.write_text(text, encoding="utf-8")


def run_git(args: list[str], check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=check,
    )


def commit_and_push(commit_message: str, push: bool) -> None:
    run_git(["add", "-A"])
    diff = run_git(["diff", "--cached", "--quiet"], check=False)
    if diff.returncode == 0:
        print("No staged changes after maintenance sync.")
        return
    run_git(["commit", "-m", commit_message])
    if push:
        run_git(["push", "origin", "HEAD"])


def load_daily_check_config() -> dict:
    if not DAILY_CHECKS_CONFIG.exists():
        return {"web_checks": [], "manual_checks": []}
    return json.loads(DAILY_CHECKS_CONFIG.read_text(encoding="utf-8"))


def fetch_web_page(url: str, timeout: int = 20) -> tuple[int, str, str]:
    req = request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/126.0 Safari/537.36"
            )
        },
    )
    with request.urlopen(req, timeout=timeout) as resp:  # noqa: S310 - controlled outbound fetch
        charset = resp.headers.get_content_charset() or "utf-8"
        body = resp.read().decode(charset, errors="replace")
        return getattr(resp, "status", 200), body, resp.headers.get_content_type()


def html_to_text(source: str) -> str:
    source = re.sub(r"(?is)<script.*?</script>", " ", source)
    source = re.sub(r"(?is)<style.*?</style>", " ", source)
    source = re.sub(r"(?s)<[^>]+>", " ", source)
    source = html.unescape(source)
    return re.sub(r"\s+", " ", source).strip()


def extract_title(source: str) -> str:
    match = re.search(r"(?is)<title[^>]*>(.*?)</title>", source)
    if not match:
        return ""
    return html.unescape(re.sub(r"\s+", " ", match.group(1)).strip())


def unique_matches(matches: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for item in matches:
        if item not in seen:
            seen.add(item)
            ordered.append(item)
    return ordered


def extract_pattern_matches(text: str, patterns: Iterable[str]) -> list[str]:
    results: list[str] = []
    for pattern in patterns:
        for match in re.findall(pattern, text, flags=re.IGNORECASE):
            if isinstance(match, tuple):
                results.append(next((value for value in match if value), ""))
            else:
                results.append(match)
    return [item for item in unique_matches(results) if item]


def evaluate_web_check(item: dict, checked_at: str) -> dict:
    result = {
        "id": item["id"],
        "category": item.get("category", ""),
        "label": item.get("label", item["id"]),
        "url": item["url"],
        "kind": item.get("kind", "status"),
        "checked_at": checked_at,
        "http_status": None,
        "title": "",
        "status": "unknown",
        "price_matches": [],
        "open_hits": [],
        "closed_hits": [],
        "error": "",
    }

    try:
        http_status, body, _content_type = fetch_web_page(item["url"])
        text = html_to_text(body)
        title = extract_title(body)
        open_hits = extract_pattern_matches(text, item.get("open_patterns", []))
        closed_hits = extract_pattern_matches(text, item.get("closed_patterns", []))
        price_matches = extract_pattern_matches(text, item.get("price_patterns", []))

        if closed_hits and not open_hits:
            status = "closed"
        elif open_hits and not closed_hits:
            status = "open"
        elif price_matches:
            status = "price_found"
        else:
            status = "unknown"

        result.update(
            {
                "http_status": http_status,
                "title": title,
                "status": status,
                "price_matches": price_matches,
                "open_hits": open_hits,
                "closed_hits": closed_hits,
            }
        )
    except (error.URLError, TimeoutError, ValueError, UnicodeDecodeError) as exc:
        result["status"] = "fetch_failed"
        result["error"] = str(exc)

    return result


def build_manual_result(item: dict, checked_at: str) -> dict:
    return {
        "id": item["id"],
        "category": item.get("category", ""),
        "label": item.get("label", item["id"]),
        "status": "manual_review",
        "checked_at": checked_at,
        "note": item.get("note", ""),
        "source": item.get("source", ""),
    }


def summarize_checks(web_results: list[dict], manual_results: list[dict]) -> dict:
    summary = {
        "total_web": len(web_results),
        "total_manual": len(manual_results),
        "open": 0,
        "closed": 0,
        "price_found": 0,
        "unknown": 0,
        "fetch_failed": 0,
        "manual_review": len(manual_results),
    }
    for item in web_results:
        status = item.get("status", "unknown")
        summary[status] = summary.get(status, 0) + 1
    return summary


def update_daily_status_report(snapshot: Snapshot, dry_run: bool, changed_files: list[Path]) -> None:
    config = load_daily_check_config()
    checked_at = dt.datetime.now().astimezone().isoformat(timespec="seconds")
    web_results: list[dict] = []
    manual_results: list[dict] = []

    if not dry_run:
        for item in config.get("web_checks", []):
            web_results.append(evaluate_web_check(item, checked_at))
        for item in config.get("manual_checks", []):
            manual_results.append(build_manual_result(item, checked_at))

    report = {
        "metadata": {
            "project": "2027 Osaka Trip",
            "version": snapshot.version,
            "checked_at": checked_at,
            "source": "scripts/daily_maintenance.py",
        },
        "summary": summarize_checks(web_results, manual_results),
        "web_checks": web_results,
        "manual_checks": manual_results,
    }
    write_if_changed(
        DAILY_STATUS_REPORT,
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        dry_run,
        changed_files,
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without writing or committing.")
    parser.add_argument("--touch", action="store_true", help="Update last_updated even if no other files changed.")
    parser.add_argument("--no-push", action="store_true", help="Commit locally but skip git push.")
    parser.add_argument(
        "--commit-message",
        default=None,
        help="Override the generated git commit message.",
    )
    args = parser.parse_args()

    snapshot = load_snapshot()
    changed_files: list[Path] = []

    write_if_changed(README, sync_readme(snapshot), args.dry_run, changed_files)
    write_if_changed(AI_CONTEXT, sync_ai_context(snapshot), args.dry_run, changed_files)
    write_if_changed(PROJECT_RULE, sync_project_rule(snapshot), args.dry_run, changed_files)
    write_if_changed(DECISIONS, sync_decisions(snapshot), args.dry_run, changed_files)
    write_if_changed(ITINERARY, sync_itinerary(snapshot), args.dry_run, changed_files)
    write_if_changed(RESERVATIONS, sync_reservations(snapshot), args.dry_run, changed_files)
    write_if_changed(HOTELS, sync_hotels(snapshot), args.dry_run, changed_files)
    update_daily_status_report(snapshot, args.dry_run, changed_files)

    should_update_timestamp = bool(changed_files) or args.touch
    if should_update_timestamp:
        today = dt.date.today().isoformat()
        write_if_changed(PROJECT_YAML, update_last_updated(today), args.dry_run, changed_files)

    if args.dry_run:
        for path in changed_files:
            print(f"Would update: {path.relative_to(ROOT)}")
        return 0

    if not changed_files:
        print("No maintenance changes detected.")
        return 0

    commit_message = args.commit_message or f"chore: daily maintenance sync {dt.date.today().isoformat()}"
    commit_and_push(commit_message, push=not args.no_push)
    print("Updated files:")
    for path in changed_files:
        print(f"- {path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
