# AI_CONTEXT

Project: 2027 Osaka Trip  
Version: V5.24.0  
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
- Day 3 formal itinerary: Kizu Market + Kyoto sweets souvenirs + Pokemon / anime + 京 鰻和 本店 lunch + 天ぷら 京星 dinner
- Day 4 formal route: Shinsaibashi-centered morning / lunch area including Pokémon Center OSAKA DX; return to InterContinental Osaka after lunch; hotel / nearby activities in the afternoon; Executive Lounge afternoon tea; Anniversary Dinner at PIERRE inside InterContinental Osaka.
- Day 4 dinner request: reserve PIERRE as an anniversary dinner and request a window table / Osaka night-view table. Seating cannot be treated as guaranteed until confirmed by the restaurant.
- Day 4 sushi note: V5.22.0 recorded sushi as a preferred dinner cuisine, but V5.23.0 supersedes it. Keep sushi only as fallback if the user changes back.
- Flight timing baseline: use the current BR178 / BR129 timetable for hourly planning: BR178 TPE 06:30 to KIX 10:10; BR129 KIX 18:30 to TPE 20:30. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still require reconfirmation.
- Budget baseline V5.24.0: recommended total TWD 327,664 for two travelers; safety ceiling TWD 380,000 for two travelers; luxury handbags, jewelry, and watches are excluded and should be budgeted separately.

## Current Priorities

1. Daily price and open-status monitoring across watchlist sources
2. USJ strategy and official 2027 updates
3. Taste-first Osaka restaurant candidate planning
4. Flight and airport planning
5. InterContinental Osaka stay planning
6. Luxury shopping plan
7. Osaka Amazing Pass candidate plan
8. YouTube source database cleanup
9. Budget tracking and recalculation against `database/budget_model.yml`
10. KKday airport transfer product 129909 details and price confirmation
11. KKday hotel-USJ transfer product 536220 details and price confirmation
12. KKday Day 3 charter product 133661 as backup only
13. Mobile roaming setup and payment confirmation
14. Customer-facing travel planning tables: itinerary, pre-trip TODO list, and budget summary
15. Day 3 official 2027 opening-hour confirmation for Kizu Market, Kyoto sweets shops, Pokemon Center KYOTO, Kyoto International Manga Museum, 京 鰻和 本店, and 天ぷら 京星
16. Tableall availability and reservation rules for 天ぷら 京星
17. Keep the current hourly itinerary aligned with current flight baseline and later official 2027 airline updates
18. Confirm Day 1 InterContinental Osaka Executive Lounge afternoon tea access and the exact Chibo branch for Day 1 dinner
19. Confirm Day 4 Shinsaibashi lunch candidate and the post-lunch return-to-hotel route
20. Confirm PIERRE 2027/11/20 dinner booking window, menu, price, service charge, dress code, cancellation policy, and seat request rules
21. Prepare PIERRE reservation note for anniversary dinner, window seat / Osaka night view request, anniversary dessert message, and photo support if available
22. Keep sushi as fallback only if the user changes back from PIERRE

## User-Provided Confirmed Planning Inputs

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: per user instruction, use the current schedule directly for planning: BR178 06:30 TPE to 10:10 KIX; BR129 KIX 18:30 to TPE 20:30. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status need reconfirmation.
- Flight budget reference: TWD 35,000 for two travelers round trip, user-provided; reconfirm before ticketing.
- Airport transfer: use KKday product 129909 both ways between KIX and InterContinental Osaka. User-provided V5.24.0 reference is TWD 2,600 each way, TWD 5,200 round trip.
- USJ transfer: use KKday product 536220 both ways between InterContinental Osaka and Universal Studios Japan. User-provided screenshot V5.24.0 reference is TWD 1,732 each way, TWD 3,464 round trip.
- Recommended budget baseline: TWD 327,664 for two travelers; safety ceiling TWD 380,000; luxury shopping is separate.
- Day 1 sequence: after arrival at the hotel, the user wants to use afternoon tea, rest a bit, then go to Umeda Pokémon Center, eat dinner near the Pokémon Center, and return to the hotel.
- Day 1 dinner: user selected 千房 梅田周邊店 / Chibo Umeda-area branch as the formal dinner direction; exact branch still requires confirmation.
- Travel insurance budget amount: TWD 6,900; payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499; eSIM / SIM / Pocket Wi-Fi are backup only.
- Dining: choose restaurants because they are good; Michelin status does not matter either way.
- Customer-facing output: always maintain the three simple tables requested by the user: 行程表, 行前提醒／TODO LIST, 預算表.
- Day 3 formal itinerary: 木津市場＋京都甜點伴手禮＋寶可夢／動漫＋京 鰻和 本店午餐＋天ぷら 京星晚餐.
- Day 3 dinner reservation method: TABLEALL Reservation Request for 天ぷら 京星; current reference JPY 25,500 including TABLEALL booking fee JPY 8,000; 2027-11-19 availability and cancellation rules need reconfirmation.
- Day 4 formal route: 2027-11-20 activity range should be Shinsaibashi-centered; after lunch return to InterContinental Osaka; afternoon should stay at / near the hotel; Executive Lounge afternoon tea remains included.
- Day 4 dinner: Anniversary Dinner at PIERRE. Reservation note should request a window seat / Osaka night-view table; this is a request only until confirmed by the restaurant.
- Day 3 transport: public rail plus short taxi is the primary plan; KKday #133661 10-hour charter is backup only for rain, fatigue, heavy shopping, or door-to-door comfort.

## Day 3 Formal Plan

2027-11-19 is no longer a candidate. The formal theme is Kizu Market, Kyoto lunch, Kyoto sweets souvenirs, Pokemon Center KYOTO, Kyoto International Manga Museum / anime interests, and Gion / Higashiyama photo walk, ending with 天ぷら 京星 dinner. Keep the route relaxed and do not overload with temple collection. Reconfirm 2027 official opening hours, closures, reservation windows, events, product availability, prices, fees, and cancellation rules before departure.

## Day 4 Formal Plan

2027-11-20 is formally Shinsaibashi-centered until lunch: Pokémon Center OSAKA DX / Daimaru Shinsaibashi and nearby shopping. After lunch, the route returns to InterContinental Osaka. Afternoon activities should stay at the hotel or nearby Grand Front Osaka / Umeda area, with Executive Lounge afternoon tea retained. Dinner is now Anniversary Dinner at PIERRE inside InterContinental Osaka. The reservation should note the anniversary, request a window table / Osaka night-view table, and ask about an anniversary dessert message or small celebration option if available. The window / night-view table request is not guaranteed until confirmed by the restaurant. Sushi is fallback-only unless the user changes back.

## Budget Model

The active budget model is `database/budget_model.yml` and the customer-readable document is `docs/06_預算/2027大阪自由行_預算模型_V5.24.0.md`. The current recommended budget is TWD 327,664 for two travelers, with a safety ceiling of TWD 380,000. Luxury handbags, jewelry, watches, USJ VIP Tour / Private VIP Tour, guaranteed early check-in, and paid upgrades are excluded unless explicitly added later.

## Customer-Facing Output Rules

- Use Traditional Chinese.
- Audience is travelers/customers, not internal project maintainers.
- Keep tables simple and use the fixed columns recorded in `database/customer_facing_travel_plan.yml`.
- Mark uncertain items as 待確認, 待官方公布, or 參考價格.
- Update existing customer-facing content instead of creating parallel versions.

## Maintenance Rule

Database first, docs second, changelog last.
