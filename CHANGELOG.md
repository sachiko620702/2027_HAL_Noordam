# CHANGELOG

## V5.7.0 - 2026-07-06

### Changed

- Reworked the GitHub Pages homepage into a travel-plan introduction website with a more polished landing-page layout.
- Added travel rhythm, project frame, daily pulse, quick access, and watchlist sections to the generated homepage.
- Updated the maintenance script so both the root homepage and `docs/index.md` use the same website-oriented template.
- Bumped the project version markers to keep the public site and source-of-truth metadata aligned.

### Reason

The user wanted the project content to feel like a real travel planning site rather than a README-style page, so the homepage now presents the Osaka trip as a proper web experience.

### Affected sections

- GitHub Pages homepage
- Maintenance automation
- Version markers
- Repository metadata

## V5.6.0 - 2026-07-06

### Changed

- Added GitHub Pages root homepage synchronization to the daily maintenance flow.
- Synced both the root `index.md` homepage and `docs/index.md` from the same maintenance script.
- Added the rule requirement to regenerate GitHub Pages outputs before commit and push when maintenance changes occur.
- Added the new version record for the root homepage sync.

### Reason

The repository now needs a real root-level GitHub Pages entry point, not only the `docs/` homepage, so the public site stays aligned with the canonical database after every maintenance run.

### Affected sections

- Maintenance automation
- GitHub Pages output
- Repository rules
- Version control

## V5.5.0 - 2026-07-06

### Changed

- Reverted the dining scope back to non-Michelin-focused planning at the user's request.
- Aligned the repository rules, decision records, maintenance script, and GitHub Pages outputs with the non-Michelin dining scope.
- Updated the generated Pages homepage and daily status snapshot to the new project version.

### Reason

The project scope changed again, so the canonical repository and its GitHub Pages output need to reflect the non-Michelin dining preference everywhere.

### Affected sections

- Dining scope
- Maintenance automation
- GitHub Pages output
- Source-of-truth metadata

## V5.4.0 - 2026-07-06

### Changed

- Updated the fixed dining decision from three-star Michelin planning to non-Michelin-focused dining.
- Updated `DECISIONS.md` D006 while preserving the previous Michelin decision as historical context.
- Updated `README.md`, `AI_CONTEXT.md`, `PROJECT_RULE.md`, `AGENTS.md`, and `database/project.yaml` to reflect the new dining direction.
- Updated `ROADMAP.md` and `WATCHLIST.md` to track non-Michelin Osaka restaurant candidates, opening hours, booking windows, location fit, and cancellation policies.
- Updated `database/ticket_platforms_kkday_klook.yml` and `docs/09_票券平台/KKday_Klook_候補方案.md` so platform restaurant products remain candidate references only.
- Updated `scripts/daily_maintenance.py`, `database/daily_checks.json`, and `database/daily_status.json` so automated maintenance will not restore the old Michelin wording.
- Added `docs/13_版本與更新/2026-07-06_V5.4.0_非米其林餐飲方向.md` as the version update record.

### Reason

The user explicitly stated that they no longer want Michelin dining. The project dining direction is now comfort-, taste-, location-, reservation-, and slow-travel-oriented rather than Michelin-oriented.

### Affected sections

- Fixed project decisions
- Project metadata
- Dining roadmap and watchlist
- Ticket platform candidate planning
- Daily maintenance automation
- Version control

## V5.3.0 - 2026-07-06

### Changed

- Expanded `scripts/daily_maintenance.py` to run daily web checks for the configured watchlist sources and write the latest status report to `database/daily_status.json`.
- Added a data-driven daily checks config so price and availability monitoring can be extended without rewriting the automation script.
- Aligned the current version markers across `README.md`, `AI_CONTEXT.md`, and `database/project.yaml`.

### Reason

The repository now supports automated daily monitoring of source pages for price and open-status changes, which is the backbone for long-term maintenance of the Osaka travel plan.

### Affected sections

- Maintenance automation
- Daily monitoring
- Version markers
- Source-of-truth metadata

## V5.2.0 - 2026-07-06

### Changed

- Added `scripts/daily_maintenance.py` for scheduled repository maintenance, metadata sync, and git commit/push automation.
- Aligned the current version markers across `README.md`, `AI_CONTEXT.md`, and `database/project.yaml`.

### Reason

The repository now has a repeatable daily maintenance entry point that keeps the shared travel metadata in sync and publishes updates to GitHub.

### Affected sections

- Maintenance automation
- Version markers
- Source-of-truth metadata

## V5.1.0 - 2026-07-06

### Added

- Added `database/ticket_platforms_kkday_klook.yml` as a candidate data card for KKday / Klook ticket-platform planning.
- Added `docs/09_票券平台/KKday_Klook_候補方案.md` for Osaka ticket, transport, connectivity, and luxury-convenience use cases.
- Added KKday / Klook related tracking items to `WATCHLIST.md`.
- Added `docs/13_版本與更新/2026-07-06_V5.1.0_KKday_Klook.md` as the version update record.

### Reason

The project needs a maintainable way to compare KKday and Klook for USJ tickets, KIX airport transport, Osaka Amazing Pass / Osaka e-Pass, eSIM, private transfer, and luggage-related convenience services without overwriting the formal itinerary.

### Affected sections

- Database
- Docs
- Watchlist
- Version control

## V5.0.0 - 2026-07-06

### Changed

- Added AI-first knowledge base structure.
- Added AI_CONTEXT, CLAUDE, DECISIONS, ROADMAP, WATCHLIST, RESERVATION_SCHEDULE, RISK_REGISTER, and CHECKLISTS.
- Added expanded database files for transportation, shopping, itinerary, and reservations.
- Added YouTube and hotel templates.

### Reason

The project now supports long-term maintenance by ChatGPT, Codex, Claude Code, and other AI tools using GitHub main as the single source of truth.

### Affected sections

- Repository root files
- Database
- Templates
- Checklists
- Version control

## V4.0.0 - 2026-07-06

### Changed

- Set this GitHub repository as the single source of truth for the 2027 Osaka trip project.
- Added V4 maintenance structure for ChatGPT and Codex.
- Added README, AGENTS, PROJECT_RULE, database skeleton, and templates.
- Prepared docs folder for the current Osaka travel handbook.

### Reason

The previous workflow used ZIP files and separate Markdown files. V4 moves the project into one GitHub repository so ChatGPT and Codex can maintain the same source.

### Affected sections

- Repository structure
- Project rules
- Database skeleton
- Travel handbook docs
