# DECISIONS

This file records fixed project decisions, active formal decisions, and superseded / fallback decisions.

Current sync version: V5.53.0 USJ VIP 8h Budget Update.

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
Status: fixed; planned application date is 2027-11-05 through the active timeline.  
Changed: 2026-07-07.

## D011 Airport transfer

Decision: use KKday #129909 transfer for KIX ↔ InterContinental Osaka round trip.  
Status: selected; planned purchase date is 2027-10-10.  
Reference price: TWD 2,600 each way, TWD 5,200 round trip.  
Reconfirmation: 2027 price, vehicle, luggage, waiting time, route, and cancellation rules still need confirmation.

## D012 Travel insurance

Decision: travel insurance amount is TWD 6,900.  
Status: amount recorded; planned purchase date is 2027-11-05; payment status needs confirmation.  
Changed: 2026-07-07.

## D013 Flights

Decision: outbound flight is EVA Air BR178 and return flight is EVA Air BR129.  
Status: selected; current timetable is used as hourly planning baseline; official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still need confirmation before ticketing.  
Reference price: TWD 36,000 for two travelers round trip; planned purchase time is 2026/11.  
Supersedes: V5.24.0 / V5.25.0 flight reference TWD 35,000.

## D014 Hotel to USJ transfer

Decision: use KKday #536220 transfer for InterContinental Osaka ↔ USJ round trip.  
Status: selected; planned purchase date is 2027-10-10.  
Reference price: TWD 1,732 each way, TWD 3,464 round trip, based on user-provided screenshot showing NT$1,732 起.  
Reconfirmation: 2027 price, product rules, 20KM range, pickup point, route, vehicle, luggage, waiting time, and cancellation rules still need confirmation.  
Changed: 2026-07-07.  
Consistency note: V5.51.0 resolves old text saying purchase date was not assigned.

## D015 Customer-facing travel plan tables

Decision: maintain a customer-facing travel planning document with three fixed tables.  
Status: fixed.  
Required tables: 行程表, 行前提醒／TODO LIST, 預算表.  
Changed: 2026-07-06.

## D016 Day 3 confirmed interest-based route

Decision: 2027-11-19 Day 3 is formally confirmed as Osaka city route: Kizu Market brunch + Namba / Nipponbashi anime models and merch + hotel rest and Executive Lounge afternoon tea + Osaka city sushi dinner.  
Status: fixed; supersedes the previous Kyoto route.  
Changed: 2026-07-06.  
Reason: The user explicitly instructed: “晚餐吃壽司 覆蓋正式行程 並更新所需更新章節.”  
Impact: Do not treat Kyoto sweets, 京 鰻和 本店, 天ぷら 京星, Pokemon Center KYOTO, or Kyoto International Manga Museum as formal Day 3 stops unless the user later restores Kyoto.

## D017 Day 3 transport priority

Decision: Day 3 primary transport is Osaka city metro, walking, and short taxi backup. KKday #133661 10-hour charter is no longer part of the formal Day 3 route and remains backup only if the user restores Kyoto or explicitly requests comfort travel.  
Status: fixed.

## D018 Day 1 Pokemon Center Osaka

Decision: 2027-11-17 Day 1 includes Pokémon Center OSAKA in Umeda after afternoon tea and hotel rest if arrival-day energy allows.  
Status: fixed, timing planned around BR178 current timetable baseline 06:30-10:10; final timing still pending official 2027 flight schedule, hotel lounge policy, and store hours.

## D019 Day 3 formal lunch

Decision: 2027-11-19 Day 3 lunch should be in Namba / Dotonbori / Shinsaibashi area, exact restaurant pending.  
Status: active, candidate needed; previous 京 鰻和 本店 lunch is superseded and fallback-only.

## D020 Day 3 formal dinner

Decision: 2027-11-19 Day 3 dinner should be sushi in Osaka city.  
Status: active through D033 / D036; current formal source is 肉NOASATSU / KKday #268366.  
Changed: 2026-07-06; synchronized in V5.51.0.

## D021 Tempura Kyoboshi reservation route

Decision: TABLEALL Reservation Request for 天ぷら 京星 was previously selected as the Day 3 dinner route.  
Status: superseded; fallback-only unless the user restores Kyoto.

## D022 Day 4 Pokemon Center Osaka DX

Decision: 2027-11-20 Day 4 includes Pokémon Center OSAKA DX and the Day 4 activity area is Shinsaibashi-centered before and around lunch.  
Status: fixed, store hours and event rules pending.

## D023 Day 4 Executive Lounge afternoon tea

Decision: 2027-11-20 Day 4 includes InterContinental Osaka Executive Lounge afternoon tea after returning from Shinsaibashi.  
Status: fixed, lounge access and 2027 afternoon tea hours pending.

## D024 Flight timetable baseline

Decision: For hourly itinerary planning, use the current EVA Air timetable directly: BR178 TPE 06:30 to KIX 10:10; BR129 KIX 18:30 to TPE 20:30.  
Status: planning baseline; not a ticketed or official 2027-11 confirmation.

## D025 Day 1 afternoon tea and Umeda sequence

Decision: Day 1 sequence is hotel arrival, InterContinental Osaka Executive Lounge afternoon tea target, rest at the hotel, Pokémon Center OSAKA in Umeda, dinner near Pokémon Center OSAKA, then return to InterContinental Osaka.  
Status: fixed preference, implementation pending 2027 hotel lounge policy, arrival timing, store hours, and final branch confirmation for dinner.

## D026 Day 4 Shinsaibashi-centered route

Decision: 2027-11-20 Day 4 activity range should be Shinsaibashi-centered before and around lunch, with Pokémon Center OSAKA DX / Daimaru Shinsaibashi as the anchor.  
Status: fixed preference, implementation pending 2027 store hours, event rules, lunch candidate selection, and traffic conditions.

## D027 Day 4 post-lunch return to hotel

Decision: After Day 4 lunch, return to InterContinental Osaka and keep afternoon activity at or near the hotel.  
Status: fixed preference, implementation pending final lunch location and transport choice.

## D028 Day 4 hotel in-house dinner historical note

Decision history: Day 4 dinner was once redirected to PIERRE for an anniversary dinner with window / Osaka night-view request.  
Status: superseded by D036.  
Current rule: Do not treat PIERRE as the primary Day 4 dinner unless the user explicitly changes back. PIERRE is fallback-only.

## D029 Day 4 sushi dinner preference

Decision history: Day 4 dinner cuisine preference was previously recorded as sushi.  
Status: superseded by D036.  
Current rule: Keep Day 4 sushi only as fallback if the user changes back.

## D030 Day 1 formal dinner direction

Decision: Day 1 dinner after Pokémon Center OSAKA should be 千房 梅田周邊店 / Chibo Umeda-area branch.  
Status: formal dinner direction; exact branch pending confirmation.

## D031 Day 4 Anniversary Dinner at PIERRE historical note

Decision history: 2027-11-20 Day 4 dinner was previously recorded as Anniversary Dinner at PIERRE, with a window seat / Osaka night-view request.  
Status: superseded by D036.  
Impact: PIERRE remains a documented fallback-only option if NOKA cannot be booked or if the user explicitly restores PIERRE. It is not the current formal dinner.

## D032 Budget model V5.53.0

Decision: Use V5.53.0 budget model as the current planning baseline.  
Status: active budget baseline.  
Recommended total: TWD 272,454 for two travelers.  
Controlled total: TWD 267,756 for two travelers.  
Safety version: TWD 280,000 for two travelers.  
Hard ceiling: TWD 280,000 for two travelers.  
Separate tracking: Ambassador renewal USD 250, luxury handbags, jewelry, and watches.  
Reason: V5.53.0 replaces the previous USJ Express Pass 7 budget with USJ VIP 8h TWD 87,000, removes the separate USJ park dining / shopping line, and merges USJ shopping with general shopping at TWD 14,000.

## D033 Day 3 Osaka city sushi formal route

Decision: 2027-11-19 Day 3 should be Kizu Market brunch, Namba / Nipponbashi anime models and merch shopping, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, then 肉NOASATSU sushi dinner from 19:00 to 20:30.  
Status: formal route.  
Dinner source: KKday #268366.  
Reference price: TWD 1,541 per person; TWD 3,082 for two travelers.  
Pending: final reservation rules, cancellation policy, exact location, route, and 2027 availability.

## D034 Reservation and purchase timeline V5.53.0

Decision: Maintain a formal reservation and purchase timeline using `database/reservation_purchase_timeline.yml` as the source database and `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md` as the readable document.  
Status: active.  
Timeline:

| 日期 | 項目 | 金額 |
|---|---|---:|
| 2026/11 | 買機票 EVA Air BR178／BR129 | 36,000 TWD |
| 2026/12 | 續約洲際酒店大使 | 250 USD |
| 2027/09/17 | 購買／預約 USJ VIP 8 小時 | 87,000 TWD |
| 2027/09/17 | NOKA Roast & Grill 訂位 | 待確認 |
| 2027/10/10 | 買 KKday 機場接送 | 待確認 |
| 2027/10/10 | 買 KKday USJ 接送 | 待確認 |
| 2027/10/10 | 買 USJ Studio Pass | 待官方公布 |
| 2027/11/05 | 旅遊保險 | 6,900 TWD |
| 2027/11/05 | 申請漫遊 | 499 TWD |

## D035 Ambassador renewal tracking

Decision: InterContinental Ambassador renewal is planned for 2026/12 at USD 250.  
Status: planned; USD standalone tracking.  
Impact: Track USD 250 separately from the TWD main trip budget until exchange rate or actual card charge is known. This renewal may affect InterContinental Osaka BOGO / Weekend Night, upgrade, and stay-planning assumptions, all of which still require reconfirmation.

## D036 V5.51.0 repository consistency cleanup

Decision: V5.51.0 reconciled the repository around the active plan at that time: Day 3 dinner was 肉NOASATSU / KKday #268366, Day 4 dinner was NOKA Roast & Grill, PIERRE was fallback-only, and the active TWD recommended budget was NT$199,346 for two travelers.  
Status: historical consistency decision, superseded for budget by D037.  
Changed: 2026-07-08.

## D037 USJ VIP 8h budget update

Decision: Replace USJ Express Pass 7 with USJ VIP 8h for Day 2.  
Status: active USJ and budget decision.  
Changed: 2026-07-08.  
Reference amount: TWD 87,000, based on user-provided value.  
Meal policy: VIP 8h is treated as including lunch, dinner, and in-park dining, so USJ park dining is not listed as a separate budget line.  
Shopping policy: USJ shopping and ordinary Pokémon / anime / Nipponbashi / department-store small goods are merged into a TWD 14,000 shopping category.  
Studio Pass policy: Studio Pass remains a 2027-10-10 purchase target and a TWD 7,108 two-person budget reference until official rules confirm whether VIP 8h includes admission.  
Budget impact: recommended total is now TWD 272,454 for two travelers; safety version and hard ceiling are both TWD 280,000.  
Pending: official 2027 availability, currency, final price, meal scope, whether Studio Pass is included, booking window, and cancellation policy.
