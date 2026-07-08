# AGENTS

This repository is maintained by ChatGPT, Codex, and Claude Code.

Current sync version: V5.53.0 USJ VIP 8h Budget Update.

ChatGPT handles travel decisions, prioritization, itinerary fit, budget impact, source reliability, integration, and customer-facing presentation direction.

Codex handles repository maintenance, formatting, duplicate checks, Markdown and YAML cleanup, changelog consistency, and avoiding parallel versions.

Claude Code follows `CLAUDE.md` when assisting repository maintenance.

## Required process

1. Read README first.
2. Check existing docs and database before edits.
3. Update existing entries instead of creating duplicates.
4. Keep fixed assumptions unchanged unless the user explicitly changes them.
5. Record major changes in CHANGELOG and `docs/13_版本與更新/`.
6. Database first, docs second, changelog last.
7. Website presentation changes under `web/` must preserve the database and budget baseline instead of creating a parallel plan.

## Fixed assumptions

- 2027-11-17 to 2027-11-21
- 5 days and 4 nights
- InterContinental Osaka
- Luxury Slow Travel
- USJ one day
- Taste-first dining; Michelin status neutral
- Luxury shopping
- Day 1 formal sequence: hotel arrival, Executive Lounge afternoon tea target, hotel rest, Pokemon Center OSAKA in Umeda, Chibo Umeda-area dinner, then hotel return
- Day 1 formal dinner direction: 千房 梅田周邊店 / Chibo Umeda-area branch; exact branch pending confirmation
- Day 2 USJ strategy: USJ Express Pass 7 is superseded by USJ VIP 8h; VIP 8h is treated as including lunch, dinner, and in-park dining; Studio Pass remains pending until official rules confirm whether VIP includes admission
- Day 3 formal itinerary: no Kyoto; Kizu Market brunch, Namba / Nipponbashi anime models and merch, return to InterContinental Osaka for rest and Executive Lounge afternoon tea, and 肉NOASATSU sushi dinner
- Day 4 formal route: Shinsaibashi-focused activity range before and around lunch, Pokemon Center OSAKA DX, return to InterContinental Osaka after lunch, Executive Lounge afternoon tea, hotel / nearby activities, and NOKA Roast & Grill Anniversary Dinner with buffet package and 90-minute drinks
- Day 4 PIERRE and sushi status: fallback-only unless the user explicitly changes back

## Current logistics and budget inputs

- Flights: EVA Air BR178 outbound and BR129 return.
- Flight timing baseline: use current timetable directly for hourly planning: BR178 06:30 TPE to 10:10 KIX; BR129 18:30 KIX to 20:30 TPE. Official 2027-11 schedule, fare, aircraft, terminal, baggage, and booking status still need confirmation before ticketing.
- Flight budget reference: TWD 36,000 for two travelers round trip; planned purchase time is 2026/11.
- InterContinental Ambassador renewal: planned for 2026/12, USD 250, tracked separately from TWD base budget until exchange rate or actual charge is confirmed.
- Active reservation / purchase timeline: `database/reservation_purchase_timeline.yml`.
- 2027/09/17: planned USJ VIP 8h purchase / reservation attempt at user-provided TWD 87,000 reference and NOKA Roast & Grill Anniversary Dinner reservation.
- 2027/10/10: planned KKday #129909 airport transfer purchase, KKday #536220 hotel-USJ transfer purchase, and USJ Studio Pass purchase.
- 2027/11/05: planned travel insurance purchase and roaming application.
- Day 1 sequence: after afternoon tea, rest at the hotel, then go to Umeda Pokemon Center, eat dinner at 千房 梅田周邊店 / Chibo Umeda-area branch, and return to the hotel.
- Day 2 sequence: USJ one day with USJ VIP 8h; VIP 8h is treated as including lunch, dinner, and in-park dining; no separate USJ park dining and shopping line should be revived.
- Day 3 sequence: Kizu Market brunch, move to Namba / Nipponbashi, Nipponbashi anime / model / merch shopping, Namba / Dotonbori / Shinsaibashi lunch, return to InterContinental Osaka, Executive Lounge afternoon tea, and 肉NOASATSU sushi dinner.
- Day 3 previous Kyoto route: superseded and fallback-only, including 京 鰻和 本店 and 天ぷら 京星.
- Day 4 sequence: Shinsaibashi / Daimaru Shinsaibashi / Pokemon Center OSAKA DX before and around lunch; after lunch return to InterContinental Osaka; afternoon at or near the hotel; dinner is NOKA Roast & Grill Anniversary Dinner.
- Insurance: TWD 6,900, planned purchase date 2027/11/05, payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499, planned application date 2027/11/05.
- Airport transfer: KKday #129909 for both KIX to hotel and hotel to KIX. Reference price is TWD 2,600 each way, TWD 5,200 round trip. Planned purchase date 2027/10/10.
- USJ transfer: KKday #536220 for both hotel to USJ and hotel return. Reference price is TWD 1,732 each way, TWD 3,464 round trip. Planned purchase date 2027/10/10.
- Active budget model: recommended total TWD 272,454 for two travelers; controlled total TWD 267,756; safety version TWD 280,000; hard ceiling TWD 280,000; Ambassador renewal USD 250, luxury handbags, jewelry, and watches are separate. Lodging should be estimated net of the lower-price complimentary night, not using the temporary checkout charge peak.
- Shopping model: USJ shopping and ordinary Pokémon / anime / Nipponbashi / department-store small goods are merged into TWD 14,000.
- Dining: choose good restaurants; do not label the plan as non-Michelin, and do not prioritize Michelin status either way.
- Website presentation: V5.53.0 updated `web/index.html` and `web/budget.js` for USJ VIP 8h and the revised budget while preserving the V5.52.0 travel-agency-style visual storytelling page.
