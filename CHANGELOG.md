# CHANGELOG

# V5.51.0 - 2026-07-08

### Changed

- Completed repository consistency cleanup after V5.50.0.
- Aligned master control files, database files, customer-facing docs, roadmap, watchlist, and daily sync status around V5.51.0.
- Set the active recommended budget to NT$199,346 for two travelers, controlled scenario to NT$194,648, safety version to NT$250,000, and hard ceiling to NT$280,000.
- Confirmed Day 3 dinner as 肉NOASATSU / KKday #268366.
- Confirmed Day 4 formal dinner as NOKA Roast & Grill.
- Marked PIERRE and Day 4 sushi as fallback-only.
- Confirmed KKday #536220 hotel-USJ transfer purchase target as 2027/10/10.
- Added version note `docs/13_版本與更新/V5.51.0_Repository_Consistency_Cleanup.md`.

### Reason

The repository still had inconsistent post-V5.50.0 references across DECISIONS, AI_CONTEXT, PROJECT_RULE, AGENTS, customer-facing tables, and budget summaries.

### Impact

- Future AI work should use V5.51.0 as the active baseline unless the user explicitly changes the plan.
- The current active TWD planning budget is NT$199,346 for two travelers.
- Day 4 PIERRE remains documented as history / fallback only, not the active formal dinner.
- This update is a consistency cleanup only and does not add a new itinerary decision.

# V5.50.0 - 2026-07-08

### Changed

- Updated the planned room type to `1 King Premium Club Lounge Access` and revised the two hotel booking prices to NT$37,400 and NT$28,500, with the net lodging total now recorded as NT$65,900.
- Recalculated the active budget baseline to NT$199,346 for two travelers and updated the controlled scenario to NT$194,648.
- Synchronized `database/project.yaml`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `database/reservations.yaml`, `database/hotel_lounge.yml`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/14_自動同步狀態/每日同步狀態.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `web/budget.js`, and `README.md`.

### Reason

The user changed the lodging room type and the two booking prices, and asked to keep the web version and the repository documentation aligned.

### Impact

- The active plan now reflects the new room type without the `City View` qualifier.
- The website and travel notes now display the updated lodging totals and the revised main budget baseline.
- The hotel reply remains partially confirmed, but the stored reservation and planning references are now consistent with the latest numbers.

# V5.49.0 - 2026-07-07

### Changed

- Added the InterContinental Osaka hotel reply summary to the customer-facing docs and website, including the expected room type, usual upgrade path, same-room consecutive stay guidance, lounge access continuity, and paid 12:00 early check-in policy.
- Updated `database/hotel_lounge.yml`, `database/reservations.yaml`, `database/project.yaml`, `database/customer_facing_travel_plan.yml`, `database/budget_model.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `web/budget.js`, `README.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.

### Reason

The user asked to turn the hotel reply into a reusable FAQ / policy memo / pre-trip checklist and to remember to update the website.

### Impact

- The planned room type is now recorded as `1 King Premium Club Lounge Access City View`.
- The website now surfaces the hotel reply in both the hero area and a dedicated FAQ-style section.
- The hotel and reservation records now distinguish between partial confirmation and items that still need reconfirmation.

# V5.48.0 - 2026-07-07

### Changed

- Replaced the web budget section with JavaScript-driven rendering so the page now stores budget line-item details and computes totals, percentages, stacked bars, scenario widths, and summary cards dynamically.
- Updated `web/index.html` and added `web/budget.js`.

### Reason

The user wanted the budget-related web content to be handled in JS, with only the detail records stored explicitly and the rest calculated automatically.

### Impact

- The website budget display is now driven by a single budget data object instead of repeated hard-coded totals.
- The rendered totals, category percentages, and comparison bars stay synchronized with the stored line items.

# V5.47.0 - 2026-07-07

### Changed

- Lowered the hard budget ceiling from NT$380,000 to NT$280,000 for two travelers while keeping the displayed safety version at NT$250,000.
- Updated `database/project.yaml`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/14_自動同步狀態/每日同步狀態.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `web/index.html`, `README.md`, and `docs/13_版本與更新/V5.47.0_Safety_Upper_Limit_280000.md`.

### Reason

The user asked to reduce the upper limit to NT$280,000.

### Impact

- The active hard ceiling is now NT$280,000 for two travelers.
- The safety version remains NT$250,000 for two travelers.

# V5.46.0 - 2026-07-07

### Changed

- Reduced the Day 1 Chibo dinner line from NT$9,000 to NT$4,000 and raised the Day 3 Kizu Market brunch from NT$6,000 to NT$8,000, then recalculated the active budget totals accordingly.
- Recalculated the recommended TWD budget from NT$220,292 to NT$217,292 for two travelers, with the controlled scenario updated to NT$212,594 and the safety version still kept at NT$250,000.
- Updated `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/14_自動同步狀態/每日同步狀態.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `README.md`, and `docs/13_版本與更新/V5.46.0_Day1_Chibo_Budget_Adjustment.md`.

### Reason

The user confirmed Day 1 Chibo at NT$4,000 and Day 3 Kizu Market brunch at NT$8,000.

### Impact

- The active recommended TWD budget is now NT$217,292 for two travelers.
- The controlled scenario is now NT$212,594 for two travelers.
- The safety version remains NT$250,000 for two travelers and the hard ceiling remains NT$380,000.

# V5.45.0 - 2026-07-07

### Changed

- Lowered the displayed safety budget from NT$380,000 to NT$250,000 so it is closer to the recommended budget while still leaving the hard ceiling intact.
- Updated `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `docs/14_自動同步狀態/每日同步狀態.md`, `README.md`, and `docs/13_版本與更新/V5.45.0_Safety_Budget_Right_Sizing.md`.

### Reason

The user pointed out that the safety budget was too far above the recommended budget.

### Impact

- The active safety version is now NT$250,000 for two travelers.
- The absolute ceiling remains NT$380,000 for two travelers.

# V5.44.0 - 2026-07-07

### Changed

- Reduced the USJ park dining and shopping line from NT$10,000 to NT$7,892, keeping the two-person Express Pass 7 and Studio Pass calculation unchanged.
- Recalculated the active recommended TWD budget from NT$222,400 to NT$220,292 for two travelers after the USJ in-park spend adjustment.
- Updated `database/project.yaml`, `database/budget_model.yml`, `database/reservation_purchase_timeline.yml`, `database/day4_shinsaibashi_hotel_dinner.yml`, `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `docs/14_自動同步狀態/每日同步狀態.md`, and `docs/13_版本與更新/V5.44.0_USJ_Park_Dining_Shopping_Adjustment.md`.

### Reason

The user clarified that the USJ park dining and shopping budget should be NT$7,892.

### Impact

- The active recommended TWD budget is now NT$220,292 for two travelers.
- USJ now reflects the lower in-park spend across the database, customer-facing docs, and the website.

# V5.43.0 - 2026-07-07

### Changed

- Confirmed the USJ ticket prices are per person, so the active USJ budget now multiplies the Express Pass 7 and Studio Pass by two travelers before adding park dining and shopping.
- Recalculated the active recommended TWD budget from NT$213,846 to NT$222,400 for two travelers after applying the two-person USJ calculation.
- Updated `database/project.yaml`, `database/budget_model.yml`, `database/reservation_purchase_timeline.yml`, `database/day4_shinsaibashi_hotel_dinner.yml`, `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `README.md`, `web/index.html`, `docs/14_自動同步狀態/每日同步狀態.md`, and `docs/13_版本與更新/V5.43.0_USJ_Two_Person_Budget_Adjustment.md`.

### Reason

The user clarified that the USJ prices are single-person prices and the budget should be calculated for two travelers.

### Impact

- The active recommended TWD budget is now NT$222,400 for two travelers.
- USJ now stays aligned across the database, customer-facing docs, and the website.

# V5.42.0 - 2026-07-07

### Changed

- Cleaned up the Day 4 dinner naming so the restaurant is consistently `NOKA Roast & Grill`, while keeping `anniversary dinner` as the descriptive request.
- Recalculated the active recommended TWD budget from NT$244,646 to NT$213,846 for two travelers after the Day 4 NOKA reference was converted from JPY to TWD at 0.2.
- Updated `database/project.yaml`, `database/budget_model.yml`, `database/day4_shinsaibashi_hotel_dinner.yml`, `database/reservation_purchase_timeline.yml`, `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `PROJECT_RULE.md`, `ROADMAP.md`, `WATCHLIST.md`, `AI_CONTEXT.md`, `web/index.html`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.42.0_NOKA_Roast_Grill_Name_And_Budget_Cleanup.md`.

### Reason

The user clarified that the restaurant name should be `NOKA Roast & Grill`, not `NOKA Roast & Grill Anniversary Dinner`, and that the NOKA amount should be converted to TWD rather than added as JPY.

### Impact

- Active planning docs now use the restaurant name consistently.
- The active recommended budget remains at NT$213,846 for two travelers.

# V5.41.0 - 2026-07-07

### Changed

- Updated Day 3 and Day 4 Osaka city transport to use Suica / IC card metro as the primary mode, with short taxi kept only as backup.
- Synchronized the transport wording across `database/project.yaml`, `database/customer_facing_travel_plan.yml`, `database/budget_model.yml`, `database/itinerary_hourly.yml`, `database/day4_shinsaibashi_hotel_dinner.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, and the active planning references.
- Added version note `docs/13_版本與更新/V5.41.0_Suica_Metro_Transport_Update.md`.

### Reason

The user clarified that Day 3 and Day 4 city transport will likely be paid with Suica while using the metro.

### Impact

- The travel plan now matches the intended metro-based city movement.
- The existing transport budget remains conservatively buffered instead of being reduced immediately.

# V5.40.0 - 2026-07-07

### Changed

- Updated the USJ budget from a single NT$40,000 placeholder to the user-provided breakdown: Express Pass 7 at NT$4,365 to NT$5,754, Studio Pass at NT$1,840 to NT$2,800, and park dining plus shopping at NT$10,000.
- Recalculated the recommended TWD budget from NT$259,342 to NT$237,896 for two travelers after removing the old lump-sum USJ placeholder.
- Updated `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/14_自動同步狀態/每日同步狀態.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, and `WATCHLIST.md`.
- Added version note `docs/13_版本與更新/V5.40.0_USJ_Budget_Adjustment.md`.

### Reason

The user asked to update the USJ budget and整理專案內檔案.

### Impact

- The active recommended TWD budget is now NT$237,896 for two travelers.
- The website and documentation now present USJ as three distinct budget sub-items rather than one single line.

# V5.39.0 - 2026-07-07

### Changed

- Confirmed the Day 3 Osaka city sushi dinner as KKday product `268366` with the user screenshot price of NT$1,541 per person and NT$3,082 for two.
- Recalculated the recommended TWD budget from NT$276,260 to NT$259,342 for two travelers after replacing the Day 3 sushi placeholder with the confirmed KKday price.
- Updated `database/day3_osaka_city_sushi_formal.yml`, `database/reservations.yaml`, `database/project.yaml`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/01_行程規劃/2027-11-19_Day3_大阪市內木津市場日本橋壽司正式行程_V5.25.0.md`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.39.0_Day3_KKday268366_Sushi_Price_Confirmation.md`.

### Reason

The user provided a screenshot showing the Day 3 KKday sushi price.

### Impact

- The active recommended TWD budget is now NT$259,342 for two travelers.
- Day 3 sushi now has a concrete per-person and total price in both the data model and the web UI.

# V5.38.0 - 2026-07-07

### Changed

- Fixed Day 3 Osaka city sushi dinner to the user-provided KKday product `268366` and kept the provisional dining amount at NT$20,000 pending the product-page price confirmation.
- Updated `database/day3_osaka_city_sushi_formal.yml`, `database/reservations.yaml`, `database/project.yaml`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `database/reservation_purchase_timeline.yml`, `docs/01_行程規劃/2027-11-19_Day3_大阪市內木津市場日本橋壽司正式行程_V5.25.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `web/index.html`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.38.0_Day3_KKday268366_Sushi_Selection.md`.

### Reason

The user specified that Day 3 Osaka city sushi dinner should be this KKday product.

### Impact

- Day 3 now has a concrete sushi dinner source instead of an open-ended candidate list.
- The dining budget remains provisionally unchanged until the KKday page price is confirmed.

# V5.36.0 - 2026-07-07

### Changed

- Recalculated the recommended TWD budget from NT$274,510 to NT$264,510 for two travelers after lowering the "other" category by NT$10,000.
- Lowered the "other" budget line from NT$25,000 to NT$15,000, with the reserve sub-line reduced from NT$17,601 to NT$7,601.
- Updated `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.36.0_Web_Other_Budget_Adjustment.md`.

### Reason

The user asked to reduce the travel goods, exchange spread, and reserve budget by NT$10,000.

### Impact

- The website and customer-facing docs now reflect the lower "other" budget line.
- The active recommended TWD budget is now NT$264,510 for two travelers.
- The safety ceiling remains unchanged at NT$380,000.

# V5.26.2 - 2026-07-07

### Changed

- Recalculated the recommended TWD budget from NT$306,274 to NT$274,510 for two travelers after treating the lower-price lodging night as free.
- Lowered the lodging baseline from NT$115,609.84 to an estimated net NT$83,845.73, displayed as NT$83,846 in the budget tables.
- Updated `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.26.2_Web_Lodging_Net_Budget_Adjustment.md`.

### Reason

The user clarified that the hotel updates the amount at checkout and the lower-price night should be treated as free, so the budget should show a modest buffer without overestimating and making the trip look infeasible.

### Impact

- The website and customer-facing docs now use the lodging net amount after the complimentary night treatment.
- The active recommended TWD budget is now NT$274,510 for two travelers.
- The safety ceiling remains unchanged at NT$380,000.

# V5.35.0 - 2026-07-07

### Changed

- Replaced the estimated lodging baseline with the two confirmed InterContinental Osaka booking charges from the screenshots.
- Updated the accommodation baseline to use NT$115,609.84 across the website, database, customer-facing docs, and active planning references.
- Recalculated the recommended TWD budget from NT$295,664 to NT$306,274 for two travelers.
- Updated `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.35.0_Web_Accommodation_Charge_Confirmation.md`.

### Reason

The user wanted the budget to use the actual booking amounts as the baseline and asked us not to keep inflating the estimate without basis.

### Impact

- The lodging line now reflects the confirmed two-booking structure and the exact charges shown in the screenshots.
- The current recommended TWD budget is now based on confirmed accommodation charges instead of a placeholder estimate.
- The safety ceiling remains unchanged at NT$380,000.

# V5.34.0 - 2026-07-07

### Changed

- Lowered the shopping budget from NT$40,000 to NT$10,000 across the website, database, and customer-facing planning documents.
- Recalculated the recommended TWD budget from NT$325,664 to NT$295,664 for two travelers.
- Updated `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `database/project.yaml`.
- Added version note `docs/13_版本與更新/V5.34.0_Web_Shopping_Budget_Adjustment.md`.

### Reason

The user asked to change the shopping budget from NT$40,000 to NT$10,000.

### Impact

- The active shopping category is now smaller and the main TWD budget is lower.
- The safety ceiling remains unchanged at NT$380,000.
- Historical notes that describe earlier budget revisions are left intact where they are clearly archival.

## V5.33.0 - 2026-07-07

### Changed

- Updated the active accommodation wording across the website and current budget/customer-facing documents to clarify that the stay is split into two booking orders, not a single four-night order.
- Adjusted `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, and `docs/15_顧客版資料/旅遊常用表格總覽.md`.
- Added version note `docs/13_版本與更新/V5.33.0_Web_Accommodation_Booking_Split.md`.

### Reason

The user corrected the accommodation structure and said it should be understood as two separate bookings rather than one direct four-night booking.

### Impact

- Current materials now reflect the booking structure more accurately.
- The total stay length remains four nights.
- No budget amount changed; this is a wording and structure clarification.

## V5.32.0 - 2026-07-07

### Changed

- Removed the itinerary rhythm chart and its explanatory note from `web/index.html` so the itinerary section returns to a simpler card-only view.
- Removed the now-unused itinerary rhythm styles from `web/styles.css`.
- Added version note `docs/13_版本與更新/V5.32.0_Web_Remove_Itinerary_Chart.md`.

### Reason

The user said the itinerary chart was still hard to understand and wanted it removed.

### Impact

- The itinerary section is now easier to read because only the daily cards remain.
- Budget, calendar, and key-date visuals are unchanged.
- No planning values were changed; this is a presentation cleanup.

## V5.31.0 - 2026-07-07

### Changed

- Replaced the detailed budget table in `web/index.html` with an expandable tree-style budget list for the six main categories.
- Added tree node and nested leaf styles to `web/styles.css`.
- Added version note `docs/13_版本與更新/V5.31.0_Web_Budget_Tree.md`.

### Reason

The user wanted the six budget categories to behave more like a tree so the subitems are easier to inspect on demand.

### Impact

- Budget categories now appear as expandable nodes with nested subitems.
- The homepage is easier to scan by category while still preserving the detailed amounts.
- No planning values were changed; this is a presentation-only update.

## V5.30.0 - 2026-07-07

### Changed

- Added plain-language helper text to the itinerary and calendar sections in `web/index.html` so the visual blocks are easier to interpret.
- Updated `web/styles.css` with a reusable section-note style for explanatory text.
- Added version note `docs/13_版本與更新/V5.30.0_Web_Itinerary_Helper_Text.md`.

### Reason

The user said the itinerary table was hard to understand, so the web page needed short explanations that say how to read each section.

### Impact

- The itinerary visuals now explain what the bars and day cards mean.
- The calendar section now explains how to read the dates and tasks.
- No planning values were changed; this is a usability update.

## V5.29.0 - 2026-07-07

### Changed

- Added an itinerary rhythm chart to `web/index.html` so the Day 1 to Day 5 pacing is visible at a glance.
- Added a key-date milestone timeline to `web/index.html` so purchase and reservation dates read like a visual schedule.
- Updated `web/styles.css` with the itinerary and milestone chart styles.
- Added version note `docs/13_版本與更新/V5.29.0_Web_Itinerary_and_Key_Date_Charts.md`.

### Reason

The user asked whether there were other parts of the web page that were suitable for charts and requested those be added too.

### Impact

- The homepage now shows budget, trip rhythm, and key-date charts.
- The calendar table and itinerary cards remain available for detailed reading.
- No planning values were changed; this is a presentation-layer enhancement.

## V5.28.0 - 2026-07-07

### Changed

- Added budget chart visualizations to `web/index.html` so the homepage now shows a budget mix bar and a recommended-versus-safety comparison chart.
- Updated `web/styles.css` with the chart layout, legend, and scenario bar styles.
- Added version note `docs/13_版本與更新/V5.28.0_Web_Budget_Charts.md`.

### Reason

The user asked to present the trip budget visually on the web page rather than only as a table.

### Impact

- The public homepage now gives a faster visual read of budget composition and headroom.
- The budget table remains in place for detailed review and reconciliation.
- No planning values were changed; this is a presentation-only update.

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
# V5.37.0 - 2026-07-07

### Changed

- Recalculated the recommended TWD budget from NT$264,510 to NT$276,260 for two travelers after raising Day 4 PIERRE Anniversary Dinner to the user-provided reference price of NT$31,750.
- Raised the dining budget from NT$60,000 to NT$71,750 and updated the Day 4 PIERRE dinner line to NT$31,750.
- Updated `database/day4_shinsaibashi_hotel_dinner.yml`, `web/index.html`, `database/budget_model.yml`, `database/customer_facing_travel_plan.yml`, `docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md`, `docs/15_顧客版資料/旅遊規劃三表.md`, `docs/15_顧客版資料/旅遊常用表格總覽.md`, `database/project.yaml`, `database/reservation_purchase_timeline.yml`, `README.md`, `AGENTS.md`, `PROJECT_RULE.md`, `AI_CONTEXT.md`, `ROADMAP.md`, `WATCHLIST.md`, and `docs/14_自動同步狀態/每日同步狀態.md`.
- Added version note `docs/13_版本與更新/V5.37.0_Web_PIERRE_Budget_Adjustment.md`.

### Reason

The user provided a screenshot for Day 4 PIERRE Anniversary Dinner showing a reference price of ¥31,750 including tax and excluding service charge.

### Impact

- The website and customer-facing docs now reflect the higher Day 4 dinner reference budget.
- The active recommended TWD budget is now NT$276,260 for two travelers.
- The safety ceiling remains unchanged at NT$380,000.
