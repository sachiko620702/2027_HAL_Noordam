# CHANGELOG

## V5.19.0 - 2026-07-06

### Changed

- Added Day 1 arrival-day Executive Lounge afternoon tea target at InterContinental Osaka.
- Refined Day 1 formal sequence: afternoon tea, rest at the hotel, Umeda Pokémon Center OSAKA, dinner near Pokémon Center, then return to the hotel.
- Added `database/hotel_lounge.yml` for InterContinental Osaka lounge planning.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.19.0.md`.
- Updated `database/itinerary_hourly.yml` with the Day 1 rest block and dinner-near-Pokémon-Center sequence.
- Updated `database/customer_facing_travel_plan.yml` and `docs/15_顧客版資料/旅遊規劃三表.md`.
- Updated GitHub Pages root `index.md` and `docs/index.md` so the homepage itinerary table is now hourly instead of a daily summary table.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, and DECISIONS.

### Reason

The user first specified that Day 1 should use afternoon tea, then clarified the desired order: after afternoon tea, rest at the hotel, go to Umeda Pokémon Center, eat dinner near Pokémon Center, and return to the hotel. The user also requested that the homepage itinerary table be changed to an hourly format.

### Impact

- Day 1 is now more explicitly aligned with Luxury Slow Travel and includes a rest block before going out to Umeda.
- Day 1 dinner must be selected from restaurants near Pokémon Center OSAKA / Umeda.
- InterContinental Osaka Executive Lounge arrival-day afternoon tea access must be confirmed before departure.
- The project homepage now shows the trip by hour rather than only by day.

### Follow-up required

- Confirm InterContinental Osaka Executive Lounge 2027 afternoon tea hours, arrival-day access rules, room benefit eligibility, and companion policy.
- Confirm Pokémon Center OSAKA 2027-11-17 hours and event / entry rules.
- Add dinner candidates near Pokémon Center OSAKA in Umeda.
- Keep the homepage hourly table synchronized with `database/itinerary_hourly.yml`.

## V5.18.0 - 2026-07-06

### Changed

- Recorded the user instruction that the flight timetable should directly use the current schedule.
- Added the current flight timetable planning baseline:
  - EVA Air BR178 TPE 06:30 → KIX 10:10.
  - EVA Air BR129 KIX 18:30 → TPE 20:30.
- Added `database/flight_schedule.yml`.
- Added `database/itinerary_hourly.yml`.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.18.0.md`.
- Updated customer-facing three tables with flight times.
- Updated GitHub Pages root page and docs homepage.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, and daily sync status.

### Reason

The user explicitly instructed: “飛機班表直接用現在的”. The project therefore now uses the current BR178 / BR129 timetable as the hourly itinerary planning baseline instead of leaving the flight timing blank.

### Impact

- Day 1 now assumes BR178 arrives at KIX at 10:10, allowing early afternoon hotel arrival and a late afternoon / evening Pokémon Center OSAKA stop if energy allows.
- Day 5 now assumes BR129 departs KIX at 18:30, allowing a relaxed breakfast, packing, checkout, and possible final nearby shopping before airport transfer.
- The schedule remains a planning baseline only. 2027/11 official EVA Air schedule, fare, aircraft, terminal, baggage, seat selection, and booking status must still be confirmed before ticketing.

### Follow-up required

- Reconfirm BR178 / BR129 on EVA Air official channels when 2027/11 schedules open.
- Confirm final fare, aircraft, terminal, baggage, seat selection, and ticket rules.
- Recalculate KKday #129909 pickup times after the official flight times are confirmed.
- Keep the hourly itinerary synchronized with any future flight schedule changes.

## V5.17.0 - 2026-07-06

### Changed

- Added Day 1 formal stop: Pokémon Center OSAKA in Umeda.
- Added Day 3 formal lunch: 京 鰻和 本店 / 京 うな和 本店.
- Added Day 3 formal dinner: 天ぷら 京星 / Tempura Kyoboshi.
- Recorded 天ぷら 京星 primary reservation route as TABLEALL Reservation Request.
- Recorded current TABLEALL reference: dinner 18:00-19:30, Kyoboshi omakase course, JPY 25,500, including TABLEALL booking fee JPY 8,000.
- Added Day 4 formal stop: Pokémon Center OSAKA DX.
- Added Day 4 formal plan: InterContinental Osaka Executive Lounge afternoon tea.
- Updated database, customer-facing three tables, GitHub Pages root page, docs homepage, Day 3 formal itinerary, README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, and WATCHLIST.

### Reason

The user provided new formal itinerary details and the TABLEALL reservation URL for 天ぷら 京星.

### Follow-up required

- Confirm Pokémon Center OSAKA 2027-11-17 hours, event rules, and limited goods.
- Confirm 京 鰻和 本店 2027-11-19 lunch reservation, price, fee, menu, and cancellation policy.
- Confirm 天ぷら 京星 2027-11-19 TABLEALL availability, final price, booking fee, cancellation policy, and actual dinner time.
- Confirm Pokémon Center OSAKA DX 2027-11-20 hours, event rules, and limited goods.
- Confirm InterContinental Osaka Executive Lounge 2027 afternoon tea access and hours.

## V5.16.1 - 2026-07-06

### Changed

- Synced AGENTS and ROADMAP with the already-confirmed Day 3 formal itinerary.
- Reaffirmed that Day 3 is formal, not candidate: Kizu Market brunch + Kyoto sweets souvenirs + Pokemon / anime.
- Reaffirmed that Day 3 primary transportation is public rail plus short taxi, with KKday #133661 retained only as backup.

### Reason

The user reiterated that the former candidate route is now formally confirmed. The main V5.16.0 decision was already recorded, and this patch keeps collaboration and roadmap files consistent for future AI maintenance.

## V5.16.0 - 2026-07-06

### Changed

- Promoted Day 3 from candidate to formal itinerary.
- Confirmed Day 3 theme: Kizu Market brunch + Kyoto sweets souvenirs + Pokemon / anime.
- Confirmed Day 3 primary transportation as public rail plus short taxi.
- Kept KKday #133661 10-hour charter as backup only for rain, fatigue, heavy shopping, or door-to-door comfort.
- Added `docs/01_行程規劃/2027-11-19_Day3_木津市場京都甜點寶可夢動漫正式行程_V5.16.0.md`.
- Marked the V5.14.0 Day 3 candidate document as historical and superseded.
- Updated customer-facing three tables, GitHub Pages root page, docs homepage, README, AI_CONTEXT, PROJECT_RULE, DECISIONS, WATCHLIST, daily status, and version record.

### Reason

The user explicitly confirmed that the previous candidate route, 木津市場早午餐＋京都甜點伴手禮＋寶可夢／動漫, is now the formal itinerary.

### Follow-up required

- Reconfirm Kizu Market 2027-11-19 market calendar and brunch options.
- Reconfirm Tsuruya Yoshinobu IRODORI, Suetomi, and MALEBRANCHE Cacao 365 Gion 2027-11-19 hours, closures, and product availability.
- Reconfirm Pokemon Center KYOTO and Kyoto International Manga Museum 2027 hours, closures, events, and product availability.
- Estimate Day 3 rail plus short taxi timing and cost closer to departure.
- Decide closer to departure whether KKday #133661 backup should be retained.

## V5.15.0 - 2026-07-06

### Changed

- Checked current official business-hour sources for the three Day 3 Kyoto sweets shops.
- Recorded current regular hours and closure rules for Tsuruya Yoshinobu IRODORI, MALEBRANCHE Cacao 365 Gion, and Suetomi.
- Marked 2027-11-19 shop status as likely workable if current rules continue, but still requiring final 2027 confirmation.
- Added Kyoto access note: after Osaka Kizu Market, go to Kyoto Station by metro plus JR, or use a short taxi to Osaka Station then JR; use short taxi inside Kyoto as needed.
- Added breakfast policy: normal breakfasts at InterContinental Osaka Executive Lounge, except Day 3 Kizu Market brunch.
- Updated project, itinerary, restaurants, customer-facing plan, README, and changelog.

### Reason

The user asked to confirm whether the three shops are open on 2027-11-19, record their hours, add Kyoto transportation notes, and record the breakfast preference.

### Follow-up required

- Reconfirm the three sweets shops after their 2027 calendar and holiday notices are published.
- Reconfirm Osaka Kizu Market 2027-11-19 market calendar.
- Reconfirm InterContinental Osaka Executive Lounge breakfast hours and access rules.

## V5.14.0 - 2026-07-06

### Changed

- Updated Day 3 candidate route after the user added three Kyoto sweets stops: Tsuruya Yoshinobu IRODORI, MALEBRANCHE Kaka 365 Gion, and Suetomi.
- Changed Day 3 transport priority: no-charter route is now the primary candidate using public rail plus short taxi.
- Kept KKday product #133661 as backup only for rain, fatigue, heavy shopping, or door-to-door comfort.
- Updated project, itinerary, transportation, restaurants, customer-facing travel plan, README, decisions, docs, and changelog.
- Added `docs/01_行程規劃/2027-11-19_Day3_不包車京都甜點寶可夢動漫候補_V5.14.0.md`.

### Reason

The user asked whether this route can be done without a charter after adding three Kyoto sweets shops. The route is concentrated around Kyoto Station, central Kyoto, and Gion, so it is better as a rail plus short taxi route.

### Follow-up required

- Confirm 2027 opening hours and closure days for the three sweets shops.
- Confirm Osaka Kizu Market 2027-11-19 calendar and brunch candidates.
- Confirm Day 3 actual rail and taxi timing closer to departure.
- Decide whether KKday #133661 remains only a backup or is removed from Day 3.

## V5.13.0 - 2026-07-06

### Changed

- Added a Day 3 candidate itinerary for 2027-11-19 focused on relaxed pacing, food, photo spots, Pokemon, Conan atmosphere, and anime.
- Recorded the user preference that the plan does not need to follow KKday sample routes and should prioritize an easy pace that matches personal interests.
- Added KKday product #133661 as the candidate 10-hour private charter for Day 3.
- Added candidate route: InterContinental Osaka, Osaka Kizu Market brunch, Pokemon Center KYOTO, Kyoto International Manga Museum, Higashiyama/Gion photo walk, and Shinsaibashi/Dotonbori or hotel drop-off.
- Added `docs/01_行程規劃/2027-11-19_Day3_木津市場京都寶可夢動漫候補包車_V5.13.0.md`.

## V5.12.0 - 2026-07-06

### Changed

- Added customer-facing travel planning tables.
- Added `database/customer_facing_travel_plan.yml` and `docs/15_顧客版資料/旅遊規劃三表.md`.
- Updated GitHub Pages around the three customer-facing tables.

## V5.11.0 - 2026-07-06

### Changed

- Added KKday product #536220 as the selected candidate product for InterContinental Osaka and USJ round-trip transfer.

## V5.10.0 - 2026-07-06

### Changed

- Added KKday product #129909 as the selected candidate product for KIX and InterContinental Osaka round-trip transfer.

## V5.9.0 - 2026-07-06

### Changed

- Added selected outbound flight BR178 and return flight BR129.
- Added KKday transfer direction for hotel-USJ round trip.
