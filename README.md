# 2027 大阪自由行 V5.7.0

本 repository 是 2027 大阪自由行專案的唯一主資料源，供 ChatGPT 與 Codex 共同維護。

## 專案定位

- 旅行期間：2027/11/17（三）～2027/11/21（日）
- 旅遊型態：五天四夜大阪自由行
- 住宿：InterContinental Osaka
- 核心定位：Luxury Slow Travel
- 固定重點：USJ 一天、非米其林導向餐飲、精品購物、候補景點與候補美食資料庫

## 維護原則

1. `main` 分支是唯一主檔，不再以 ZIP 或單一 Markdown 作為主資料。
2. 新資訊先整理到 `database/`，再同步更新 `docs/`。
3. 不覆蓋既有決策；若需修正，必須保留歷史脈絡並寫入 `CHANGELOG.md`。
4. 2027 官方尚未公布的價格、時間、活動、票券，統一標示【待官方公布】或【需再次確認】。
5. ChatGPT 負責判斷、策略、取捨與專案整合；Codex 負責批次整理、格式化、去重與一致性檢查。

## 目錄結構

```text
2027_OSAKA/
├── README.md
├── AGENTS.md
├── PROJECT_RULE.md
├── CHANGELOG.md
├── docs/
├── database/
├── templates/
└── assets/
```

## 常用流程

1. 新增 YouTube、餐廳、景點、USJ、交通或預算資訊。
2. 先搜尋 `docs/` 與 `database/` 是否已有相同內容。
3. 若已存在，進行合併、補充或修正。
4. 若不存在，新增資料卡。
5. 同步更新受影響章節與 `CHANGELOG.md`。

## 自動維護

每日排程可直接執行：

```bash
python3 scripts/daily_maintenance.py
```

預設會同步固定欄位、更新 `database/project.yaml` 的 `last_updated`、執行每日價格與開賣狀態檢查、同步輸出 GitHub Pages 網頁（根目錄 `index.md` 與 `docs/index.md`）、並在有變更時執行 `git commit` 和 `git push`。
