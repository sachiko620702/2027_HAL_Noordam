# CHANGELOG

## V5.11.0 - 2026-07-06

### Changed

- Added KKday product #536220 as the selected candidate product for InterContinental Osaka and USJ round-trip transfer.
- Recorded visible starting price TWD 600, 4.8 rating, 400+ sold, e-voucher, 05:00-22:00 service time, Osaka city / Kansai Airport / USJ service area, 30-minute waiting time, JPY 3,000/30-minute overtime fee, JPY 300/km extra mileage fee, and 20 km point-to-point limit.
- Recommended luxury 7-seater for two travelers; added comfort 10-seater as backup.
- Updated project, transportation, reservations, budget, ticket-platform database, ticket-platform docs, README, AI context, watchlist, reservation schedule, risk register, and version record.
- Added `docs/13_版本與更新/2026-07-06_V5.11.0_KKday飯店USJ接送商品536220.md`.

### Reason

The user provided the exact KKday product URL for the hotel-USJ transfer and asked to update the project.

### Follow-up required

- Confirm whether 2027/11/18 is selectable on KKday product #536220.
- Confirm actual route prices for InterContinental Osaka to USJ and USJ to InterContinental Osaka after selecting date, route, and vehicle type.
- Confirm USJ return pickup point after 2027 USJ opening hours and Express Pass plan are known.

## V5.10.0 - 2026-07-06

### Changed

- Added KKday product #129909 as the selected candidate product for KIX and InterContinental Osaka round-trip transfer.
- Recommended luxury 7-seater for two travelers if checked luggage is 3 pieces or fewer.
- Added comfort 10-seater as backup if checked luggage exceeds 3 pieces or more space is preferred.
- Added product rules: 4.9 rating, 20K+ sold, 3-day free cancellation, e-voucher, 90-minute airport arrival wait, 30-minute departure wait, JPY 2,000 night surcharge, and JPY 5,000/hour overtime for 7-14 seater.
- Updated project, transportation, reservations, budget, ticket-platform docs, README, and version record.

### Reason

The user provided the exact KKday product URL and asked to search the airport transfer product and price, then update the project.

### Follow-up required

- KKday public page text did not expose the base route price. Confirm price manually after selecting date, route, and vehicle type in KKday.
- Confirm whether actual luggage count fits the 7-seater limit.
- Recheck availability when 2027/11/17 and 2027/11/21 become selectable.

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
- `scripts/daily_maintenance.py` still requires follow-up from Codex or local git tooling.

## V5.8.0 - 2026-07-06

### Changed

- Updated dining direction from non-Michelin-focused to taste-first dining.
- Added travel insurance amount TWD 6,900.
- Added phone roaming for two people, total TWD 499.
- Set KKday as selected airport transfer direction for KIX to hotel and hotel to KIX.

## V5.7.0 - 2026-07-06

### Changed

- Reworked the GitHub Pages homepage into a travel-plan introduction website.
- Added travel rhythm, project frame, daily pulse, quick access, and watchlist sections.

## V5.6.0 - 2026-07-06

### Changed

- Added GitHub Pages root homepage synchronization to the daily maintenance flow.

## V5.5.0 - 2026-07-06

### Changed

- Reverted the dining scope back to non-Michelin-focused planning at the user's request.

## V5.4.0 - 2026-07-06

### Changed

- Updated the fixed dining decision from three-star Michelin planning to non-Michelin-focused dining.

## V5.3.0 - 2026-07-06

### Changed

- Expanded daily maintenance to run configured web checks and write `database/daily_status.json`.

## V5.2.0 - 2026-07-06

### Changed

- Added `scripts/daily_maintenance.py` for scheduled repository maintenance and metadata sync.

## V5.1.0 - 2026-07-06

### Added

- Added `database/ticket_platforms_kkday_klook.yml`.

## V5.0.0 - 2026-07-06

### Changed

- Added AI-first knowledge base structure.

## V4.0.0 - 2026-07-06

### Changed

- Set this GitHub repository as the single source of truth for the 2027 Osaka trip project.
