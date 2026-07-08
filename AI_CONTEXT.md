# AI_CONTEXT

Project: 2027 Osaka Trip  
Version: V5.52.0  
Repository: sachiko620702/2027_OSAKA  
Source of truth: GitHub main branch

## Fixed Travel Plan

- Dates: 2027-11-17 to 2027-11-21
- Duration: 5 days / 4 nights
- Hotel: InterContinental Osaka
- Style: Luxury Slow Travel
- USJ: one day
- Dining: taste-first dining; Michelin status is neutral and must not be used as the primary planning label
- Shopping: luxury shopping is in scope, but luxury handbags, jewelry, and watches are budgeted separately from the base travel budget
- Day 1 formal sequence: arrival at InterContinental Osaka, target Executive Lounge afternoon tea, rest at the hotel, Pokémon Center OSAKA in Umeda, dinner at 千房 梅田周邊店 / Chibo Umeda-area branch, then return to the hotel
- Day 1 formal dinner: 千房 梅田周邊店 is selected; exact branch, hours, reservation rules, rating, price, and walking route from Pokémon Center OSAKA still require confirmation
- Day 2 formal sequence: USJ one day, using KKday #536220 for InterContinental Osaka ↔ USJ transfer if 2027 product conditions remain suitable
- Day 3 formal itinerary: no Kyoto. Kizu Market brunch, Namba / Nipponbashi anime models and merch, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, and 肉NOASATSU sushi dinner via KKday #268366 unless later changed
- Day 3 superseded items: Kyoto sweets route, 京 鰻和 本店 lunch, 天ぷら 京星 dinner, Pokemon Center KYOTO, Kyoto International Manga Museum, and TABLEALL Reservation Request for Kyoboshi are fallback / historical only unless the user restores Kyoto
- Day 4 formal route: Shinsaibashi-centered morning / lunch area including Pokémon Center OSAKA DX; return to InterContinental Osaka after lunch; hotel / nearby activities in the afternoon; Executive Lounge afternoon tea; Anniversary Dinner at NOKA Roast & Grill inside InterContinental Osaka
- Day 4 dinner decision: NOKA Roast & Grill is the active formal dinner. PIERRE and sushi are fallback-only unless the user explicitly changes back
- Flight timing baseline: use the current BR178 / BR129 timetable for hourly planning: BR178 TPE 06:30 to KIX 10:10; BR129 KIX 18:30 to TPE 20:30. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still require reconfirmation
- Budget baseline V5.51.0: recommended total TWD 199,346 for two travelers; controlled total TWD 194,648; safety version TWD 250,000; hard ceiling TWD 280,000. InterContinental Ambassador renewal USD 250, luxury handbags, jewelry, and watches are excluded from the TWD base budget and tracked separately. Lodging uses the net amount TWD 65,900 after the lower-price complimentary night is treated as free
- Website presentation V5.52.0: `web/index.html` and `web/styles.css` were refreshed into a travel-agency-style visual storytelling page. This is a presentation change only and does not alter itinerary, budget, or database decisions

## Current Priorities

1. Maintain the active reservation / purchase timeline in `database/reservation_purchase_timeline.yml`.
2. Track 2026/11 EVA Air BR178 / BR129 purchase target and TWD 36,000 budget.
3. Track 2026/12 InterContinental Ambassador renewal target and USD 250 standalone budget.
4. Track 2027/09/17 USJ Express Pass 7 purchase attempt and official release status.
5. Track 2027/09/17 NOKA Roast & Grill reservation window.
6. Track 2027/10/10 KKday #129909 airport transfer purchase, KKday #536220 hotel-USJ transfer purchase, and USJ Studio Pass purchase target.
7. Track 2027/11/05 insurance purchase and roaming activation.
8. Daily price and open-status monitoring across watchlist sources.
9. USJ strategy and official 2027 updates.
10. Confirm 肉NOASATSU / KKday #268366 final reservation terms, cancellation policy, exact location, and transportation.
11. Confirm Day 3 Namba / Dotonbori / Shinsaibashi lunch candidate.
12. Confirm Day 3 Nipponbashi / Den Den Town / Ota Road store hours, events, and shopping fit.
13. Confirm Day 4 Shinsaibashi lunch candidate and post-lunch return-to-hotel route.
14. Confirm NOKA Roast & Grill 2027/11/20 dinner booking window, menu, price, service charge, dress code, cancellation policy, package rules, and anniversary request handling.
15. Keep customer-facing travel planning tables aligned with `database/customer_facing_travel_plan.yml`.
16. Recalculate budget only from `database/budget_model.yml` and avoid reviving older totals.
17. Keep the public website under `web/` aligned with V5.52.0 visual storytelling while preserving the V5.51.0 data baseline.

## User-Provided Confirmed Planning Inputs

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: per user instruction, use the current schedule directly for planning: BR178 06:30 TPE to 10:10 KIX; BR129 KIX 18:30 to 20:30 TPE. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status need reconfirmation.
- Flight budget reference: TWD 36,000 for two travelers round trip; planned purchase time is 2026/11; reconfirm before ticketing.
- InterContinental Ambassador renewal: planned for 2026/12 at USD 250; track separately from the TWD base budget until exchange rate or actual charge is confirmed.
- Lodging: InterContinental Osaka planned room type is 1 King Premium Club Lounge Access. Hotel reply says this usually upgrades to 1 King Junior Suite with club lounge access, subject to availability. Current lodging net total is TWD 65,900.
- USJ Express Pass 7 purchase target: 2027/09/17; official 2027 release date, price, inventory, and rules still need confirmation.
- NOKA Roast & Grill reservation target: 2027/09/17; note anniversary dinner, buffet package, and 90-minute drinks request. Seating is not guaranteed until confirmed by the restaurant.
- Airport transfer: use KKday product 129909 both ways between KIX and InterContinental Osaka. Reference is TWD 2,600 each way, TWD 5,200 round trip. Planned purchase date is 2027/10/10.
- USJ transfer: use KKday product 536220 both ways between InterContinental Osaka and Universal Studios Japan. Reference is TWD 1,732 each way, TWD 3,464 round trip. Planned purchase date is 2027/10/10.
- USJ Studio Pass purchase target: 2027/10/10; official 2027 price and inventory still need confirmation.
- Recommended budget baseline: TWD 199,346 for two travelers; safety version TWD 250,000; hard ceiling TWD 280,000; luxury shopping and Ambassador renewal USD 250 are separate.
- Travel insurance budget amount: TWD 6,900; planned purchase date is 2027/11/05; payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499; planned application date is 2027/11/05; eSIM / SIM / Pocket Wi-Fi are backup only.
- Dining: choose restaurants because they are good; Michelin status does not matter either way.
- Customer-facing output: always maintain the three simple tables requested by the user: 行程表, 行前提醒／TODO LIST, 預算表.

## Reservation / Purchase Timeline

The active reservation and purchase timeline is `database/reservation_purchase_timeline.yml` and the readable document is `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`.

Current timeline:

- 2026/11: buy EVA Air BR178 / BR129, TWD 36,000.
- 2026/12: renew InterContinental Ambassador, USD 250.
- 2027/09/17: buy / attempt USJ Express Pass 7, pending official release.
- 2027/09/17: reserve NOKA Roast & Grill.
- 2027/10/10: buy KKday #129909 airport transfer.
- 2027/10/10: buy KKday #536220 hotel-USJ transfer.
- 2027/10/10: buy USJ Studio Pass, pending official release.
- 2027/11/05: buy travel insurance, TWD 6,900.
- 2027/11/05: apply for phone roaming, TWD 499.

## Day 3 Formal Plan
