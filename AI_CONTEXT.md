# AI_CONTEXT

Project: 2027 Osaka Trip
Version: V5.12.0
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

## Current Priorities

1. Daily price and open-status monitoring across watchlist sources
2. USJ strategy and official 2027 updates
3. Taste-first Osaka restaurant candidate planning
4. Flight and airport planning
5. InterContinental Osaka stay planning
6. Luxury shopping plan
7. Osaka Amazing Pass candidate plan
8. YouTube source database cleanup
9. Budget tracking
10. KKday airport transfer product 129909 details and price confirmation
11. KKday hotel-USJ transfer product 536220 details and price confirmation
12. Mobile roaming setup and payment confirmation
13. Customer-facing travel planning tables: itinerary, pre-trip TODO list, and budget summary

## User-Provided Confirmed Planning Inputs

- Flights: EVA Air BR178 outbound and BR129 return; official 2027-11 schedule and fare need confirmation.
- Travel insurance budget amount: TWD 6,900; payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499; eSIM / SIM / Pocket Wi-Fi are backup only.
- Airport transfer: use KKday product 129909 both ways between KIX and InterContinental Osaka.
- USJ transfer: use KKday product 536220 both ways between InterContinental Osaka and Universal Studios Japan.
- Dining: choose restaurants because they are good; Michelin status does not matter either way.
- Customer-facing output: always maintain the three simple tables requested by the user: 行程表, 行前提醒／TODO LIST, 預算表.

## Customer-Facing Output Rules

- Use Traditional Chinese.
- Audience is travelers/customers, not internal project maintainers.
- Keep tables simple and use the fixed columns recorded in `database/customer_facing_travel_plan.yml`.
- Mark uncertain items as 待確認, 待官方公布, or 參考價格.
- Update existing customer-facing content instead of creating parallel versions.

## Maintenance Rule

Database first, docs second, changelog last.
