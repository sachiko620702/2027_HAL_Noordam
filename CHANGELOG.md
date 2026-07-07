# CHANGELOG

## V5.27.0 - 2026-07-07

### Changed

- Consolidated the public travel website into `web/index.html` and `web/styles.css`.
- Replaced root `index.md` and `docs/index.md` with lightweight entry pages that point to `web/`.
- Added the travel-agency style customer-facing homepage with a stronger visual hierarchy, preparation reminder calendar, itinerary cards, budget summary, and dining spotlight sections.
- Updated `scripts/daily_maintenance.py` so future syncs keep the root and `docs/` entry pages as lightweight pointers.
- Updated README and PROJECT_RULE to reflect the `web/` publication layout.
- Added version note `docs/13_版本與更新/V5.27.0_Web_Travel_Site.md`.

### Reason

The user requested that all GitHub Pages-facing files be centralized under `./web` and that the public site present the trip as a customer-facing travel-agency style page.

### Impact

- Public-facing content is now clearly separated from repository source data.
- The `web/` folder holds the main site presentation files.
- Root and `docs/` homepages now act only as pointers.

## V5.26.1 - 2026-07-07

### Changed

- Added KKday #536220 hotel-USJ transfer to the formal 2027/10/10 purchase batch.
- Updated `database/reservation_purchase_timeline.yml` to V5.26.1.
- Updated the readable reservation and purchase timeline document `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md` with V5.26.1 content.
- Updated WATCHLIST and ROADMAP to remove the previous “purchase date unassigned” status for KKday #536220.
- Updated customer-facing tables, customer-facing database, README, GitHub Pages index, and docs index.
- Added version note `docs/13_版本與更新/V5.26.1_KKday_USJ接送購買日補入.md`.
- Added `docs/15_顧客版資料/旅遊常用表格總覽.md` as a working summary for common travel tables.
- Added README, root `index.md`, and `docs/index.md` links to the new common tables summary.
- Updated `docs/15_顧客版資料/旅遊常用表格總覽.md` with a calendar-style preparation reminder table for booking and purchase dates.

### Timeline impact

| 日期 | 項目 | 金額 |
|---|---|---:|
| 2027/10/10 | 買 KKday USJ 接送｜KKday #536220 | 待確認（V5.24.0 參考 3,464 TWD） |

### Reason

The user instructed to proceed according to the recommended update sections. The previous recommendation was to decide whether KKday #536220 hotel-USJ transfer should be added to the 2027/10/10 purchase timeline.

### Impact

- 2027/10/10 purchase batch now includes KKday #129909 airport transfer, KKday #536220 hotel-USJ transfer, and USJ Studio Pass.
- Recommended TWD budget remains TWD 325,664 for two travelers.
- Safety ceiling remains TWD 380,000 for two travelers.
- KKday #536220 was already included in the transportation budget; this update only assigns the purchase date.

### Follow-up required

- Confirm KKday #536220 2027/11/18 availability.
- Confirm InterContinental Osaka → USJ and USJ → InterContinental Osaka route pricing.
- Confirm USJ return pickup point, 20KM rule, vehicle, luggage, waiting time, and cancellation policy before 2027/10/10.

## V5.26.0 - 2026-07-07

### Changed

- Added the formal reservation and purchase timeline database: `database/reservation_purchase_timeline.yml`.
- Added the readable reservation and purchase timeline document: `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`.
- Added the V5.26.0 budget model document: `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`.
- Added the version update note: `docs/13_版本與更新/V5.26.0_預約購買時間軸.md`.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, project database, customer-facing tables, budget model, homepage files, and daily sync status.
- Updated the EVA Air BR178 / BR129 flight budget reference from TWD 35,000 to TWD 36,000 for two travelers.
- Updated the recommended TWD budget baseline from TWD 324,664 to TWD 325,664 for two travelers.
- Added InterContinental Ambassador renewal as a separate USD-tracked item: USD 250 planned for 2026/12.
- Added D034 Reservation and purchase timeline V5.26.0.
- Added D035 Ambassador renewal tracking.
- Updated D013 Flights and D032 Budget model V5.26.0.

### Reservation / purchase timeline

| 日期 | 項目 | 金額 |
|---|---|---:|
| 2026/11 | 買機票 EVA Air BR178／BR129 | 36,000 TWD |
| 2026/12 | 續約洲際酒店大使 | 250 USD |
| 2027/09/17 | 搶購 USJ Express Pass 7 | 待官方公布 |
| 2027/09/17 | PIERRE Anniversary Dinner 訂位 | 待確認 |
| 2027/10/10 | 買 KKday 機場接送 | 待確認 |
| 2027/10/10 | 買 USJ Studio Pass | 待官方公布 |
| 2027/11/05 | 旅遊保險 | 6,900 TWD |
| 2027/11/05 | 申請漫遊 | 499 TWD |

### Reason

The user clarified that the required output should be a date-sorted purchase / reservation timeline rather than a broad TODO list, and provided the target schedule and amounts.

### Impact

- The project now has a dedicated reservation / purchase source file.
- Flight budget increases by TWD 1,000.
- Transportation budget increases from TWD 54,664 to TWD 55,664.
- Recommended TWD budget increases from TWD 324,664 to TWD 325,664 for two travelers.
- Recommended per-person TWD budget increases from TWD 162,332 to TWD 162,832.
- Safety ceiling remains TWD 380,000 for two travelers.
- InterContinental Ambassador renewal USD 250 is tracked separately and is not forcibly converted into TWD until an exchange rate or actual card charge is confirmed.
- KKday #536220 hotel-USJ transfer remained a selected project transportation item, but V5.26.0 did not assign its purchase date.

### Follow-up required

- Confirm EVA Air BR178 / BR129 official 2027-11 schedule, fare, baggage, aircraft, terminal, and ticketing status before the 2026/11 purchase target.
- Confirm InterContinental Ambassador renewal price, benefits, BOGO / Weekend Night rules, upgrade implications, and whether it affects the InterContinental Osaka stay plan.
- Confirm USJ Express Pass 7 and Studio Pass 2027 official release dates, prices, and inventory.
- Confirm PIERRE 2027/11/20 booking window, menu, price, service charge, dress code, cancellation policy, and seat request rules.
- Confirm KKday #129909 2027-11 airport transfer price, vehicle, luggage, route, waiting time, and availability before 2027/10/10.

## V5.25.0 - 2026-07-06

### Changed

- Overwrote the formal Day 3 itinerary from the previous Kyoto route to the Osaka city route.
- Added `database/day3_osaka_city_sushi_formal.yml`.
- Added `docs/01_行程規劃/2027-11-19_Day3_大阪市內木津市場日本橋壽司正式行程_V5.25.0.md`.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.25.0.md`.
- Added `docs/06_預算/2027大阪自由行_預算模型_V5.25.0.md`.
- Added `docs/13_版本與更新/V5.25.0_Day3_不去京都大阪市內壽司正式行程.md`.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, project database, hourly itinerary database, customer-facing tables, budget model, homepage files, and daily sync status.
- Added D033 Day 3 Osaka city sushi formal route.
- Updated D016, D017, D019, D020, D021, and D032 to reflect the Day 3 formal route replacement.

### Reason

The user explicitly instructed: “晚餐吃壽司，覆蓋正式行程，並更新所需更新章節。”

### Impact

- Day 3 is now: Kizu Market brunch, Namba / Nipponbashi anime models and merch, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, and Osaka city sushi dinner.
- Kyoto sweets route, 京 鰻和 本店, 天ぷら 京星, Pokemon Center KYOTO, Kyoto International Manga Museum, and TABLEALL Reservation Request for Kyoboshi are fallback / historical only.
- Day 3 no longer uses the Kyoto public-rail route as the primary plan.
- Recommended budget baseline is adjusted from TWD 327,664 to TWD 324,664 for two travelers.
- Safety ceiling remains TWD 380,000 for two travelers.

### Follow-up required

- Search and add Day 3 Osaka city sushi dinner candidates near Umeda / Kitashinchi / Fukushima / Nakanoshima / north Namba.
- Search and add Day 3 Namba / Dotonbori / Shinsaibashi lunch candidates.
- Confirm Nipponbashi / Den Den Town / Ota Road 2027-11-19 store hours, closure notices, events, limited goods, and crowd conditions.
- Confirm InterContinental Osaka Executive Lounge afternoon tea access and timing for 2027-11-19.
- Recalculate Day 3 dining budget after selecting the sushi restaurant.

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
