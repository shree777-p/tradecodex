/* Trader's Codex — shared behaviour */

/* ---------- THEME ---------- */
(function initTheme(){
  const saved = localStorage.getItem('codex-theme');
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('codex-theme', next);
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.textContent = next === 'light' ? '☾' : '☀';
}

/* ---------- SIDEBAR (doc pages) ---------- */
function renderSidebar(activeSlug){
  const mount = document.getElementById('sidebar-groups');
  if(!mount) return;
  const collapsedState = JSON.parse(localStorage.getItem('codex-sidebar-collapsed') || '{}');

  mount.innerHTML = CODEX.map(group => {
    const isCollapsed = collapsedState[group.id];
    const links = group.topics.map(topic => {
      const active = topic.s === activeSlug ? 'active' : '';
      return `<a href="article.html?slug=${topic.s}" class="${active}">${topic.t}</a>`;
    }).join('');
    return `
      <div class="sidebar-group ${isCollapsed ? 'collapsed' : ''}" data-group="${group.id}">
        <div class="sidebar-group-title" onclick="toggleGroup('${group.id}')">
          <span>${group.folio} · ${group.title}</span>
          <span class="chev">▾</span>
        </div>
        <div class="sidebar-links">${links}</div>
      </div>`;
  }).join('');
}

function toggleGroup(id){
  const el = document.querySelector(`.sidebar-group[data-group="${id}"]`);
  el.classList.toggle('collapsed');
  const state = JSON.parse(localStorage.getItem('codex-sidebar-collapsed') || '{}');
  state[id] = el.classList.contains('collapsed');
  localStorage.setItem('codex-sidebar-collapsed', JSON.stringify(state));
}

function toggleMobileSidebar(){
  document.getElementById('doc-sidebar')?.classList.toggle('open');
}

/* ---------- SEARCH ---------- */
function openSearch(){
  const overlay = document.getElementById('search-overlay');
  overlay.classList.add('open');
  document.getElementById('search-input').focus();
}
function closeSearch(){
  document.getElementById('search-overlay').classList.remove('open');
}
function runSearch(query){
  const results = document.getElementById('search-results');
  const q = query.trim().toLowerCase();
  if(!q){
    results.innerHTML = `<div class="search-empty">Start typing to search across all ${CODEX_INDEX.length} entries in the Codex.</div>`;
    return;
  }
  const matches = CODEX_INDEX.filter(item => item.t.toLowerCase().includes(q)).slice(0, 20);
  if(matches.length === 0){
    results.innerHTML = `<div class="search-empty">No entries match "${escapeHtml(query)}".</div>`;
    return;
  }
  results.innerHTML = matches.map(m => `
    <a class="search-result" href="article.html?slug=${m.s}">
      <span>${m.t}</span>
      <span class="tag">${m.group}</span>
    </a>`).join('');
}
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

document.addEventListener('keydown', (e) => {
  if(e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
    e.preventDefault();
    openSearch();
  }
  if(e.key === 'Escape'){
    closeSearch();
  }
});

/* ---------- ACCORDION ---------- */
function toggleAccordion(el){
  el.parentElement.classList.toggle('open');
}

/* ---------- PROGRESS BAR + BACK TO TOP ---------- */
window.addEventListener('scroll', () => {
  const bar = document.getElementById('progress-bar');
  const toTop = document.getElementById('back-to-top');
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if(bar) bar.style.width = pct + '%';
  if(toTop) toTop.classList.toggle('show', window.scrollY > 500);
});
function scrollTop(){ window.scrollTo({top:0, behavior:'smooth'}); }

/* ---------- BOOKMARKS ---------- */
function toggleBookmark(slug, btn){
  let saved = JSON.parse(localStorage.getItem('codex-bookmarks') || '[]');
  if(saved.includes(slug)){
    saved = saved.filter(s => s !== slug);
    if(btn) btn.textContent = '☆ Bookmark';
  } else {
    saved.push(slug);
    if(btn) btn.textContent = '★ Bookmarked';
  }
  localStorage.setItem('codex-bookmarks', JSON.stringify(saved));
}
function isBookmarked(slug){
  const saved = JSON.parse(localStorage.getItem('codex-bookmarks') || '[]');
  return saved.includes(slug);
}

/* ---------- TOOLTIPS (glossary hover) ---------- */
document.addEventListener('mouseover', (e) => {
  const term = e.target.closest('.glossary-term');
  if(!term) return;
  const box = document.getElementById('tooltip-box');
  box.querySelector('strong').textContent = term.dataset.term || term.textContent;
  box.querySelector('span').textContent = term.dataset.def || '';
  const rect = term.getBoundingClientRect();
  box.style.top = (window.scrollY + rect.bottom + 8) + 'px';
  box.style.left = (window.scrollX + rect.left) + 'px';
  box.classList.add('show');
});
document.addEventListener('mouseout', (e) => {
  if(e.target.closest('.glossary-term')){
    document.getElementById('tooltip-box')?.classList.remove('show');
  }
});
