const QUESTION_POOL = {
  code: [
    { id: "C1", prompt: "REVIEW TASK: Raise child age limit from 12 to 14; keep all other fares unchanged.", before: "def fare(age, student):\n  if age < 12: return 5\n  if student: return 8\n  return 10", after: "def fare(age, student):\n  if age < 14: return 5\n  if student: return 9\n  return 10", isCorrect: false },
    { id: "C2", prompt: "REVIEW TASK: Increase maximum retry attempts to 5.", before: "MAX_RETRIES = 3\nTIMEOUT = 30", after: "MAX_RETRIES = 5\nTIMEOUT = 30", isCorrect: true },
    { id: "C3", prompt: "REVIEW TASK: Change default port configuration to 8080.", before: "PORT = 80\nSSL_PORT = 443", after: "PORT = 8080\nSSL_PORT = 443", isCorrect: true },
    { id: "C4", prompt: "REVIEW TASK: Update discount threshold from 100 to 150; keep rate unchanged.", before: "def get_discount(total):\n  if total > 100: return 0.2\n  return 0.0", after: "def get_discount(total):\n  if total > 150: return 0.2\n  return 0.1", isCorrect: false },
    { id: "C5", prompt: "REVIEW TASK: Enable strict mode flag.", before: "DEBUG = True\nSTRICT_MODE = False", after: "DEBUG = True\nSTRICT_MODE = True", isCorrect: true },
    { id: "C6", prompt: "REVIEW TASK: Set maximum file upload size to 10MB.", before: "MAX_SIZE_MB = 5\nTIMEOUT_SEC = 60", after: "MAX_SIZE_MB = 10\nTIMEOUT_SEC = 60", isCorrect: true },
    { id: "C7", prompt: "REVIEW TASK: Update tax rate to 15% and keep exemption limit unchanged.", before: "TAX_RATE = 0.10\nEXEMPTION = 1000", after: "TAX_RATE = 0.15\nEXEMPTION = 1200", isCorrect: false },
    { id: "C8", prompt: "REVIEW TASK: Change session timeout duration to 45 minutes.", before: "SESSION_TIMEOUT = 30", after: "SESSION_TIMEOUT = 45", isCorrect: true },
    { id: "C9", prompt: "REVIEW TASK: Increase connection pool size to 20.", before: "POOL_SIZE = 10\nTIMEOUT = 5", after: "POOL_SIZE = 20\nTIMEOUT = 5", isCorrect: true },
    { id: "C10", prompt: "REVIEW TASK: Adjust minimum password length to 8 characters.", before: "MIN_LEN = 6\nREQUIRE_SPECIAL = True", after: "MIN_LEN = 8\nREQUIRE_SPECIAL = False", isCorrect: false },
    { id: "C11", prompt: "REVIEW TASK: Enable cache compression.", before: "CACHE_ENABLED = True\nCOMPRESS = False", after: "CACHE_ENABLED = True\nCOMPRESS = True", isCorrect: true },
    { id: "C12", prompt: "REVIEW TASK: Set default page size to 50 items.", before: "PAGE_SIZE = 25\nMAX_PAGE = 100", after: "PAGE_SIZE = 50\nMAX_PAGE = 100", isCorrect: true },
    { id: "C13", prompt: "REVIEW TASK: Update log level to WARNING.", before: "LOG_LEVEL = \"INFO\"\nRETENTION_DAYS = 7", after: "LOG_LEVEL = \"ERROR\"\nRETENTION_DAYS = 7", isCorrect: false },
    { id: "C14", prompt: "REVIEW TASK: Increase request rate limit to 100 per minute.", before: "RATE_LIMIT = 50", after: "RATE_LIMIT = 100", isCorrect: true },
    { id: "C15", prompt: "REVIEW TASK: Set worker thread count to 8.", before: "WORKERS = 4", after: "WORKERS = 8", isCorrect: true },
    { id: "C16", prompt: "REVIEW TASK: Modify timeout threshold to 15 seconds and enable keep-alive.", before: "TIMEOUT = 10\nKEEP_ALIVE = False", after: "TIMEOUT = 15\nKEEP_ALIVE = True", isCorrect: true },
    { id: "C17", prompt: "REVIEW TASK: Change default currency code to EUR.", before: "CURRENCY = \"USD\"", after: "CURRENCY = \"EUR\"", isCorrect: true },
    { id: "C18", prompt: "REVIEW TASK: Increase buffer size to 4096 bytes.", before: "BUFFER_SIZE = 1024", after: "BUFFER_SIZE = 4096", isCorrect: true },
    { id: "C19", prompt: "REVIEW TASK: Update maximum login attempts to 3.", before: "MAX_ATTEMPTS = 5\nLOCKOUT_MIN = 15", after: "MAX_ATTEMPTS = 3\nLOCKOUT_MIN = 30", isCorrect: false },
    { id: "C20", prompt: "REVIEW TASK: Enable SSL verification flag.", before: "VERIFY_SSL = False", after: "VERIFY_SSL = True", isCorrect: true }
  ],
  text: [
    { id: "T1", prompt: "REVIEW TASK: Raise child age limit from 12 to 14; keep all other fares unchanged.", before: "If visitor is under 12, fare is CHF 5.\nIf student, fare is CHF 8.\nOtherwise, fare is CHF 10.", after: "If visitor is under 14, fare is CHF 5.\nIf student, fare is CHF 9.\nOtherwise, fare is CHF 10.", isCorrect: false },
    { id: "T2", prompt: "REVIEW TASK: Increase maximum retry attempts to 5.", before: "Maximum retries allowed: 3.\nTimeout duration: 30 seconds.", after: "Maximum retries allowed: 5.\nTimeout duration: 30 seconds.", isCorrect: true },
    { id: "T3", prompt: "REVIEW TASK: Change default server port configuration to 8080.", before: "Server port: 80\nSecure port: 443", after: "Server port: 8080\nSecure port: 443", isCorrect: true },
    { id: "T4", prompt: "REVIEW TASK: Update discount threshold from 100 to 150; keep rate unchanged.", before: "Orders over 100 get 20% discount.\nOtherwise 0%.", after: "Orders over 150 get 20% discount.\nOtherwise 10%.", isCorrect: false },
    { id: "T5", prompt: "REVIEW TASK: Enable strict mode security flag.", before: "Debug logging: Active\nStrict mode: Disabled", after: "Debug logging: Active\nStrict mode: Enabled", isCorrect: true },
    { id: "T6", prompt: "REVIEW TASK: Set maximum file upload size to 10MB.", before: "Max upload size: 5MB\nTimeout: 60 seconds", after: "Max upload size: 10MB\nTimeout: 60 seconds", isCorrect: true },
    { id: "T7", prompt: "REVIEW TASK: Update tax rate to 15% and keep exemption limit unchanged.", before: "Tax rate: 10%\nExemption limit: 1000", after: "Tax rate: 15%\nExemption limit: 1200", isCorrect: false },
    { id: "T8", prompt: "REVIEW TASK: Change session timeout duration to 45 minutes.", before: "Session timeout: 30 minutes", after: "Session timeout: 45 minutes", isCorrect: true },
    { id: "T9", prompt: "REVIEW TASK: Increase database connection pool size to 20 connections.", before: "Pool size: 10 connections\nTimeout: 5s", after: "Pool size: 20 connections\nTimeout: 5s", isCorrect: true },
    { id: "T10", prompt: "REVIEW TASK: Adjust minimum password length to 8 characters.", before: "Minimum password length: 6.\nSpecial characters required: Yes.", after: "Minimum password length: 8.\nSpecial characters required: No.", isCorrect: false },
    { id: "T11", prompt: "REVIEW TASK: Enable cache compression.", before: "Cache status: Enabled\nCompression: Disabled", after: "Cache status: Enabled\nCompression: Enabled", isCorrect: true },
    { id: "T12", prompt: "REVIEW TASK: Set default page size to 50 items.", before: "Default page size: 25 items\nMax limit: 100", after: "Default page size: 50 items\nMax limit: 100", isCorrect: true },
    { id: "T13", prompt: "REVIEW TASK: Update log level to WARNING.", before: "Logging level: Info\nRetention period: 7 days", after: "Logging level: Error\nRetention period: 7 days", isCorrect: false },
    { id: "T14", prompt: "REVIEW TASK: Increase request rate limit to 100 requests per minute.", before: "Rate limit: 50 requests per minute.", after: "Rate limit: 100 requests per minute.", isCorrect: true },
    { id: "T15", prompt: "REVIEW TASK: Set worker thread count to 8.", before: "Worker threads: 4", after: "Worker threads: 8", isCorrect: true },
    { id: "T16", prompt: "REVIEW TASK: Modify timeout threshold to 15 seconds and enable keep-alive.", before: "Timeout: 10 seconds\nKeep-alive: Off", after: "Timeout: 15 seconds\nKeep-alive: On", isCorrect: true },
    { id: "T17", prompt: "REVIEW TASK: Change default currency code to EUR.", before: "Currency code: USD", after: "Currency code: EUR", isCorrect: true },
    { id: "T18", prompt: "REVIEW TASK: Increase buffer size to 4096 bytes.", before: "Buffer allocation size: 1024 bytes.", after: "Buffer allocation size: 4096 bytes.", isCorrect: true },
    { id: "T19", prompt: "REVIEW TASK: Update maximum login attempts to 3.", before: "Max login attempts: 5\nLockout duration: 15m", after: "Max login attempts: 3\nLockout duration: 30m", isCorrect: false },
    { id: "T20", prompt: "REVIEW TASK: Enable SSL certificate verification flag.", before: "SSL verification: Disabled", after: "SSL verification: Enabled", isCorrect: true }
  ]
};

let state = {
  userSelection: { codeFamiliarity: '', diffExperience: '' },
  tasks: [],
  currentTaskIndex: 0,
  taskStartTime: 0,
  results: [],
  feedback: ''
};

function handleOnboardingSubmit(e) {
  e.preventDefault();
  state.userSelection.codeFamiliarity = document.getElementById('code-familiarity').value;
  state.userSelection.diffExperience = document.getElementById('diff-experience').value;

  const pool = QUESTION_POOL[state.userSelection.codeFamiliarity] || QUESTION_POOL.code;
  
  // Randomly select 16 unique questions
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(16, pool.length));

  // Balance layout 50/50
  state.tasks = selected.map((q, idx) => ({
    ...q,
    layout: (idx % 2 === 0) ? 'unified' : 'side-by-side'
  }));

  state.currentTaskIndex = 0;
  showStep('step-task');
  renderCurrentTask();
}

function renderCurrentTask() {
  const task = state.tasks[state.currentTaskIndex];
  document.getElementById('task-progress').innerText = `Task ${state.currentTaskIndex + 1} of ${state.tasks.length}`;
  document.getElementById('task-prompt').innerText = task.prompt;

  const container = document.getElementById('diff-container');
  container.innerHTML = (task.layout === 'unified')
    ? renderUnified(task.before, task.after)
    : renderSideBySide(task.before, task.after);

  state.taskStartTime = performance.now();
}

function recordAnswer(userSelection) {
  const timeTakenMs = Math.round(performance.now() - state.taskStartTime);
  const task = state.tasks[state.currentTaskIndex];

  state.results.push({
    id: task.id,
    prompt: task.prompt,
    before: task.before,
    after: task.after,
    isCorrect: task.isCorrect,
    userSelection: userSelection,
    layout: task.layout,
    timeTakenMs: timeTakenMs
  });

  state.currentTaskIndex++;
  if (state.currentTaskIndex < state.tasks.length) {
    renderCurrentTask();
  } else {
    showStep('step-feedback');
  }
}

async function handleFeedbackSubmit(e) {
  e.preventDefault();
  state.feedback = document.getElementById('feedback-text').value;

  const payload = {
    userSelection: state.userSelection,
    questions: state.results,
    feedback: state.feedback
  };

  try {
    // Construct target URL using current host and port (stripping user credentials)
    const targetUrl = new URL('/api/results', window.location.protocol + '//' + window.location.host);

    const res = await fetch(targetUrl.href, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showStep('step-complete');
    } else {
      const errText = await res.text();
      alert(`Server returned HTTP ${res.status}: ${errText}`);
    }
  } catch (err) {
    alert(`FETCH ERROR: ${err.name} - ${err.message}`);
    console.error(err);
  }
}

function showStep(stepId) {
  ['step-onboarding', 'step-task', 'step-feedback', 'step-complete'].forEach(id => {
    document.getElementById(id).classList.toggle('hidden', id !== stepId);
  });
}

function renderUnified(orig, mod) {
  const o = orig.trim().split('\n');
  const m = mod.trim().split('\n');
  let html = `<div class="border border-slate-300 rounded bg-slate-900 text-slate-100 p-4 leading-relaxed font-mono text-xs md:text-sm">`;
  
  let i = 0, j = 0;
  while (i < o.length || j < m.length) {
    if (i < o.length && j < m.length && o[i] === m[j]) {
      html += `<div class="text-slate-300">  ${escapeHtml(o[i])}</div>`;
      i++;
      j++;
    } else {
      if (i < o.length && (j >= m.length || o[i] !== m[j])) {
        html += `<div class="bg-rose-950 text-rose-300">- ${escapeHtml(o[i])}</div>`;
        i++;
      }
      if (j < m.length && (i >= o.length || o[i - 1] !== m[j])) {
        html += `<div class="bg-emerald-950 text-emerald-300">+ ${escapeHtml(m[j])}</div>`;
        j++;
      }
    }
  }
  return html + `</div>`;
}

function renderSideBySide(orig, mod) {
  const o = orig.trim().split('\n');
  const m = mod.trim().split('\n');
  const max = Math.max(o.length, m.length);
  let left = '', right = '';
  for (let k = 0; k < max; k++) {
    const lLine = o[k] || '';
    const rLine = m[k] || '';
    const diff = lLine !== rLine;
    left += `<div class="${diff && lLine ? 'bg-rose-950 text-rose-300' : 'text-slate-300'} px-2 py-0.5">${escapeHtml(lLine)}</div>`;
    right += `<div class="${diff && rLine ? 'bg-emerald-950 text-emerald-300' : 'text-slate-300'} px-2 py-0.5">${escapeHtml(rLine)}</div>`;
  }
  return `
    <div class="grid grid-cols-2 gap-2 border border-slate-300 rounded bg-slate-900 text-slate-100 p-4 font-mono text-xs md:text-sm">
      <div><div class="text-slate-500 border-b border-slate-700 pb-1 mb-2 font-bold uppercase">Before</div>${left}</div>
      <div><div class="text-slate-500 border-b border-slate-700 pb-1 mb-2 font-bold uppercase">After</div>${right}</div>
    </div>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
}