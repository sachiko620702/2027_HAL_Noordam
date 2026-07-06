# Project Rule

This repository is the source of truth for the 2027 Osaka travel project.

Do not change these without an explicit user request:

- 2027-11-17 to 2027-11-21
- Five days and four nights
- InterContinental Osaka
- Luxury Slow Travel
- One USJ day
- Taste-first dining; Michelin status neutral
- Luxury shopping

Current user-confirmed planning inputs:

- Travel insurance budget amount: TWD 6,900; payment status needs confirmation.
- Internet: phone roaming for two people, total TWD 499; eSIM / SIM / Pocket Wi-Fi are backup only.
- Airport transfer: use KKday private charter both ways between KIX and InterContinental Osaka.
- Dining: restaurants should be selected because they are good. Michelin status does not matter either way and should not be used as the main planning label.

Before adding content, check existing docs, database files, and changelog.

When content already exists, update or merge it instead of creating a duplicate.

If daily maintenance changes anything, regenerate GitHub Pages outputs before commit and push:

- root `index.md`
- `docs/index.md`
- `docs/14_自動同步狀態/每日同步狀態.md`

Use official sources first. When information is uncertain, mark it as NEEDS_RECONFIRMATION. When 2027 official information is not published yet, mark it as PENDING_OFFICIAL_ANNOUNCEMENT.

Every major update must update CHANGELOG and the version document.
