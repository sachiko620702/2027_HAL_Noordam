---
title: 2027 大阪自由行
---

<style>
  :root {
    --bg: #08111f;
    --bg-soft: #0d1628;
    --panel: rgba(12, 18, 33, 0.82);
    --panel-strong: rgba(18, 27, 45, 0.94);
    --text: #f4f7fb;
    --muted: #a8b3c7;
    --line: rgba(170, 190, 224, 0.18);
    --accent: #8fb3ff;
    --accent-strong: #c9d9ff;
    --gold: #f2c97d;
    --shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }

  html {
    background:
      radial-gradient(circle at top left, rgba(143, 179, 255, 0.2), transparent 28%),
      radial-gradient(circle at top right, rgba(242, 201, 125, 0.14), transparent 24%),
      linear-gradient(180deg, #040813 0%, #08111f 42%, #0c1526 100%);
  }

  body {
    margin: 0;
    color: var(--text);
    font-family: "Noto Sans TC", "PingFang TC", "Hiragino Sans", "Microsoft JhengHei", system-ui, sans-serif;
  }

  .page-shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 48px 24px 72px;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.85fr);
    gap: 24px;
    align-items: stretch;
  }

  .panel {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 28px;
    background: linear-gradient(180deg, rgba(18, 27, 45, 0.94), rgba(10, 16, 28, 0.9));
    box-shadow: var(--shadow);
    backdrop-filter: blur(18px);
  }

  .hero-copy {
    padding: 34px;
  }

  .kicker {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 18px;
    color: var(--accent-strong);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .kicker::before {
    content: "";
    width: 36px;
    height: 1px;
    background: linear-gradient(90deg, var(--gold), transparent);
  }

  h1 {
    margin: 0;
    font-size: clamp(2.8rem, 6vw, 5rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
  }

  .lead {
    margin: 18px 0 0;
    max-width: 62ch;
    color: var(--muted);
    font-size: 1.04rem;
    line-height: 1.8;
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.62rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    font-size: 0.9rem;
  }

  .badge strong {
    color: var(--accent-strong);
    font-weight: 700;
  }

  .side-panel {
    display: grid;
    gap: 12px;
    padding: 18px;
  }

  .mini-card {
    border-radius: 22px;
    padding: 18px 18px 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
  }

  .mini-card .label {
    color: var(--muted);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
  }

  .mini-card .value {
    margin-top: 8px;
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .section {
    margin-top: 26px;
  }

  .section h2 {
    margin: 0 0 14px;
    font-size: 1.12rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-strong);
  }

  .grid {
    display: grid;
    gap: 14px;
  }

  .grid.features {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  .grid.metrics {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }

  .feature-card,
  .stat-card,
  .journey-card,
  .watch-group {
    border-radius: 22px;
    padding: 18px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.04);
  }

  .feature-card h3,
  .journey-card strong,
  .stat-card strong,
  .watch-group h3 {
    margin: 0;
    color: var(--text);
  }

  .feature-card h3 {
    font-size: 1rem;
  }

  .feature-card p,
  .journey-card p,
  .stat-card span,
  .watch-group li {
    margin: 8px 0 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .journey-card span {
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;
    color: var(--gold);
    font-size: 0.8rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .watch-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .watch-group ul {
    margin: 10px 0 0;
    padding-left: 1.1rem;
  }

  .stat-card strong {
    display: block;
    margin-top: 10px;
    font-size: clamp(1.7rem, 4vw, 2.4rem);
    letter-spacing: -0.04em;
  }

  .link-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  .link-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 18px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
    color: var(--text);
    text-decoration: none;
  }

  .link-card:hover {
    border-color: rgba(143, 179, 255, 0.55);
    transform: translateY(-1px);
  }

  .link-card span {
    color: var(--muted);
    font-size: 0.84rem;
  }

  .note {
    margin-top: 18px;
    padding: 18px 20px;
    border-left: 4px solid var(--gold);
    border-radius: 18px;
    background: rgba(242, 201, 125, 0.08);
    color: var(--text);
    line-height: 1.8;
  }

  @media (max-width: 860px) {
    .hero {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="page-shell">
  <section class="hero">
    <div class="panel hero-copy">
      <div class="kicker">Osaka trip knowledge base</div>
      <h1>2027 大阪自由行<br>V5.7.0</h1>
      <p class="lead">
        這是專案的 GitHub Pages 首頁。每日維護腳本會同步資料庫、規則與狀態，
        再把結果輸出成完整網站入口，讓這份旅程計畫可以直接在瀏覽器閱讀。
      </p>

      <div class="badge-row">
        <div class="badge"><strong>Dates</strong> 2027/11/17（三）～2027/11/21（日）</div>
        <div class="badge"><strong>Stay</strong> InterContinental Osaka</div>
        <div class="badge"><strong>Style</strong> Luxury Slow Travel</div>
      </div>
    </div>

    <div class="panel side-panel">
      <div class="mini-card">
        <div class="label">Last sync</div>
        <div class="value">2026-07-06T12:01:35+08:00</div>
      </div>
      <div class="mini-card">
        <div class="label">Trip focus</div>
        <div class="value">USJ one day, non-Michelin dining, luxury shopping</div>
      </div>
      <div class="mini-card">
        <div class="label">Maintenance</div>
        <div class="value">Daily commit and push keep GitHub Pages in sync with the source database.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2>Travel rhythm</h2>
    <div class="grid features">
      <article class="journey-card">
          <span>Day 1</span>
          <strong>Arrival and check-in</strong>
          <p>Settle into InterContinental Osaka and ease into the trip.</p>
        </article>
<article class="journey-card">
          <span>Day 2</span>
          <strong>USJ one day</strong>
          <p>Dedicate one full day to Universal Studios Japan.</p>
        </article>
<article class="journey-card">
          <span>Day 3</span>
          <strong>Osaka city rhythm</strong>
          <p>Keep the pace light with flexible city exploration and dining.</p>
        </article>
<article class="journey-card">
          <span>Day 4</span>
          <strong>Luxury shopping</strong>
          <p>Focus on premium shopping, department stores, and polished downtime.</p>
        </article>
<article class="journey-card">
          <span>Day 5</span>
          <strong>Departure</strong>
          <p>Wrap the plan cleanly and keep the exit day unhurried.</p>
        </article>
    </div>
  </section>

  <section class="section">
    <h2>Project frame</h2>
    <div class="grid features">
      <article class="focus-card">
          <h3>Travel frame</h3>
          <p>2027/11/17（三）～2027/11/21（日）</p>
        </article>
<article class="focus-card">
          <h3>Stay</h3>
          <p>InterContinental Osaka</p>
        </article>
<article class="focus-card">
          <h3>Style</h3>
          <p>Luxury Slow Travel</p>
        </article>
<article class="focus-card">
          <h3>Priority</h3>
          <p>USJ one day, non-Michelin dining, and luxury shopping</p>
        </article>
    </div>
  </section>

  <section class="section">
    <h2>Daily pulse</h2>
    <div class="grid metrics">
      <article class="stat-card">
          <span>Web checks</span>
          <strong>9</strong>
        </article>
<article class="stat-card">
          <span>Open</span>
          <strong>4</strong>
        </article>
<article class="stat-card">
          <span>Fetch failed</span>
          <strong>4</strong>
        </article>
<article class="stat-card">
          <span>Manual review</span>
          <strong>24</strong>
        </article>
    </div>
  </section>

  <section class="section">
    <h2>Quick access</h2>
    <div class="link-grid">
      <a class="link-card" href="docs/09_票券平台/KKday_Klook_候補方案.md">
        <div>
          <strong>票券平台候補方案</strong><br>
          <span>KKday / Klook candidate planning</span>
        </div>
        <span>Open</span>
      </a>
      <a class="link-card" href="docs/13_版本與更新/2026-07-06_V5.7.0_Travel_Website.md">
        <div>
          <strong>版本更新</strong><br>
          <span>GitHub Pages root homepage sync</span>
        </div>
        <span>Open</span>
      </a>
      <a class="link-card" href="docs/14_自動同步狀態/每日同步狀態.md">
        <div>
          <strong>每日同步狀態</strong><br>
          <span>Latest monitoring snapshot</span>
        </div>
        <span>Open</span>
      </a>
      <a class="link-card" href="/README.md">
        <div>
          <strong>README</strong><br>
          <span>Repository guide and workflow</span>
        </div>
        <span>Open</span>
      </a>
      <a class="link-card" href="/WATCHLIST.md">
        <div>
          <strong>WATCHLIST</strong><br>
          <span>Tracking sources and reminders</span>
        </div>
        <span>Open</span>
      </a>
      <a class="link-card" href="/PROJECT_RULE.md">
        <div>
          <strong>PROJECT_RULE</strong><br>
          <span>Canonical maintenance rules</span>
        </div>
        <span>Open</span>
      </a>
    </div>
  </section>

  <section class="section">
    <h2>Watchlist</h2>
    <div class="watch-grid">
      <article class="watch-group">
          <h3>USJ</h3>
          <ul>
            <li>2027 Studio Pass release</li><li>2027 Express Pass release</li><li>Timed entry rules</li><li>Seasonal events</li>
          </ul>
        </article>
<article class="watch-group">
          <h3>Hotel and flights</h3>
          <ul>
            <li>InterContinental Osaka rates</li><li>Lounge and breakfast policy</li><li>TPE to KIX schedule</li><li>EVA Air pricing</li>
          </ul>
        </article>
<article class="watch-group">
          <h3>Dining and shopping</h3>
          <ul>
            <li>Non-Michelin Osaka candidates</li><li>Booking windows and cancellation rules</li><li>Luxury boutique appointment policy</li><li>Seasonal sale dates</li>
          </ul>
        </article>
    </div>
  </section>

  <div class="note">
    每日排程會先同步資料庫與規則文件，再輸出這個首頁與每日狀態頁，最後如有變更就 commit 並 push。
  </div>
</div>
