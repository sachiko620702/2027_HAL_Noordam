# 2027 大阪自由行 V5.51.0

本 repository 是 2027 大阪自由行專案的唯一主資料源，供 ChatGPT、Codex 與 Claude Code 共同維護。

## 專案定位

- 旅行期間：2027/11/17（三）～2027/11/21（日）
- 旅遊型態：五天四夜大阪自由行
- 住宿：InterContinental Osaka
- 核心定位：Luxury Slow Travel
- 固定重點：USJ 一天、好吃優先餐飲、精品購物、寶可夢／動漫、日本橋模型周邊、候補景點與候補美食資料庫

## 目前主控版本

- Version：V5.51.0 Repository Consistency Cleanup
- 主控資料源：GitHub main branch
- 更新目的：修正 V5.50.0 後殘留在主控文件、顧客版統計表與 DECISIONS 的舊預算／舊餐廳決策。
- 最新主預算：建議版 NT$199,346／兩人，節制版 NT$194,648／兩人，安全版 NT$250,000／兩人，硬上限 NT$280,000／兩人。
- Ambassador 續約 USD 250、精品包、珠寶、手錶另計。
- 住宿以低價那晚免費後的淨額 NT$65,900 估算，不把退房前臨時刷卡高峰值當成主預算。

## 目前已確認的新資訊

- 2026/11：買機票 EVA Air BR178／BR129，預算 TWD 36,000／兩人。
- 2026/12：續約洲際酒店大使 Ambassador，USD 250，先以外幣獨立追蹤，不硬轉 TWD。
- 2027/09/17：搶購 USJ Express Pass 7，價格與實際開賣日待官方公布。
- 2027/09/17：NOKA Roast & Grill 訂位，需確認套餐、主菜、90 分鐘暢飲、紀念日備註與特價菜單日不適用條件。
- 2027/10/10：買 KKday #129909 機場接送、KKday #536220 飯店 ↔ USJ 接送，以及 USJ Studio Pass；USJ 票券以兩人計算，最終票價仍需再次確認。
- 2027/11/05：買旅遊保險 TWD 6,900，申請漫遊 TWD 499。
- 航班：去程 EVA Air BR178，回程 EVA Air BR129。
- 航班時間規劃基準：依使用者指示先直接採用目前班表暫排，BR178 06:30 TPE → 10:10 KIX；BR129 18:30 KIX → 20:30 TPE。2027/11 官方班表、票價、機型、航廈、行李與訂位狀態仍需再次確認。
- Day 1 正式確認：抵達飯店後目標使用 InterContinental Osaka 行政酒廊下午茶；下午茶後先休息，再去梅田 Pokémon Center OSAKA；晚餐選千房梅田周邊店；晚餐後回飯店。
- Day 3 正式覆蓋：不去京都；木津市場早午餐 → 難波／日本橋動漫模型周邊採買 → 回 InterContinental Osaka 休息與行政酒廊下午茶 → 肉NOASATSU 壽司晚餐。
- Day 3 取代關係：京都版 Day 3、京 鰻和 本店、天ぷら 京星、京都甜點伴手禮路線降為備案／歷史版本。
- Day 4 正式確認：活動範圍以心齋橋為主，包含 Pokémon Center OSAKA DX；午餐後回 InterContinental Osaka；下午在飯店附近活動，保留 InterContinental Osaka 行政酒廊下午茶。
- Day 4 晚餐正式方向：NOKA Roast & Grill。PIERRE 與壽司皆保留為 fallback only，不是目前正式主方案。
- 飯店回信已確認：預計房型為 1 King Premium Club Lounge Access，通常可升等至 1 King Junior Suite with club lounge access；若兩筆連住為同房型，飯店會盡量安排同一間房；12:00 提早入住可視房況安排，若要保證可詢問付費方案。
- 早餐原則：平常早餐以飯店行政酒廊為主；Day 3 木津市場日例外，不吃飯店早餐，改吃木津市場早段輕食／早午餐。
- 餐飲方向：好吃優先，是否米其林不重要。
- 顧客版輸出：固定維護「行程表、行前提醒／TODO LIST、預算表」三表。

## Quick access

- [旅遊網站首頁](web/index.html)
- [顧客版旅遊規劃三表](docs/15_顧客版資料/旅遊規劃三表.md)
- [旅遊常用表格總覽](docs/15_顧客版資料/旅遊常用表格總覽.md)
- [預約與購買時間軸 V5.51.0](docs/03_預約購買/2027大阪自由行_預約購買時間軸_V5.26.0.md)
- [預約與購買時間軸資料庫](database/reservation_purchase_timeline.yml)
- [小時制時間表](docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.25.0.md)
- [Day 3 大阪市內壽司資料庫](database/day3_osaka_city_sushi_formal.yml)
- [預算模型](docs/06_預算/2027大阪自由行_預算模型_V5.26.0.md)
- [預算模型資料庫](database/budget_model.yml)
- [Day 4 NOKA Roast & Grill 資料庫](database/day4_shinsaibashi_hotel_dinner.yml)
- [每日同步狀態](docs/14_自動同步狀態/每日同步狀態.md)

## 維護原則

1. main 分支是唯一主檔。
2. 新資訊先整理到 database，再同步更新 docs。
3. 不覆蓋既有決策；重大修改需更新 CHANGELOG 與 `docs/13_版本與更新/`。
4. 2027 官方尚未公布的價格、時間、活動、票券，統一標示待官方公布或需再次確認。
5. 顧客版資料需維持簡潔、清楚；三表是正式對外版本，常用表格總覽作為工作版補充，不取代三表。
6. 對外網站頁面集中於 `web/`，根目錄與 `docs/` 首頁僅保留入口。
