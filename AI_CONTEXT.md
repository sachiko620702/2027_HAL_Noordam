# AI_CONTEXT

Project: 2027 Osaka Trip  
Version: V5.26.2  
Repository: sachiko620702/2027_OSAKA  
Source of truth: GitHub main branch

## Fixed Travel Plan

- Dates: 2027-11-17 to 2027-11-21
- Duration: 5 days / 4 nights
- Hotel: InterContinental Osaka
- Style: Luxury Slow Travel
- USJ: one day
- Dining: taste-first dining; Michelin status is neutral and should not be used as the primary label
- Shopping: luxury shopping
- Day 1 formal sequence: arrival at InterContinental Osaka, target Executive Lounge afternoon tea, rest at the hotel, Pokémon Center OSAKA in Umeda, dinner at 千房 梅田周邊店 / Chibo Umeda-area branch, then return to the hotel.
- Day 1 formal dinner: 千房 梅田周邊店 is selected; exact branch, hours, reservation rules, rating, price, and walking route from Pokémon Center OSAKA still require confirmation.
- Day 3 formal itinerary: no Kyoto. Kizu Market brunch, Namba / Nipponbashi anime models and merch, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, and Osaka city sushi dinner.
- Day 3 superseded items: Kyoto sweets route, 京 鰻和 本店 lunch, 天ぷら 京星 dinner, Pokemon Center KYOTO, Kyoto International Manga Museum, and TABLEALL Reservation Request for Kyoboshi are fallback / historical only unless the user restores Kyoto.
- Day 4 formal route: Shinsaibashi-centered morning / lunch area including Pokémon Center OSAKA DX; return to InterContinental Osaka after lunch; hotel / nearby activities in the afternoon; Executive Lounge afternoon tea; Anniversary Dinner at NOKA Roast & Grill inside InterContinental Osaka.
- Day 4 dinner request: reserve NOKA Roast & Grill as an anniversary dinner and request the buffet package with 90-minute drinks. Seating cannot be treated as guaranteed until confirmed by the restaurant.
- Day 4 sushi note: V5.22.0 recorded sushi as a preferred Day 4 dinner cuisine, but V5.23.0 supersedes it. Keep Day 4 sushi only as fallback if the user changes back.
- Flight timing baseline: use the current BR178 / BR129 timetable for hourly planning: BR178 TPE 06:30 to KIX 10:10; BR129 KIX 18:30 to TPE 20:30. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still require reconfirmation.
- Budget baseline V5.26.2: recommended total TWD 244,646 for two travelers; safety ceiling TWD 380,000 for two travelers; InterContinental Ambassador renewal USD 250, luxury handbags, jewelry, and watches are excluded from the TWD base budget and should be tracked separately. Lodging should use the net amount after the lower-price complimentary night is treated as free.

## Current Priorities

1. Maintain the V5.26.2 reservation / purchase timeline in `database/reservation_purchase_timeline.yml`.
2. Track 2026/11 EVA Air BR178 / BR129 purchase target and TWD 36,000 budget.
3. Track 2026/12 InterContinental Ambassador renewal target and USD 250 standalone budget.
4. Track 2027/09/17 USJ Express Pass 7 purchase attempt and official release status.
5. Track 2027/09/17 NOKA Roast & Grill reservation window.
6. Track 2027/10/10 KKday #129909 airport transfer purchase and USJ Studio Pass purchase target.
7. Track 2027/11/05 insurance purchase and roaming activation.
8. Daily price and open-status monitoring across watchlist sources.
9. USJ strategy and official 2027 updates.
10. Day 3 Osaka city sushi dinner candidate search.
11. Day 3 Namba / Dotonbori / Shinsaibashi lunch candidate search.
12. Day 3 Nipponbashi / Den Den Town / Ota Road store-hour and event confirmation.
13. Taste-first Osaka restaurant candidate planning.
14. Flight and airport planning.
15. InterContinental Osaka stay planning.
16. Luxury shopping plan.
17. Budget tracking and recalculation against `database/budget_model.yml`.
18. KKday airport transfer product 129909 details and price confirmation.
19. KKday hotel-USJ transfer product 536220 details and purchase date confirmation.
20. Customer-facing travel planning tables: itinerary, pre-trip TODO list, and budget summary.
21. Keep the current hourly itinerary aligned with current flight baseline and later official 2027 airline updates.
22. Confirm Day 1 InterContinental Osaka Executive Lounge afternoon tea access and the exact Chibo branch for Day 1 dinner.
23. Confirm Day 4 Shinsaibashi lunch candidate and the post-lunch return-to-hotel route.
24. Confirm NOKA Roast & Grill 2027/11/20 dinner booking window, menu, price, service charge, dress code, cancellation policy, and package rules.
25. Prepare NOKA Roast & Grill reservation note for anniversary dinner, buffet package, 90-minute drinks, anniversary dessert message, and photo support if available.

## User-Provided Confirmed Planning Inputs

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: per user instruction, use the current schedule directly for planning: BR178 06:30 TPE to 10:10 KIX; BR129 KIX 18:30 to TPE 20:30. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status need reconfirmation.
- Flight budget reference: TWD 36,000 for two travelers round trip, user-provided in V5.26.0; planned purchase time is 2026/11; reconfirm before ticketing.
- InterContinental Ambassador renewal: planned for 2026/12 at USD 250; track separately from the TWD base budget until exchange rate or actual charge is confirmed.
- USJ Express Pass 7 purchase target: 2027/09/17; official 2027 release date, price, inventory, and rules still need confirmation.
- NOKA Roast & Grill reservation target: 2027/09/17; note anniversary dinner, buffet package, and 90-minute drinks.
- Airport transfer: use KKday product 129909 both ways between KIX and InterContinental Osaka. User-provided V5.24.0 reference is TWD 2,600 each way, TWD 5,200 round trip. V5.26.0 planned purchase date is 2027/10/10.
- USJ Studio Pass purchase target: 2027/10/10; official 2027 price and inventory still need confirmation.
- USJ transfer: use KKday product 536220 both ways between InterContinental Osaka and Universal Studios Japan. User-provided screenshot V5.24.0 reference is TWD 1,732 each way, TWD 3,464 round trip. V5.26.2 timeline does not assign a purchase date yet.
- Recommended budget baseline: TWD 244,646 for two travelers; safety ceiling TWD 380,000; luxury shopping is separate; Ambassador renewal USD 250 is tracked separately.
- Day 1 sequence: after arrival at the hotel, the user wants to use afternoon tea, rest a bit, then go to Umeda Pokémon Center, eat dinner near the Pokémon Center, and return to the hotel.
- Day 1 dinner: user selected 千房 梅田周邊店 / Chibo Umeda-area branch as the formal dinner direction; exact branch still requires confirmation.
- Day 3 formal route: no Kyoto; Kizu Market brunch, move to Namba / Nipponbashi, Nipponbashi anime / model / merch shopping, Namba / Dotonbori / Shinsaibashi lunch, return to InterContinental Osaka, Executive Lounge afternoon tea, and Osaka city sushi dinner.
- Day 3 dinner: sushi in Osaka city. Restaurant candidate, price, reservation route, cancellation policy, and transportation need confirmation.
- Day 3 previous Kyoto route: superseded and fallback-only.
- Travel insurance budget amount: TWD 6,900; planned purchase date is 2027/11/05; payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499; planned application date is 2027/11/05; eSIM / SIM / Pocket Wi-Fi are backup only.
- Dining: choose restaurants because they are good; Michelin status does not matter either way.
- Customer-facing output: always maintain the three simple tables requested by the user: 行程表, 行前提醒／TODO LIST, 預算表.
- Day 4 formal route: 2027-11-20 activity range should be Shinsaibashi-centered; after lunch return to InterContinental Osaka; afternoon should stay at / near the hotel; Executive Lounge afternoon tea remains included.
- Day 4 dinner: Anniversary Dinner at NOKA Roast & Grill. Reservation note should request the buffet package and 90-minute drinks; this is a request only until confirmed by the restaurant.

## Reservation / Purchase Timeline

The active reservation and purchase timeline is `database/reservation_purchase_timeline.yml` and the readable document is `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`.

Current timeline:

- 2026/11: buy EVA Air BR178 / BR129, TWD 36,000.
- 2026/12: renew InterContinental Ambassador, USD 250.
- 2027/09/17: buy / attempt USJ Express Pass 7, pending official release.
- 2027/09/17: reserve NOKA Roast & Grill.
- 2027/10/10: buy KKday #129909 airport transfer.
- 2027/10/10: buy USJ Studio Pass, pending official release.
- 2027/11/05: buy travel insurance, TWD 6,900.
- 2027/11/05: apply for phone roaming, TWD 499.

## Day 3 Formal Plan

2027-11-19 is now formally an Osaka city slow-travel day. The formal theme is Kizu Market, Namba / Nipponbashi anime models and merch, hotel rest, Executive Lounge afternoon tea, and Osaka city sushi dinner. Do not plan Kyoto as the main Day 3 route unless the user explicitly restores it.

## Day 4 Formal Plan

2027-11-20 is formally Shinsaibashi-centered until lunch: Pokémon Center OSAKA DX / Daimaru Shinsaibashi and nearby shopping. After lunch, the route returns to InterContinental Osaka. Afternoon activities should stay at the hotel or nearby Grand Front Osaka / Umeda area, with Executive Lounge afternoon tea retained. Dinner is Anniversary Dinner at NOKA Roast & Grill inside InterContinental Osaka. The reservation should note the anniversary, request the buffet package and 90-minute drinks, and ask about an anniversary dessert message or small celebration option if available. The package request is not guaranteed until confirmed by the restaurant.

## Budget Model

The active budget model is `database/budget_model.yml` and the customer-readable document is `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`. The current recommended TWD budget is TWD 244,646 for two travelers, with a safety ceiling of TWD 380,000. Luxury handbags, jewelry, watches, USJ VIP Tour / Private VIP Tour, guaranteed early check-in, paid upgrades, and Ambassador renewal USD 250 are excluded unless explicitly added later. Use the lodging net amount after the lower-price complimentary night is treated as free.

## Customer-Facing Output Rules

- Use Traditional Chinese.
- Audience is travelers/customers, not internal project maintainers.
- Keep tables simple and use the fixed columns recorded in `database/customer_facing_travel_plan.yml`.
- Mark uncertain items as 待確認, 待官方公布, or 參考價格.
- Update existing customer-facing content instead of creating parallel versions.

## Maintenance Rule

Database first, docs second, changelog last.
