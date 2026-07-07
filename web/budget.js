(() => {
  const budgetData = {
    travelers: 2,
    hardLimitTwd: 280000,
    scenarios: {
      controlled: 212594,
      recommended: 217292,
      safety: 250000,
    },
    scheduled: {
      twd: 43399,
      usd: 250,
    },
    categories: [
      {
        key: "transport",
        label: "交通",
        description: "機票、接送與市區移動",
        open: true,
        items: [
          { label: "長榮 TPE ↔ KIX 兩人來回", amount: 36000 },
          { label: "KIX → InterContinental Osaka", amount: 2600 },
          { label: "InterContinental Osaka → KIX", amount: 2600 },
          { label: "InterContinental Osaka → USJ", amount: 1732 },
          { label: "USJ → InterContinental Osaka", amount: 1732 },
          { label: "Day 3 大阪市內地鐵／步行（西瓜卡）", amount: 3000 },
          { label: "Day 4 心齋橋 → 飯店地鐵（西瓜卡）", amount: 2000 },
          { label: "市區交通／地鐵與短程計程車備援", amount: 6000 },
        ],
      },
      {
        key: "lodging",
        label: "住宿",
        description: "兩張住宿單，合計四晚與行政酒廊節奏",
        note: "第二筆住宿在退房時更新金額，低價那晚視為免費後再計算；飯店回信表示 1 King Premium Club Lounge Access City View 通常升等為 1 King Junior Suite with club lounge access，同房型兩筆連住可盡量安排同房；12:00 提早入住可視房況加價保證；Ambassador 續約 USD 250 另以外幣獨立追蹤。",
        items: [
          { label: "Preferred Partner Rate 20% Off", amount: 49726.35, detail: "Jun 9 - Jun 11, 2027" },
          { label: "Ambassador Complimentary Weekend Night", amount: 34119.38, detail: "Jun 11 - Jun 13, 2027" },
        ],
      },
      {
        key: "shopping",
        label: "購物",
        description: "寶可夢、動漫與百貨小物",
        items: [
          { label: "寶可夢、動漫模型、日本橋周邊、百貨小物", amount: 10000 },
        ],
      },
      {
        key: "dining",
        label: "飲食",
        description: "千房、木津市場、壽司、NOKA",
        items: [
          { label: "Day 1 千房 梅田周邊店", amount: 4000 },
          { label: "Day 3 木津市場早午餐", amount: 8000 },
          { label: "Day 3 肉NOASATSU 壽司晚餐（KKday #268366）", amount: 3082 },
          { label: "Day 4 NOKA Roast & Grill", amount: 7700 },
          { label: "Day 5 飲料／午餐緩衝", amount: 5000 },
        ],
      },
      {
        key: "usj",
        label: "USJ",
        description: "票券、園區餐飲與購物",
        items: [
          { label: "USJ Express Pass 7", amount: 10000, detail: "以兩人計算後的區間值" },
          { label: "USJ Studio Pass", amount: 7108, detail: "以兩人計算後的區間值" },
          { label: "園區餐飲與購物", amount: 7892 },
        ],
      },
      {
        key: "other",
        label: "其他",
        description: "保險、漫遊與預備金",
        items: [
          { label: "旅遊保險", amount: 6900 },
          { label: "手機漫遊", amount: 499 },
          { label: "旅行用品、匯差與預備金", amount: 7601 },
        ],
      },
    ],
  };

  const elements = {
    budgetApp: document.getElementById("budget-app"),
    budgetTextNodes: document.querySelectorAll("[data-budget-text]"),
  };

  const twdFormatter = new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: 0,
  });

  const percentFormatter = new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  function formatTwd(amount) {
    const rounded = Math.round(amount);
    return `NT$${twdFormatter.format(rounded)}`;
  }

  function formatTwdExact(amount) {
    const hasFraction = Math.abs(amount - Math.round(amount)) > 0;
    if (!hasFraction) {
      return formatTwd(amount);
    }

    return `NT$${new Intl.NumberFormat("zh-TW", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)}`;
  }

  function formatPercent(amount, total) {
    if (!total) {
      return "0.0%";
    }

    return `${percentFormatter.format((amount / total) * 100)}%`;
  }

  function sum(items) {
    return items.reduce((total, item) => total + item.amount, 0);
  }

  function getCategoryTotal(category) {
    return sum(category.items);
  }

  const recommendedTotal = budgetData.categories.reduce((total, category) => total + getCategoryTotal(category), 0);
  const scheduledTotal = budgetData.scheduled.twd;

  function updateBudgetText() {
    const textMap = {
      "hero-recommended-total": `${formatTwd(recommendedTotal)} / ${budgetData.travelers}人`,
      "hero-recommended-note": `已排程固定支出 ${formatTwd(scheduledTotal)} + USD ${budgetData.scheduled.usd}；安全上限 ${formatTwd(budgetData.hardLimitTwd)}。`,
      "overview-recommended-total": `${formatTwd(recommendedTotal)} / ${budgetData.travelers}人`,
      "overview-recommended-note": `精品購物與 Ambassador 續約另計；已排程固定支出 ${formatTwd(scheduledTotal)} + USD ${budgetData.scheduled.usd}。`,
    };

    elements.budgetTextNodes.forEach((node) => {
      const key = node.getAttribute("data-budget-text");
      if (textMap[key]) {
        node.textContent = textMap[key];
      }
    });
  }

  function renderBudgetSection() {
    if (!elements.budgetApp) {
      return;
    }

    const stackedSegments = budgetData.categories
      .map((category) => {
        const total = getCategoryTotal(category);
        const share = (total / recommendedTotal) * 100;
        return `<span class="stacked-segment ${category.key}" style="--share: ${share.toFixed(1)}%"></span>`;
      })
      .join("");

    const legendItems = budgetData.categories
      .map((category) => {
        const total = getCategoryTotal(category);
        return `
          <div class="legend-item">
            <span class="legend-swatch ${category.key}"></span>
            <div>
              <strong>${category.label}</strong>
              <span>${formatTwd(total)} · ${formatPercent(total, recommendedTotal)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    const scenarioRows = Object.entries(budgetData.scenarios)
      .map(([key, value]) => {
        const labels = {
          controlled: "節制版",
          recommended: "建議版",
          safety: "安全版",
        };
        const rowClass = key;
        const width = (value / budgetData.hardLimitTwd) * 100;
        return `
          <div class="scenario-row">
            <div class="scenario-label">
              <span>${labels[key]}</span>
              <strong>${formatTwd(value)}</strong>
            </div>
            <div class="scenario-track">
              <span class="scenario-fill ${rowClass}" style="width: ${width.toFixed(1)}%"></span>
            </div>
          </div>
        `;
      })
      .join("");

    const treeNodes = budgetData.categories
      .map((category) => {
        const total = getCategoryTotal(category);
        const itemsHtml = category.items
          .map((item) => {
            const detailText = item.detail ? ` · ${item.detail}` : "";
            return `<li><span>${item.label}</span><strong>${formatTwdExact(item.amount)}${detailText}</strong></li>`;
          })
          .join("");

        return `
          <details class="tree-node"${category.open ? " open" : ""}>
            <summary>
              <div class="tree-summary-left">
                <span class="tree-badge ${category.key}">${category.label}</span>
                <div>
                  <strong>${category.label}</strong>
                  <p>${category.description}</p>
                </div>
              </div>
              <div class="tree-summary-right">
                <strong>${formatTwd(total)}</strong>
                <span>${formatPercent(total, recommendedTotal)}</span>
              </div>
            </summary>
            ${category.note ? `<p class="tree-note">${category.note}</p>` : ""}
            <ul class="tree-leaf-list">
              ${itemsHtml}
            </ul>
          </details>
        `;
      })
      .join("");

    elements.budgetApp.innerHTML = `
      <div class="budget-summaries">
        <article class="summary panel">
          <span>建議版主預算</span>
          <strong>${formatTwd(recommendedTotal)}</strong>
          <p>兩人基本旅費的主控值。</p>
        </article>
        <article class="summary panel">
          <span>安全上限</span>
          <strong>${formatTwd(budgetData.hardLimitTwd)}</strong>
          <p>若票券、餐廳或匯率提高，可用這個硬上限。</p>
        </article>
        <article class="summary panel">
          <span>已排程且已有確定金額</span>
          <strong>${formatTwd(scheduledTotal)} + USD ${budgetData.scheduled.usd}</strong>
          <p>目前已知的固定支出。</p>
        </article>
      </div>

      <div class="budget-visuals">
        <article class="budget-chart panel">
          <div class="chart-head">
            <div>
              <p class="chart-kicker">Budget mix</p>
              <h3>建議版主預算結構</h3>
            </div>
            <strong>${formatTwd(recommendedTotal)}</strong>
          </div>
          <div class="stacked-budget" role="img" aria-label="預算結構長條圖，依序呈現交通、住宿、購物、飲食、USJ、其他的比例">
            ${stackedSegments}
          </div>
          <div class="legend-grid">
            ${legendItems}
          </div>
        </article>

        <article class="budget-chart panel">
          <div class="chart-head">
            <div>
              <p class="chart-kicker">Budget range</p>
              <h3>主預算與安全上限比較</h3>
            </div>
            <strong>上限 ${formatTwd(budgetData.hardLimitTwd)}</strong>
          </div>
          <div class="scenario-bars" aria-label="節制版、建議版與安全版的預算比較">
            ${scenarioRows}
          </div>
          <p class="chart-note">已排程且已有確定金額的支出目前是 ${formatTwd(scheduledTotal)} + USD ${budgetData.scheduled.usd}；USD ${budgetData.scheduled.usd} 仍獨立追蹤，不直接併入 TWD 主預算。</p>
        </article>
      </div>

      <div class="budget-tree panel">
        <div class="tree-head">
          <div>
            <p class="chart-kicker">Budget tree</p>
            <h3>六大類預算樹狀清單</h3>
          </div>
          <strong>點開看細項</strong>
        </div>
        <p class="tree-note">USD 250 的 InterContinental Ambassador 續約先獨立追蹤，不併入 TWD 主預算總額。</p>
        <div class="tree-list">
          ${treeNodes}
        </div>
      </div>
    `;
  }

  updateBudgetText();
  renderBudgetSection();
})();
