# Project Rule

This repository is the source of truth for the 2027 Osaka travel project.

Do not change these without an explicit user request:

- 2027-11-17 to 2027-11-21
- Five days and four nights
- InterContinental Osaka
- Luxury Slow Travel
- One USJ day
- Taste-first dining; Michelin status neutral
- Luxury shopping
- Day 1 formal stop: Pokémon Center OSAKA in Umeda
- Day 3 formal itinerary: Kizu Market + Kyoto sweets souvenirs + Pokemon / anime + 京 鰻和 本店 lunch + 天ぷら 京星 dinner
- Day 4 formal stop: Pokémon Center OSAKA DX and InterContinental Osaka Executive Lounge afternoon tea

Current user-confirmed planning inputs:

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: use the current timetable directly for hourly planning: BR178 06:30 TPE to 10:10 KIX; BR129 18:30 KIX to 20:30 TPE. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still require confirmation before ticketing.
- Travel insurance budget amount: TWD 6,900; payment status needs confirmation.
- Internet: phone roaming for two people. Amount is TWD 499.
- Airport transfer: use KKday transfer both ways between KIX and InterContinental Osaka.
- USJ transfer: use KKday transfer both ways between InterContinental Osaka and Universal Studios Japan.
- Dining: restaurants should be selected because they are good. Michelin status does not matter either way and should not be used as the main planning label.
- Customer-facing output: maintain a traveler/customer readable three-table format consisting of itinerary, pre-trip TODO list, and budget summary.
- Day 3 transport primary plan is public rail plus short taxi. KKday #133661 10-hour charter is backup only for rain, fatigue, heavy shopping, or door-to-door comfort.
- 天ぷら 京星 primary reservation method is TABLEALL Reservation Request unless a better official route is confirmed.

Before adding content, check existing docs, database files, and changelog.

When content already exists, update or merge it instead of creating a duplicate.

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

- root `index.md`
- `docs/index.md`
- `docs/14_自動同步狀態/每日同步狀態.md`

Use official sources first. When information is uncertain, mark it as NEEDS_RECONFIRMATION. When 2027 official information is not published yet, mark it as PENDING_OFFICIAL_ANNOUNCEMENT.

Every major update must update CHANGELOG and the version document.
