# CHANGELOG

## V5.9.0 - 2026-07-06

### Changed

- Added selected outbound flight: EVA Air BR178 from TPE to KIX.
- Added selected return flight: EVA Air BR129 from KIX to TPE.
- Added KKday as the selected transfer direction for both InterContinental Osaka to USJ and USJ to InterContinental Osaka.
- Updated transportation, reservations, itinerary, budget, ticket-platform planning, roadmap, watchlist, reservation schedule, risk register, README, AI context, project rules, and agent assumptions.
- Added `docs/13_版本與更新/2026-07-06_V5.9.0_航班與USJ接送.md`.

### Reason

The user provided new planning decisions: outbound BR178, return BR129, and KKday transfer for hotel-USJ round trip.

### Follow-up required

- Confirm EVA Air official 2027-11 BR178 / BR129 schedule, fare, baggage, seat selection, and ticket rules.
- Confirm KKday hotel-USJ transfer product, price, pickup time, pickup point, return pickup point, vehicle type, and booking rules.
- `docs/02_預算/預算追蹤_V5.9.0.md` still needs follow-up; canonical budget data is already stored in `database/budget.yaml`.
- `scripts/daily_maintenance.py` still requires follow-up from Codex or local git tooling.

## V5.8.0 - 2026-07-06

### Changed

- Updated dining direction from non-Michelin-focused to taste-first dining.
- Added travel insurance amount TWD 6,900.
- Added phone roaming for two people, total TWD 499.
- Set KKday as selected airport transfer direction for KIX to hotel and hotel to KIX.
- Added V5.8.0 budget and version docs.

## V5.7.0 - 2026-07-06

### Changed

- Reworked the GitHub Pages homepage into a travel-plan introduction website.
- Added travel rhythm, project frame, daily pulse, quick access, and watchlist sections.
- Aligned version markers across public pages and source files.

## V5.6.0 - 2026-07-06

### Changed

- Added GitHub Pages root homepage synchronization to the daily maintenance flow.
- Synced root `index.md` and `docs/index.md` from the maintenance script.

## V5.5.0 - 2026-07-06

### Changed

- Reverted the dining scope back to non-Michelin-focused planning at the user's request.
- Aligned repository rules, decision records, maintenance script, and GitHub Pages output at that time.

## V5.4.0 - 2026-07-06

### Changed

- Updated the fixed dining decision from three-star Michelin planning to non-Michelin-focused dining.
- Updated project metadata, roadmap, watchlist, ticket-platform planning, and version record.

## V5.3.0 - 2026-07-06

### Changed

- Expanded daily maintenance to run configured web checks and write `database/daily_status.json`.
- Added a data-driven daily checks config.

## V5.2.0 - 2026-07-06

### Changed

- Added `scripts/daily_maintenance.py` for scheduled repository maintenance and metadata sync.

## V5.1.0 - 2026-07-06

### Added

- Added `database/ticket_platforms_kkday_klook.yml`.
- Added `docs/09_票券平台/KKday_Klook_候補方案.md`.
- Added KKday / Klook related tracking items to WATCHLIST.

## V5.0.0 - 2026-07-06

### Changed

- Added AI-first knowledge base structure.
- Added AI_CONTEXT, CLAUDE, DECISIONS, ROADMAP, WATCHLIST, RESERVATION_SCHEDULE, RISK_REGISTER, and expanded database files.

## V4.0.0 - 2026-07-06

### Changed

- Set this GitHub repository as the single source of truth for the 2027 Osaka trip project.
- Added V4 maintenance structure and initial repository skeleton.
