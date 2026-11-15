const DiffRenderer = {
  renderUnified(originalText, modifiedText) {
    const origLines = originalText.trim().split('\n');
    const modLines = modifiedText.trim().split('\n');

    let html = `<div class="border border-slate-300 rounded bg-slate-900 text-slate-100 p-4 font-mono leading-relaxed">`;
    
    let i = 0, j = 0;
    while (i < origLines.length || j < modLines.length) {
      if (i < origLines.length && j < modLines.length && origLines[i] === modLines[j]) {
        html += `<div class="text-slate-300">  ${escapeHtml(origLines[i])}</div>`;
        i++; j++;
      } else {
        if (i < origLines.length && !modLines.includes(origLines[i])) {
          html += `<div class="bg-rose-950 text-rose-300">- ${escapeHtml(origLines[i])}</div>`;
          i++;
        }
        if (j < modLines.length && !origLines.includes(modLines[j])) {
          html += `<div class="bg-emerald-950 text-emerald-300">+ ${escapeHtml(modLines[j])}</div>`;
          j++;
        }
      }
    }
    html += `</div>`;
    return html;
  },

  renderSideBySide(originalText, modifiedText) {
    const origLines = originalText.trim().split('\n');
    const modLines = modifiedText.trim().split('\n');
    const maxLines = Math.max(origLines.length, modLines.length);

    let leftCols = '';
    let rightCols = '';

    for (let k = 0; k < maxLines; k++) {
      const orig = origLines[k] || '';
      const mod = modLines[k] || '';
      const isChanged = orig !== mod;

      leftCols += `<div class="${isChanged && orig ? 'bg-rose-950 text-rose-300' : 'text-slate-300'} px-2 py-0.5">${escapeHtml(orig)}</div>`;
      rightCols += `<div class="${isChanged && mod ? 'bg-emerald-950 text-emerald-300' : 'text-slate-300'} px-2 py-0.5">${escapeHtml(mod)}</div>`;
    }

    return `
      <div class="grid grid-cols-2 gap-2 border border-slate-300 rounded bg-slate-900 text-slate-100 p-4 font-mono text-xs md:text-sm">
        <div>
          <div class="text-slate-500 border-b border-slate-700 pb-1 mb-2 font-bold uppercase">Before</div>
          ${leftCols}
        </div>
        <div>
          <div class="text-slate-500 border-b border-slate-700 pb-1 mb-2 font-bold uppercase">After</div>
          ${rightCols}
        </div>
      </div>
    `;
  }
};

function escapeHtml(str) {
  return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
}