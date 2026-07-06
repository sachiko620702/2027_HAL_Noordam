# CHANGELOG

## V5.24.0 - 2026-07-06

### Changed

- Initialized the formal budget model in `database/budget_model.yml`.
- Added customer-readable budget model document `docs/06_預算/2027大阪自由行_預算模型_V5.24.0.md`.
- Added version update note `docs/13_版本與更新/V5.24.0_預算模型初始化.md`.
- Updated customer-facing budget table and GitHub Pages budget summary.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, customer-facing tables, homepage files, and daily sync status.
- Added D032 Budget model V5.24.0.

### Reason

The user corrected overestimated transportation assumptions:

- Flight budget: TWD 35,000 for two travelers round trip.
- KKday #129909 airport transfer: TWD 2,600 each way, TWD 5,200 round trip.
- KKday #536220 hotel-USJ transfer: TWD 1,732 each way, TWD 3,464 round trip.

### Impact

- Recommended budget baseline is now TWD 327,664 for two travelers.
- Safety ceiling is TWD 380,000 for two travelers.
- Luxury handbags, jewelry, and watches are excluded from the base budget and should be budgeted separately.
- 2027 official prices, booking availability, route rules, hotel rates, USJ tickets, and restaurant prices still require reconfirmation.

### Follow-up required

- Confirm EVA Air BR178 / BR129 2027-11 official fare and ticketing status.
- Confirm KKday #129909 2027-11 airport transfer price, vehicle, luggage, route, waiting time, and availability.
- Confirm KKday #536220 2027-11 hotel-USJ transfer price, 20KM scope, pickup point, vehicle, luggage, and availability.
- Confirm InterContinental Osaka 2027-11 hotel rate, BOGO feasibility, lounge room type, and early check-in cost.
- Confirm USJ 2027 Studio Pass / Express Pass prices.
- Confirm PIERRE 2027-11-20 dinner price, service charge, and anniversary add-ons.

## V5.23.0 - 2026-07-06

### Changed

- Updated Day 4 dinner direction from V5.22.0 sushi preference to PIERRE Anniversary Dinner at InterContinental Osaka.
- Updated `database/day4_shinsaibashi_hotel_dinner.yml` with the PIERRE anniversary dinner plan, window / Osaka night-view seat request, and reservation note draft.
- Added decision D031 for Day 4 Anniversary Dinner at PIERRE.
- Updated DECISIONS, README, AI_CONTEXT, PROJECT_RULE, AGENTS, ROADMAP, WATCHLIST, customer-facing tables, hourly itinerary database, homepage files, and daily sync status.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.23.0.md`.
- Added `docs/13_版本與更新/V5.23.0_Day4_PIERRE_Anniversary_Dinner更新.md`.
- Kept V5.22.0 sushi dinner preference as fallback-only if the user changes back.

### Reason

The user explicitly stated: “Anniversary Dinner Pierre的靠窗座位，盡享大阪夜景美景。”

### Impact

- Day 4 dinner is now PIERRE Anniversary Dinner, not sushi.
- Reservation notes must request an anniversary dinner, a window seat / Osaka night-view table, and optionally anniversary dessert message or photo support.
- Window / night-view seating is a request only and must be confirmed by the restaurant.
- Day 4 remains aligned with Luxury Slow Travel because dinner stays inside InterContinental Osaka after the afternoon hotel rest / lounge block.

### Follow-up required

- Confirm PIERRE 2027/11/20 dinner booking window, operating hours, menu, price, service charge, dress code, cancellation policy, and seat request rules.
- Confirm whether PIERRE can arrange anniversary dessert message, small celebration support, and photo assistance.
- Keep Day 4 sushi candidates only as fallback if the user changes back.

## V5.22.0 - 2026-07-06

### Changed

- Updated Day 1 dinner from candidate list to formal dinner direction: 千房 梅田周邊店 / Chibo Umeda-area branch.
- Added `database/day1_formal_dinner.yml`.
- Added `docs/02_餐廳美食/Day1_正式晚餐_千房梅田周邊店_V5.22.0.md`.
- Updated `database/day1_umeda_dinner_candidates.yml` to mark Chibo as the formal selection while keeping other candidates as backups.
- Updated `database/itinerary_hourly.yml`, DECISIONS, README, AI_CONTEXT, PROJECT_RULE, AGENTS, customer-facing tables, and homepage files for the Day 1 Chibo dinner direction.
- Retained the Day 4 dinner preference note: sushi is preferred and exact restaurant is pending.

### Reason

The user selected “千房 梅田周邊店” for Day 1 dinner after the Pokémon Center OSAKA stop.

### Impact

- Day 1 dinner is now Chibo / 千房 as the formal direction.
- The exact Chibo branch, booking rules, price, business hours, and route from Pokémon Center OSAKA still need confirmation.

### Follow-up required

- Confirm the exact Chibo branch near Pokémon Center OSAKA / Umeda.
- Confirm Chibo 2027/11/17 business hours, booking window, price, cancellation policy, and walking route.
- Search and add Day 4 sushi dinner candidates near InterContinental Osaka / Umeda / Osaka Station.

## V5.21.0 - 2026-07-06

### Changed

- Added Day 4 formal route for 2027/11/20: Shinsaibashi-centered activity range before and around lunch.
- Confirmed Day 4 sequence: Pokémon Center OSAKA DX / Daimaru Shinsaibashi area → Shinsaibashi lunch → return to InterContinental Osaka after lunch → Executive Lounge afternoon tea / hotel-nearby activities → in-hotel dinner.
- Added `database/day4_shinsaibashi_hotel_dinner.yml`.
- Updated Day 4 related database, docs, homepage, README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, and daily sync status.

### Follow-up required

- Confirm Pokémon Center OSAKA DX 2027/11/20 hours, entry rules, events, and limited goods.
- Add Shinsaibashi lunch candidates that fit a post-lunch return to InterContinental Osaka.

## V5.20.0 - 2026-07-06

### Changed

- Searched and added Day 1 dinner candidate references near Pokémon Center OSAKA / Umeda.
- Added `database/day1_umeda_dinner_candidates.yml`.
- Added `docs/02_餐廳美食/Day1_梅田PokemonCenter附近晚餐候選_V5.20.0.md`.

### Candidate restaurants added

- お好み焼 きじ 梅田スカイビル店 / Okonomiyaki Kiji Umeda Sky Building
- 千房 梅田周邊店 / Chibo Umeda-area branch
- ねぎ焼やまもと 梅田エスト店 / Negiyaki Yamamoto Umeda EST
- グリル ロン ホワイティうめだ店 / Grill Ron Whity Umeda
- 串かつだるま ルクア大阪店 / Kushikatsu Daruma LUCUA Osaka
- はなだこ / Hanadako
- つるとんたん TOP CHEFS / Tsurutontan TOP CHEFS

### Follow-up required

- Confirm 2027/11/17 business hours, exact location, budget, booking rules, and walking time from Pokémon Center OSAKA.
