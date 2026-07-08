# Project Rule

This repository is the source of truth for the 2027 Osaka travel project.

Current sync version: V5.53.0 USJ VIP 8h Budget Update.

## Fixed assumptions

Do not change these without an explicit user request:

- 2027-11-17 to 2027-11-21
- Five days and four nights
- InterContinental Osaka
- Luxury Slow Travel
- One USJ day
- Taste-first dining; Michelin status neutral
- Luxury shopping
- Day 1 formal sequence: arrival at InterContinental Osaka, target Executive Lounge afternoon tea, rest at the hotel, Pokemon Center OSAKA in Umeda, dinner at 千房 梅田周邊店 / Chibo Umeda-area branch, then return to the hotel
- Day 2 USJ strategy: USJ Express Pass 7 is superseded by USJ VIP 8h; VIP 8h is treated as including lunch, dinner, and in-park dining; Studio Pass remains a pending 2027/10/10 purchase target until official rules confirm whether VIP includes admission
- Day 3 formal itinerary: no Kyoto; Kizu Market brunch, Namba / Nipponbashi anime models and merch, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, and 肉NOASATSU sushi dinner
- Day 4 formal route: Shinsaibashi-centered activity range until lunch, including Pokemon Center OSAKA DX; return to InterContinental Osaka after lunch; afternoon at / near the hotel; Executive Lounge afternoon tea; Anniversary Dinner at NOKA Roast & Grill inside InterContinental Osaka
- Day 4 restaurant priority: NOKA Roast & Grill is primary; PIERRE and sushi are fallback-only unless the user explicitly changes back
- Website presentation: `web/` may use visual storytelling and CSS illustration cards, but it must not create a parallel itinerary or alternate budget outside the repository data baseline

## Current user-confirmed planning inputs

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: use the current timetable directly for hourly planning: BR178 06:30 TPE to 10:10 KIX; BR129 18:30 KIX to 20:30 TPE. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still need confirmation before ticketing.
- Flight budget reference: TWD 36,000 for two travelers round trip; planned purchase time is 2026/11; final ticket price still needs confirmation.
- InterContinental Ambassador renewal: planned for 2026/12, USD 250, tracked separately from the TWD base budget until exchange rate or actual charge is confirmed.
- Reservation / purchase timeline: use `database/reservation_purchase_timeline.yml` as the active source.
- USJ VIP 8h purchase / reservation target: 2027/09/17; user-provided reference amount TWD 87,000; official availability, currency, final price, whether Studio Pass is included, meal scope, and cancellation policy pending.
- USJ Studio Pass purchase target: 2027/10/10; official 2027 price and inventory still need confirmation; must verify whether VIP 8h already includes admission.
- NOKA Roast & Grill reservation target: 2027/09/17; reservation notes should request an anniversary dinner, buffet package, 90-minute drinks, and optional anniversary dessert message or small celebration support if available. Seating is not guaranteed until confirmed by the restaurant.
- Day 1 arrival sequence: use afternoon tea at the hotel, rest a bit, go to Umeda Pokémon Center, eat dinner at 千房 梅田周邊店 / Chibo Umeda-area branch, and return to the hotel. Exact Chibo branch still needs confirmation.
- Day 3 sequence: Kizu Market brunch, move to Namba / Nipponbashi, anime / model / merch shopping in Nipponbashi, Namba / Dotonbori / Shinsaibashi lunch, return to InterContinental Osaka, Executive Lounge afternoon tea, and 肉NOASATSU sushi dinner.
- Day 3 dinner: 肉NOASATSU / KKday #268366 is the current formal sushi dinner source. Price reference is TWD 1,541 per person, TWD 3,082 for two people; reservation method, cancellation policy, final price, location, and transportation still need confirmation.
- Day 3 superseded route: Kyoto sweets route, 京 鰻和 本店 lunch, 天ぷら 京星 dinner, Pokemon Center KYOTO, Kyoto International Manga Museum, and TABLEALL Reservation Request for Kyoboshi are fallback / historical only.
- Day 4 sequence: Shinsaibashi / Daimaru Shinsaibashi / Pokémon Center OSAKA DX before and around lunch; after lunch return to InterContinental Osaka; afternoon at or near the hotel; dinner is NOKA Roast & Grill.
- Day 4 dinner request: reservation notes should request an anniversary dinner, buffet package, 90-minute drinks, and optional anniversary dessert message or small celebration support if available. Seating requests are not guaranteed until confirmed by the restaurant.
- Travel insurance budget amount: TWD 6,900; planned purchase date is 2027/11/05; payment status needs confirmation.
- Internet: phone roaming for two people. Amount is TWD 499; planned application date is 2027/11/05.
- Airport transfer: use KKday #129909 both ways between KIX and InterContinental Osaka. Reference price is TWD 2,600 each way, TWD 5,200 round trip. Planned purchase date is 2027/10/10.
- USJ transfer: use KKday #536220 both ways between InterContinental Osaka and Universal Studios Japan. Reference price is TWD 1,732 each way, TWD 3,464 round trip. Planned purchase date is 2027/10/10.
- Budget model: use V5.53.0 recommended total TWD 272,454 for two travelers, controlled total TWD 267,756, safety version TWD 280,000, and hard ceiling TWD 280,000. Luxury handbags, jewelry, watches, and Ambassador renewal USD 250 are separate. Estimate lodging net of the lower-price complimentary night rather than the temporary checkout charge peak.
- Shopping model: USJ shopping and ordinary Pokémon / anime / Nipponbashi / department-store small goods are merged into TWD 14,000; do not separately list USJ park dining and shopping.
- Website presentation: V5.53.0 refreshed `web/index.html` and `web/budget.js` to match the USJ VIP 8h budget while preserving V5.52.0 visual storytelling.
- Dining: restaurants should be selected because they are good. Michelin status does not matter either way and should not be used as the main planning label.
- Customer-facing output: maintain a traveler/customer readable three-table format consisting of itinerary, pre-trip TODO list, and budget summary.

## Maintenance workflow

Before adding content, check existing docs, database files, and changelog.

When content already exists, update or merge it instead of creating a duplicate.

Use official sources first. When information is uncertain, mark it as NEEDS_RECONFIRMATION. When 2027 official information is not published yet, mark it as PENDING_OFFICIAL_ANNOUNCEMENT.

Every major update must update CHANGELOG and the version document.

## Customer-facing table rule

The customer-facing planning document must remain simple and easy to read.

Required output order:

1. 旅遊行程總覽
2. 行程表
3. 行前提醒／TODO LIST
4. 預算表
5. 費用統計
6. 待確認事項
7. 補充說明

Required tables:

- 行程表: 日期, 行程重點, 主要地點, 交通安排, 餐食安排, 備註
- 行前提醒／TODO LIST: 項目, 建議完成時間, 狀態, 提醒說明
- 預算表: 分類, 內容說明, 預估費用, 已付款, 備註

Budget categories are fixed as:

- 交通
- 住宿
- 購物
- 飲食
- USJ
- 其他

If information is not confirmed, mark it as 待確認, 待官方公布, 暫估, or 參考價格. Do not present uncertain prices as final.

If daily maintenance changes anything, regenerate GitHub Pages outputs before commit and push:

- `web/index.html`
- root `index.md`
- `docs/index.md`
- `docs/14_自動同步狀態/每日同步狀態.md`

The public travel site should live under `web/`; root and `docs/` homepages are only lightweight entry points.
