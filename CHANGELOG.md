# CHANGELOG

## V5.21.0 - 2026-07-06

### Changed

- Added Day 4 formal route for 2027/11/20: Shinsaibashi-centered activity range before and around lunch.
- Confirmed Day 4 sequence: Pokémon Center OSAKA DX / Daimaru Shinsaibashi area → Shinsaibashi lunch → return to InterContinental Osaka after lunch → Executive Lounge afternoon tea / hotel-nearby activities → in-hotel dinner.
- Added `database/day4_shinsaibashi_hotel_dinner.yml`.
- Updated `database/itinerary_hourly.yml` with the Day 4 post-lunch return-to-hotel route and hotel dinner block.
- Updated `database/hotel_lounge.yml` with Day 4 afternoon tea, hotel-nearby activity, and in-hotel dinner flow.
- Updated `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, root `index.md`, and `docs/index.md` with the Day 4 plan.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.20.0.md` as the Day 4 hourly planning document generated during this update cycle.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, and daily sync status.

### Day 4 confirmed direction

- Activity range: Shinsaibashi-centered.
- Anchor stop: Pokémon Center OSAKA DX / Daimaru Shinsaibashi.
- Lunch: Shinsaibashi-area candidate needed.
- After lunch: return to InterContinental Osaka.
- Afternoon: hotel / hotel-nearby activities only, with Executive Lounge afternoon tea retained.
- Dinner: InterContinental Osaka in-hotel restaurant.

### In-hotel dinner candidates

- PIERRE / フレンチレストラン ピエール: primary formal dinner candidate.
- NOKA Roast & Grill / ノカ ロースト & グリル: relaxed in-hotel backup.
- ADEE Lounge & Bar / アディ ラウンジ＆バー: optional after-dinner lounge / nightcap only, not the main dinner.

### Reason

The user explicitly specified that Day 4 should mainly stay within Shinsaibashi, return to the hotel after lunch, keep later activities near the hotel, and use an in-hotel restaurant for dinner.

### Impact

- Day 4 is now more consistent with Luxury Slow Travel.
- Day 4 afternoon should not include distant attractions or a second long shopping area.
- Day 4 dinner should not be moved to Shinsaibashi, Namba, or Umeda unless the user explicitly changes the plan.
- Day 4 lunch and in-hotel dinner now have clear follow-up tasks.

### Follow-up required

- Confirm Pokémon Center OSAKA DX 2027/11/20 hours, entry rules, events, and limited goods.
- Add Shinsaibashi lunch candidates that fit a post-lunch return to InterContinental Osaka.
- Confirm Shinsaibashi → InterContinental Osaka return route by Osaka Metro Midosuji Line vs taxi.
- Confirm InterContinental Osaka Executive Lounge 2027/11/20 afternoon tea hours and eligibility.
- Confirm PIERRE / NOKA 2027/11/20 dinner availability, booking window, menu, price, service charge, dress code, and cancellation policy.

## V5.20.0 - 2026-07-06

### Changed

- Searched and added Day 1 dinner candidate references near Pokémon Center OSAKA / Umeda.
- Added `database/day1_umeda_dinner_candidates.yml`.
- Added `docs/02_餐廳美食/Day1_梅田PokemonCenter附近晚餐候選_V5.20.0.md`.
- Updated `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, root `index.md`, and `docs/index.md` to mark Day 1 dinner as “candidate list created”.
- Updated README with the Day 1 dinner candidate list.

### Candidate restaurants added

- お好み焼 きじ 梅田スカイビル店 / Okonomiyaki Kiji Umeda Sky Building
- 千房 梅田周邊店 / Chibo Umeda-area branch
- ねぎ焼やまもと 梅田エスト店 / Negiyaki Yamamoto Umeda EST
- グリル ロン ホワイティうめだ店 / Grill Ron Whity Umeda
- 串かつだるま ルクア大阪店 / Kushikatsu Daruma LUCUA Osaka
- はなだこ / Hanadako
- つるとんたん TOP CHEFS / Tsurutontan TOP CHEFS

### Reason

The user asked to search for dinner references near Pokémon Center OSAKA in Umeda with good reviews. Because live Google Maps / Tabelog scores could not be reliably captured through the available tool, the restaurants were recorded as candidate references and all review scores, 2027 hours, prices, reservation rules, and queue risks are marked as needing reconfirmation.

### Impact

- Day 1 dinner is no longer an empty TODO; it now has a structured candidate list.
- No candidate has been promoted to the formal itinerary.
- The final Day 1 dinner decision still requires user confirmation.

### Follow-up required

- Reconfirm Google Maps ratings and Tabelog scores for all candidates.
- Reconfirm 2027/11/17 business hours, reservation availability, prices, and cancellation rules.
- Confirm walking time from Pokémon Center OSAKA to each restaurant.
- Choose one formal Day 1 dinner candidate only after user confirmation.

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
