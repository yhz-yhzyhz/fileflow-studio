const taskDefinitions = {
  tidy: {
    label: "文件批量整理",
    price: 299,
    short: "批量改名、合并、拆分与归档"
  },
  extract: {
    label: "PDF / 发票字段提取",
    price: 699,
    short: "提取字段并汇总到一个 Excel"
  },
  report: {
    label: "Excel 合并与自动报表",
    price: 999,
    short: "合并多表、清洗数据并生成图表"
  },
  custom: {
    label: "定制工作流",
    price: 1499,
    short: "把多个重复步骤串成一个工具"
  }
};

const demoData = {
  invoice: {
    title: "发票字段提取",
    file: "发票汇总_2026Q3.xlsx",
    status: "112 rows ready",
    sourceLabel: "INPUT / 112 PDF",
    resultLabel: "OUTPUT / EXCEL",
    files: [
      ["2026-09_采购发票.pdf", "OK"],
      ["供应商A_发票_0924.pdf", "OK"],
      ["扫描件_0091.pdf", "OK"],
      ["... 还有 109 份", "QUEUE"]
    ],
    result: `
      <div class="demo-table" role="table" aria-label="发票提取结果示例">
        <div class="demo-table-row"><span>日期</span><span>供应商</span><span>金额</span><span>状态</span></div>
        <div class="demo-table-row"><span>09-24</span><span>瑞成包装</span><span>¥2,480</span><span class="demo-check">已校验</span></div>
        <div class="demo-table-row"><span>09-25</span><span>东岸物流</span><span>¥860</span><span class="demo-check">已校验</span></div>
        <div class="demo-table-row"><span>09-26</span><span>林记办公</span><span>¥1,120</span><span>待确认</span></div>
        <div class="demo-table-row"><span>09-27</span><span>新河印务</span><span>¥3,760</span><span class="demo-check">已校验</span></div>
      </div>
      <div class="demo-result-foot"><span>异常 1 条，已写入 error_log</span><span>耗时 00:18</span></div>
    `
  },
  report: {
    title: "12 个月销售表合并",
    file: "2026_销售月报.xlsx",
    status: "12 worksheets merged",
    sourceLabel: "INPUT / 12 XLSX",
    resultLabel: "OUTPUT / DASHBOARD",
    files: [
      ["01月_销售明细.xlsx", "OK"],
      ["02月_销售明细.xlsx", "OK"],
      ["03月_销售明细.xlsx", "OK"],
      ["... 还有 9 份", "QUEUE"]
    ],
    result: `
      <div class="metric-grid">
        <div class="metric"><span>全年销售</span><strong>¥1.84M</strong></div>
        <div class="metric"><span>环比增长</span><strong>+18.6%</strong></div>
        <div class="metric"><span>异常订单</span><strong>7</strong></div>
      </div>
      <div class="bar-chart" aria-label="月度趋势图">
        <div class="bar-group"><i class="bar" style="height:34%"></i><i class="bar bar-alt" style="height:27%"></i></div>
        <div class="bar-group"><i class="bar" style="height:44%"></i><i class="bar bar-alt" style="height:36%"></i></div>
        <div class="bar-group"><i class="bar" style="height:56%"></i><i class="bar bar-alt" style="height:45%"></i></div>
        <div class="bar-group"><i class="bar" style="height:49%"></i><i class="bar bar-alt" style="height:51%"></i></div>
        <div class="bar-group"><i class="bar" style="height:67%"></i><i class="bar bar-alt" style="height:59%"></i></div>
        <div class="bar-group"><i class="bar" style="height:74%"></i><i class="bar bar-alt" style="height:63%"></i></div>
        <div class="bar-group"><i class="bar" style="height:84%"></i><i class="bar bar-alt" style="height:72%"></i></div>
        <div class="bar-group"><i class="bar" style="height:76%"></i><i class="bar bar-alt" style="height:78%"></i></div>
        <div class="bar-group"><i class="bar" style="height:92%"></i><i class="bar bar-alt" style="height:82%"></i></div>
      </div>
      <div class="bar-labels"><span>1月</span><span>3月</span><span>5月</span><span>7月</span><span>9月</span></div>
      <div class="demo-result-foot"><span>已按产品、区域、月份汇总</span><span>3 charts</span></div>
    `
  },
  archive: {
    title: "文件标准化与归档",
    file: "文件索引.xlsx + archive.pdf",
    status: "328 files organized",
    sourceLabel: "INPUT / 328 FILES",
    resultLabel: "OUTPUT / INDEX + PDF",
    files: [
      ["IMG_2041_scan.pdf", "RENAME"],
      ["新建文件夹 (3).zip", "UNPACK"],
      ["final_final_v3.pdf", "RENAME"],
      ["... 还有 325 个", "QUEUE"]
    ],
    result: `
      <div class="archive-map" aria-label="文件重命名示例">
        <div class="archive-row"><span>IMG_2041_scan.pdf</span><svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg><span>2026-09-24_瑞成_发票.pdf</span></div>
        <div class="archive-row"><span>final_final_v3.pdf</span><svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg><span>2026-09-26_林记_合同.pdf</span></div>
        <div class="archive-row"><span>新建文件 (7).pdf</span><svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg><span>2026-09-27_新河_报价.pdf</span></div>
      </div>
      <div class="demo-table" style="margin-top: 12px;" role="table" aria-label="文件索引示例">
        <div class="demo-table-row"><span>文件名</span><span>类别</span><span>日期</span><span>状态</span></div>
        <div class="demo-table-row"><span>瑞成_发票.pdf</span><span>发票</span><span>09-24</span><span class="demo-check">已归档</span></div>
        <div class="demo-table-row"><span>林记_合同.pdf</span><span>合同</span><span>09-26</span><span class="demo-check">已归档</span></div>
      </div>
      <div class="demo-result-foot"><span>原文件保留在 _backup</span><span>328 rows</span></div>
    `
  }
};

const state = {
  task: "extract",
  count: 50,
  extras: {
    ocr: false,
    gui: false,
    monthly: false,
    rush: false
  }
};

const elements = {
  fileCount: document.querySelector("#file-count"),
  fileCountOutput: document.querySelector("#file-count-output"),
  quotePrice: document.querySelector("#quote-price"),
  quoteBreakdown: document.querySelector("#quote-breakdown"),
  dialog: document.querySelector("#inquiry-dialog"),
  inquiryForm: document.querySelector("#inquiry-form"),
  briefResult: document.querySelector("#brief-result"),
  briefOutput: document.querySelector("#brief-output"),
  inquiryTask: document.querySelector("#inquiry-task"),
  inquiryVolume: document.querySelector("#inquiry-volume"),
  toast: document.querySelector("#toast"),
  demoPanel: document.querySelector("#demo-panel")
};

function roundTo(value, unit = 1) {
  return Math.round(value / unit) * unit;
}

function formatMoney(value) {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 }).format(value);
}

function getVolumeMultiplier(count) {
  if (count <= 50) return 1;
  if (count <= 200) return 1.15;
  if (count <= 500) return 1.35;
  return 1.5;
}

function calculateQuote() {
  const task = taskDefinitions[state.task];
  const volumeMultiplier = getVolumeMultiplier(state.count);
  const extras =
    (state.extras.ocr ? 300 : 0) +
    (state.extras.gui ? 200 : 0) +
    (state.extras.monthly ? 300 : 0);
  const rushMultiplier = state.extras.rush ? 1.3 : 1;
  const price = roundTo((task.price * volumeMultiplier + extras) * rushMultiplier);
  return { task, volumeMultiplier, extras, rushMultiplier, price };
}

function updateQuote() {
  const quote = calculateQuote();
  const percent = ((state.count - 10) / (600 - 10)) * 100;
  elements.fileCount.style.setProperty("--range-progress", `${percent}%`);
  elements.fileCountOutput.textContent = `${state.count} 份`;
  elements.quotePrice.textContent = formatMoney(quote.price);

  const lines = [
    ["基础项目", `${quote.task.label} / ¥${formatMoney(quote.task.price)}`],
    ["数量系数", `× ${quote.volumeMultiplier.toFixed(2)}`],
    ["附加项", quote.extras ? `+ ¥${formatMoney(quote.extras)}` : "无"],
    ["加急系数", quote.rushMultiplier > 1 ? "× 1.30" : "无"],
    ["标准报价", `¥${formatMoney(quote.price)}`]
  ];

  elements.quoteBreakdown.innerHTML = lines
    .map(([label, value]) => `<div class="quote-line"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function setTask(task, shouldScroll = false) {
  if (!taskDefinitions[task]) return;
  state.task = task;
  document.querySelectorAll("[data-task]").forEach((button) => {
    if (button.classList.contains("task-picker") || button.closest(".task-picker")) {
      button.classList.toggle("is-selected", button.dataset.task === task);
    }
  });
  elements.inquiryTask.value = task;
  updateQuote();
  if (shouldScroll) {
    document.querySelector("#estimate").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderDemo(key) {
  const data = demoData[key];
  if (!data) return;

  elements.demoPanel.innerHTML = `
    <div class="demo-panel-inner">
      <div class="demo-panel-head">
        <div><span>${data.title.toUpperCase()}</span><strong>${data.file}</strong></div>
        <span class="demo-status">${data.status}</span>
      </div>
      <div class="demo-workspace">
        <div class="demo-source">
          <div class="demo-mini-label"><span>${data.sourceLabel}</span><span>LOCAL</span></div>
          <div class="demo-file-list">
            ${data.files
              .map(
                ([name, status]) => `
                  <div class="demo-file">
                    <svg class="icon" aria-hidden="true"><use href="#i-file-text"></use></svg>
                    <span>${name}</span>
                    <b>${status}</b>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="demo-result">
          <div class="demo-mini-label"><span>${data.resultLabel}</span><span>READY</span></div>
          ${data.result}
        </div>
      </div>
    </div>
  `;
}

function openInquiry(task = state.task) {
  setTask(task);
  elements.inquiryTask.value = task;
  elements.inquiryVolume.value = state.count;
  elements.inquiryForm.hidden = false;
  elements.briefResult.hidden = true;
  if (!elements.dialog.open) {
    elements.dialog.showModal();
  }
  window.setTimeout(() => {
    document.querySelector("#inquiry-name").focus();
  }, 80);
}

function closeInquiry() {
  if (elements.dialog.open) {
    elements.dialog.close();
  }
}

function buildBrief() {
  const formData = new FormData(elements.inquiryForm);
  const task = taskDefinitions[formData.get("task")] || taskDefinitions.extract;
  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("contact") || "").trim();
  const volume = String(formData.get("volume") || state.count);
  const input = String(formData.get("input") || "待确认").trim() || "待确认";
  const output = String(formData.get("output") || "待确认").trim() || "待确认";
  const notes = String(formData.get("notes") || "无").trim() || "无";
  const quote = calculateQuote();
  const deposit = Math.round(quote.price * 0.5);
  const balance = quote.price - deposit;
  const extras = [
    state.extras.ocr ? "扫描件 / 图片识别" : "",
    state.extras.gui ? "简易操作界面" : "",
    state.extras.monthly ? "月度重复报表" : "",
    state.extras.rush ? "48 小时加急" : ""
  ].filter(Boolean);
  const expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("zh-CN");

  return [
    "【序流自动化 · 项目报价单】",
    "",
    `称呼：${name}`,
    `联系方式：${contact}`,
    `项目类型：${task.label}`,
    `预计文件数量：${volume} 份`,
    `输入格式：${input}`,
    `期望输出：${output}`,
    `补充说明：${notes}`,
    `附加范围：${extras.length ? extras.join("、") : "无"}`,
    "",
    `标准项目报价：¥${formatMoney(quote.price)}`,
    `定金（50%）：¥${formatMoney(deposit)}`,
    `尾款（50%）：¥${formatMoney(balance)}`,
    `报价有效期：7 天（至 ${expiry}）`,
    "",
    "报价条件：",
    "1. 样本与上述描述一致时，按此报价执行；",
    "2. 新增文件格式、字段、界面或异常规则，双方书面确认后补差；",
    "3. 报价包含 1 次范围内容修改与 7 天问题修复；",
    "4. 样本确认后支付 50% 定金，验收后支付尾款。"
  ].join("\n");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2400);
}

function copyWechat() {
  fallbackCopy("yhzyhz2007");
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  try {
    textarea.select();
    document.execCommand("copy");
  } catch {
    // The visible ID remains selectable when the browser blocks clipboard access.
  } finally {
    textarea.remove();
    showToast("微信号已复制");
  }
}

async function copyBrief() {
  const text = elements.briefOutput.value;
  try {
    await navigator.clipboard.writeText(text);
    showToast("报价单已复制");
  } catch {
    elements.briefOutput.select();
    document.execCommand("copy");
    showToast("报价单已复制");
  }
}

function downloadBrief() {
  const text = elements.briefOutput.value;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "序流自动化_项目报价单.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("报价单已下载");
}

document.querySelectorAll("[data-task]").forEach((button) => {
  button.addEventListener("click", () => {
    const inCalculator = button.closest(".task-picker");
    const isServiceAction = button.classList.contains("text-button");
    setTask(button.dataset.task, isServiceAction);
    if (inCalculator) updateQuote();
  });
});

document.querySelectorAll("[data-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-demo]").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab === button));
    });
    renderDemo(button.dataset.demo);
  });
});

document.querySelectorAll("[data-open-inquiry]").forEach((button) => {
  button.addEventListener("click", () => openInquiry(state.task));
});

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => openInquiry(button.dataset.plan));
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", closeInquiry);
});

document.querySelectorAll("[data-copy-wechat]").forEach((button) => {
  button.addEventListener("click", copyWechat);
});

elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) closeInquiry();
});

elements.fileCount.addEventListener("input", (event) => {
  state.count = Number(event.target.value);
  updateQuote();
});

[
  ["option-ocr", "ocr"],
  ["option-gui", "gui"],
  ["option-monthly", "monthly"],
  ["option-rush", "rush"]
].forEach(([id, key]) => {
  document.querySelector(`#${id}`).addEventListener("change", (event) => {
    state.extras[key] = event.target.checked;
    updateQuote();
  });
});

elements.inquiryTask.addEventListener("change", (event) => {
  setTask(event.target.value);
});

function syncInquiryVolume(event) {
  const value = Math.max(1, Math.min(10000, Number(event.target.value) || 1));
  event.target.value = value;
  state.count = value;
  elements.fileCount.value = Math.min(600, value);
  updateQuote();
}

elements.inquiryVolume.addEventListener("input", syncInquiryVolume);
elements.inquiryVolume.addEventListener("change", syncInquiryVolume);

elements.inquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  elements.briefOutput.value = buildBrief();
  elements.inquiryForm.hidden = true;
  elements.briefResult.hidden = false;
  elements.briefOutput.focus();
});

document.querySelector("#edit-brief").addEventListener("click", () => {
  elements.briefResult.hidden = true;
  elements.inquiryForm.hidden = false;
  document.querySelector("#inquiry-name").focus();
});

document.querySelector("#copy-brief").addEventListener("click", copyBrief);
document.querySelector("#download-brief").addEventListener("click", downloadBrief);

const header = document.querySelector(".site-header");
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

renderDemo("invoice");
updateQuote();
