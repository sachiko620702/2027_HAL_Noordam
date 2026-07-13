(() => {
  // Modified: budget data now follows the confirmed USJ meal scope and separate Studio Pass rule.
  const budgetData = {
    travelers: 2,
    hardLimitTwd: 280000,
    scenarios: {
      controlled: 237372,
      recommended: 242070,
      safety: 280000,
    },
    scheduled: {
      twd: 105199,
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
          { label: "KIX → InterContinental Osaka（Hello Kitty HARUKA）", amount: 800, detail: "" },
          { label: "InterContinental Osaka → KIX（KKday #129909）", amount: 2600 },
          { label: "InterContinental Osaka → USJ（大阪環狀線 + JR 夢咲線）", amount: 80, detail: "" },
          { label: "USJ → InterContinental Osaka（包車）", amount: 1800, detail: "" },
          { label: "Day 3 大阪市內地鐵／步行（西瓜卡）", amount: 2000 },
          { label: "Day 4 心齋橋 → 飯店地鐵（西瓜卡）", amount: 2000 },
          { label: "市區交通／地鐵與短程計程車備援", amount: 3000 },
        ],
      },
      {
        key: "lodging",
        label: "住宿",
        description: "兩張住宿單，合計四晚與行政酒廊節奏",
        note: "住宿採兩筆連住安排，飯店回覆顯示可依房況盡量安排同房；預計房型為 1 King Premium Club Lounge Access，通常可升等為 1 King Junior Suite with club lounge access。若希望 12:00 提早入住，可再依當日房況確認。",
        items: [
          { label: "Preferred Partner Rate 20% Off", amount: 37400, detail: "Jun 9 - Jun 11, 2027" },
          { label: "Complimentary Weekend Night", amount: 28500, detail: "Jun 11 - Jun 13, 2027" },
        ],
      },
      {
        key: "shopping",
        label: "購物",
        description: "USJ 周邊、寶可夢、動漫與百貨小物",
        note: "USJ 周邊購物與普通 Pokémon、動漫、模型、日本橋周邊、百貨小物合併；不含精品包、珠寶、手錶。",
        items: [
          { label: "USJ 周邊購物 + 寶可夢、動漫模型、日本橋周邊、百貨小物", amount: 14000 },
        ],
      },
      {
        key: "dining",
        label: "飲食",
        description: "千房、木津市場、壽司、NOKA",
        note: "Day 2 USJ VIP 5 小時包含 1 餐，預訂時選定午餐或晚餐，並於 VIP 專屬湖景餐廳 Luminant 用餐；Studio Pass 確認需另外購買。",
        items: [
          { label: "Day 1 千房 梅田周邊店", amount: 4000 },
          { label: "Day 3 木津市場早午餐", amount: 8000 },
          { label: "Day 3 肉NOASATSU 壽司晚餐", amount: 3082 },
          { label: "Day 4 NOKA Roast & Grill", amount: 7700 },
          { label: "Day 5 飲料／午餐緩衝", amount: 5000 },
        ],
      },
      {
        key: "usj",
        label: "USJ",
        description: "VIP 5 小時與 Studio Pass",
        items: [
          { label: "USJ VIP 5 小時", amount: 60000, detail: "包含 1 餐；預訂時選定午餐或晚餐，Luminant 用餐" },
          { label: "USJ Studio Pass", amount: 7108, detail: "兩人暫估；確認需另外購買" },
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
    countdownNodes: document.querySelectorAll("[data-countdown-days]"),
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
      "hero-recommended-note": `固定支出 ${formatTwd(scheduledTotal)} 已先整理好；高單價項目也先納入規劃，整體節奏會更從容。`,
      "overview-recommended-total": `${formatTwd(recommendedTotal)} / ${budgetData.travelers}人`,
      "overview-recommended-note": `精品購物不含在基本旅費內；USJ VIP 5 小時含 Luminant 1 餐、Studio Pass 確認需另外購買，Hello Kitty HARUKA 到飯店、USJ 回程包車與大阪環狀線 + JR 夢咲線都已列入總預算。`,
    };

    elements.budgetTextNodes.forEach((node) => {
      const key = node.getAttribute("data-budget-text");
      if (textMap[key]) {
        node.textContent = textMap[key];
      }
    });
  }

  function updateCountdown() {
    if (!elements.countdownNodes.length) {
      return;
    }

    const tripStart = new Date("2027-11-17T00:00:00+08:00");
    const now = new Date();
    const dayMs = 24 * 60 * 60 * 1000;
    const daysUntilTrip = Math.max(0, Math.ceil((tripStart.getTime() - now.getTime()) / dayMs));

    elements.countdownNodes.forEach((node) => {
      node.textContent = `距出發 ${daysUntilTrip} 天`;
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
        const width = Math.min((value / budgetData.hardLimitTwd) * 100, 100);
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
          <span>建議總預算</span>
          <strong>${formatTwd(recommendedTotal)}</strong>
          <p>這是兩位旅客的建議總額，已涵蓋主要交通、住宿、餐飲、USJ 與購物預算。</p>
        </article>
        <article class="summary panel">
          <span>預算上限</span>
          <strong>${formatTwd(budgetData.hardLimitTwd)}</strong>
          <p>目前以這個金額作為保守上限，仍保留約 ${formatTwd(budgetData.hardLimitTwd - recommendedTotal)} 的彈性。</p>
        </article>
        <article class="summary panel">
          <span>已確認支出</span>
          <strong>${formatTwd(scheduledTotal)}</strong>
          <p>目前已確認的金額包含機票、USJ VIP 5 小時、保險與漫遊。</p>
        </article>
      </div>

      <div class="budget-visuals">
        <article class="budget-chart panel">
          <div class="chart-head">
            <div>
              <p class="chart-kicker">預算比例</p>
              <h3>把花費分段看，整體規劃也會更清楚</h3>
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
              <p class="chart-kicker">預算區間</p>
              <h3>主預算與安全上限的距離</h3>
            </div>
            <strong>上限 ${formatTwd(budgetData.hardLimitTwd)}</strong>
          </div>
          <div class="scenario-bars" aria-label="節制版、建議版與安全版的預算比較">
            ${scenarioRows}
          </div>
          <p class="chart-note">目前整體預算仍保留約 ${formatTwd(budgetData.hardLimitTwd - recommendedTotal)} 的彈性空間；若 USJ VIP、Studio Pass 或正式售價更新，總額也會同步調整。</p>
        </article>
      </div>

      <div class="budget-tree panel">
        <div class="tree-head">
          <div>
            <p class="chart-kicker">預算明細</p>
            <h3>六大類花費，對應整趟旅程的不同段落</h3>
          </div>
          <strong>點開看細項</strong>
        </div>
        <!-- Modified: USJ budget tree now reflects Luminant meal scope and separate Studio Pass -->
        <p class="tree-note">USJ VIP 5 小時包含 1 餐並於 Luminant 用餐；Studio Pass 確認需另外購買。</p>
        <div class="tree-list">
          ${treeNodes}
        </div>
      </div>
    `;
  }

  updateBudgetText();
  updateCountdown();
  renderBudgetSection();
})();
