# DECISIONS

This file records fixed project decisions and candidate decisions.

## D001 Travel dates

Decision: 2027-11-17 to 2027-11-21.  
Status: fixed.

## D002 Duration

Decision: 5 days and 4 nights.  
Status: fixed.

## D003 Hotel

Decision: InterContinental Osaka.  
Status: fixed.

## D004 Travel style

Decision: Luxury Slow Travel.  
Status: fixed.

## D005 USJ

Decision: USJ is planned for one day.  
Status: fixed.

## D006 Dining

Decision: Dining should be taste-first. Michelin status is neutral.  
Status: fixed.  
Changed: 2026-07-06.

## D007 Shopping

Decision: luxury shopping is part of the formal project scope.  
Status: fixed.

## D010 Internet

Decision: use phone roaming for two people. Amount is TWD 499.  
Status: fixed; planned application date is 2027-11-05 through D034.  
Changed: 2026-07-07.

## D011 Airport transfer

Decision: use KKday transfer for KIX hotel round trip.  
Status: selected, V5.24.0 reference price recorded; planned purchase date is 2027-10-10 through D034.  
Changed: 2026-07-07.  
Reference price: TWD 2,600 each way, TWD 5,200 round trip, user-provided; 2027 price and booking conditions still need reconfirmation.

## D012 Travel insurance

Decision: travel insurance amount is TWD 6,900.  
Status: amount recorded; planned purchase date is 2027-11-05 through D034; payment status needs confirmation.  
Changed: 2026-07-07.

## D013 Flights

Decision: outbound flight is EVA Air BR178 and return flight is EVA Air BR129.  
Status: selected; current timetable is now used as hourly planning baseline; official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still need confirmation before ticketing.  
Changed: 2026-07-07.  
Reference price: TWD 36,000 for two travelers round trip, user-provided in V5.26.0; planned purchase time is 2026/11; final ticket price still needs reconfirmation.  
Supersedes: V5.24.0 / V5.25.0 flight reference TWD 35,000.

## D014 Hotel to USJ transfer

Decision: use KKday transfer for hotel USJ round trip.  
Status: selected, V5.24.0 reference price recorded; V5.26.0 timeline has not assigned a purchase date yet.  
Changed: 2026-07-07.  
Reference price: TWD 1,732 each way, TWD 3,464 round trip, based on user-provided screenshot showing NT$1,732 起; 2027 price and product rules still need reconfirmation.

## D015 Customer-facing travel plan tables

Decision: maintain a customer-facing travel planning document with three fixed tables.  
Status: fixed.  
Changed: 2026-07-06.

## D016 Day 3 confirmed interest-based route

Decision: 2027-11-19 Day 3 is formally confirmed as Osaka city route: Kizu Market brunch + Namba / Nipponbashi anime models and merch + hotel rest and Executive Lounge afternoon tea + Osaka city sushi dinner.  
Status: fixed; supersedes the previous Kyoto route.  
Changed: 2026-07-06.  
Reason: The user explicitly instructed: “晚餐吃壽司 覆蓋正式行程 並更新所需更新章節.”  
Impact: Do not treat Kyoto sweets, 京 鰻和 本店, 天ぷら 京星, Pokemon Center KYOTO, or Kyoto International Manga Museum as formal Day 3 stops unless the user later restores Kyoto.

## D017 Day 3 transport priority

Decision: Day 3 primary transport is Osaka city metro, walking, and short taxi. KKday #133661 10-hour charter is no longer part of the formal Day 3 route and remains backup only if the user restores Kyoto or explicitly requests comfort travel.  
Status: fixed for V5.25.0.  
Changed: 2026-07-06.

## D018 Day 1 Pokemon Center Osaka

Decision: 2027-11-17 Day 1 includes Pokémon Center OSAKA in Umeda after afternoon tea and hotel rest if arrival-day energy allows.  
Status: fixed, timing now planned around BR178 current timetable baseline 06:30-10:10; final timing still pending official 2027 flight schedule, hotel lounge policy, and store hours.  
Changed: 2026-07-06.

## D019 Day 3 formal lunch

Decision: 2027-11-19 Day 3 lunch should be in Namba / Dotonbori / Shinsaibashi area, exact restaurant pending.  
Status: active, candidate needed; previous 京 鰻和 本店 lunch is superseded and fallback-only.  
Changed: 2026-07-06.

## D020 Day 3 formal dinner

Decision: 2027-11-19 Day 3 dinner should be sushi in Osaka city.  
Status: formal dinner direction; exact restaurant, price, booking method, cancellation policy, and transportation pending.  
Changed: 2026-07-06.

## D021 Tempura Kyoboshi reservation route

Decision: TABLEALL Reservation Request for 天ぷら 京星 was previously selected as the Day 3 dinner route.  
Status: superseded by D033; fallback-only unless the user restores Kyoto.  
Changed: 2026-07-06.

## D022 Day 4 Pokemon Center Osaka DX

Decision: 2027-11-20 Day 4 includes Pokémon Center OSAKA DX and the Day 4 activity area is Shinsaibashi-centered before and around lunch.  
Status: fixed, store hours and event rules pending.  
Changed: 2026-07-06.

## D023 Day 4 Executive Lounge afternoon tea

Decision: 2027-11-20 Day 4 includes InterContinental Osaka Executive Lounge afternoon tea after returning from Shinsaibashi.  
Status: fixed, lounge access and 2027 afternoon tea hours pending.  
Changed: 2026-07-06.

## D024 Flight timetable baseline

Decision: For hourly itinerary planning, use the current EVA Air timetable directly: BR178 TPE 06:30 to KIX 10:10; BR129 KIX 18:30 to TPE 20:30.  
Status: planning baseline; not a ticketed or official 2027-11 confirmation.  
Changed: 2026-07-06.  
Reason: The user explicitly instructed that the flight schedule should directly use the current timetable.  
Impact: Day 1 now assumes KIX arrival at 10:10 and hotel arrival around early afternoon; Day 5 now assumes KIX departure at 18:30 and allows a relaxed morning / early afternoon before airport transfer.

## D025 Day 1 afternoon tea and Umeda sequence

Decision: Day 1 sequence is hotel arrival, InterContinental Osaka Executive Lounge afternoon tea target, rest at the hotel, Pokémon Center OSAKA in Umeda, dinner near Pokémon Center OSAKA, then return to InterContinental Osaka.  
Status: fixed preference, implementation pending 2027 hotel lounge policy, arrival timing, store hours, and final branch confirmation for dinner.  
Changed: 2026-07-06.  
Reason: The user specified that after afternoon tea they want to rest, then go to Umeda Pokémon Center, eat dinner nearby, and return to the hotel.  
Impact: Day 1 dinner should stay near Pokémon Center OSAKA / Umeda. The afternoon schedule should not move directly from afternoon tea to shopping without a rest block.

## D026 Day 4 Shinsaibashi-centered route

Decision: 2027-11-20 Day 4 activity range should be Shinsaibashi-centered before and around lunch, with Pokémon Center OSAKA DX / Daimaru Shinsaibashi as the anchor.  
Status: fixed preference, implementation pending 2027 store hours, event rules, lunch candidate selection, and traffic conditions.  
Changed: 2026-07-06.  
Reason: The user specified that the Day 4 activity range should mainly be Shinsaibashi.  
Impact: Do not plan Day 4 as a mixed Shinsaibashi + Umeda + Namba long shopping day. Keep the morning / lunch area concentrated around Shinsaibashi.

## D027 Day 4 post-lunch return to hotel

Decision: After Day 4 lunch, return to InterContinental Osaka and keep afternoon activity at or near the hotel.  
Status: fixed preference, implementation pending final lunch location and transport choice.  
Changed: 2026-07-06.  
Reason: The user specified that after lunch they want to return to the hotel and do activities near the hotel.  
Impact: Day 4 afternoon should not include distant attractions. Keep Executive Lounge afternoon tea, hotel rest, Grand Front Osaka / Umeda nearby walk, and low-effort shopping only.

## D028 Day 4 hotel in-house dinner

Decision: Day 4 dinner is planned inside InterContinental Osaka, with PIERRE now selected as the primary formal direction for Anniversary Dinner.  
Status: active through D031 and D034.  
Changed: 2026-07-07.  
Reason: The user explicitly changed Day 4 dinner back to PIERRE for an anniversary dinner with a window / Osaka night view request; V5.26.0 adds planned reservation date 2027-09-17.  
Impact: The Day 4 evening should remain in-hotel and low-effort after Shinsaibashi, with PIERRE as the primary dinner direction.

## D029 Day 4 sushi dinner preference

Decision: Day 4 dinner cuisine preference was previously recorded as sushi.  
Status: superseded by D031 Anniversary Dinner at PIERRE.  
Changed: 2026-07-06.  
Reason: The user later stated: “Anniversary Dinner Pierre的靠窗座位，盡享大阪夜景美景。”  
Impact: Sushi is no longer the primary Day 4 dinner direction. Keep sushi only as a fallback if the user changes back.

## D030 Day 1 formal dinner direction

Decision: Day 1 dinner after Pokémon Center OSAKA should be 千房 梅田周邊店 / Chibo Umeda-area branch.  
Status: formal dinner direction; exact branch pending confirmation.  
Changed: 2026-07-06.  
Reason: The user explicitly selected 千房 梅田周邊店 from the Day 1 Umeda dinner candidates.  
Impact: Day 1 dinner is no longer only a candidate list. Keep dinner in the Chibo / Umeda branch direction, but do not record a specific branch as final until Google Maps / official source / Tabelog confirms the best actual branch, hours, reservation rules, price, and walking route from Pokémon Center OSAKA.

## D031 Day 4 Anniversary Dinner at PIERRE

Decision: 2027-11-20 Day 4 dinner should be Anniversary Dinner at PIERRE, with a window seat / Osaka night view request.  
Status: formal dinner direction; planned reservation date 2027-09-17 through D034; menu, price, cancellation policy, and seat assignment pending confirmation.  
Changed: 2026-07-07.  
Reason: The user explicitly stated: “Anniversary Dinner Pierre的靠窗座位，盡享大阪夜景美景。” V5.26.0 later set 2027-09-17 as the planned reservation date.  
Impact: Day 4 dinner should be planned around PIERRE at InterContinental Osaka. Reservation notes must request an anniversary dinner, a window / Osaka night-view seat, and optionally an anniversary dessert message or photo support. The window seat is a request, not a guarantee, until confirmed by the restaurant.

## D032 Budget model V5.26.0

Decision: Use V5.26.0 budget model as the current planning baseline: recommended total TWD 325,664 for two travelers, safety ceiling TWD 380,000 for two travelers, with Ambassador renewal USD 250, luxury handbags, jewelry, and watches budgeted separately.  
Status: active budget baseline; 2027 prices still pending reconfirmation.  
Changed: 2026-07-07.  
Reason: V5.26.0 adds the reservation / purchase timeline and updates EVA Air BR178 / BR129 two-person flight reference from TWD 35,000 to TWD 36,000.  
Impact: Transportation budget increases by TWD 1,000; recommended total increases from TWD 324,664 to TWD 325,664. Ambassador renewal USD 250 is tracked separately until exchange rate or actual card charge is confirmed.

## D033 Day 3 Osaka city sushi formal route

Decision: 2027-11-19 Day 3 should be Kizu Market brunch, Namba / Nipponbashi anime models and merch shopping, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, then Osaka city sushi dinner from 19:00 to 20:30.  
Status: formal route; lunch and sushi dinner restaurant candidates pending.  
Changed: 2026-07-06.  
Reason: The user explicitly provided the Osaka city schedule and stated dinner should be sushi and that the formal itinerary should be overwritten.  
Impact: The formal Day 3 route is no longer Kyoto. Update all future planning, budget tracking, customer-facing tables, and restaurant search priorities around Osaka city Day 3.

## D034 Reservation and purchase timeline V5.26.0

Decision: Maintain a formal reservation and purchase timeline using `database/reservation_purchase_timeline.yml` as the source database and `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md` as the readable document.  
Status: active.  
Changed: 2026-07-07.  
Reason: The user clarified that the desired output is a date-sorted purchase / reservation table, for example “2026/11 買機票 EVA Air BR178／BR129 36000 TWD.”  
Timeline:

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

Impact: This timeline becomes the planning baseline for purchase timing, reservation timing, budget tracking, and customer-facing TODO tables. 2027 official prices and release windows remain pending where marked.

## D035 Ambassador renewal tracking

Decision: InterContinental Ambassador renewal is planned for 2026/12 at USD 250.  
Status: planned; USD standalone tracking.  
Changed: 2026-07-07.  
Reason: The user added the Ambassador renewal to the purchase timeline.  
Impact: Track USD 250 separately from the TWD main trip budget until exchange rate or actual card charge is known. This renewal may affect InterContinental Osaka BOGO / Weekend Night, upgrade, and stay-planning assumptions, all of which still require reconfirmation.
