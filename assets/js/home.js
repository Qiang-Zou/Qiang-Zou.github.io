/* Mobile disclosure for the original author links. */
(() => {
  const profile = document.querySelector('.author__urls-wrapper');
  const follow = profile.querySelector('button');
  function close() {
    profile.classList.remove('is-open');
    follow.setAttribute('aria-expanded', 'false');
  }
  follow.addEventListener('click', () => {
    const open = profile.classList.toggle('is-open');
    follow.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && profile.classList.contains('is-open')) {
      close();
      follow.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!profile.contains(event.target)) close();
  });
})();

/* Progressive enhancement: source Markdown stays complete and readable without JS. */
(() => {
  const index = document.querySelector('.section-index');
  if (!index) return;
  const links = Array.from(index.querySelectorAll('nav a'));
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  const wide = window.matchMedia('(min-width: 1280px)');
  function setIndexLayout() { index.open = wide.matches; }
  setIndexLayout();
  wide.addEventListener('change', setIndexLayout);

  const publicationViews = [];
  document.querySelectorAll('#research .prose > ul').forEach((list, listIndex) => {
    const items = Array.from(list.children);
    // Only publication lists with explicit author-maintained metadata participate.
    if (!items.some(item => item.querySelector('[data-year]'))) return;
    const records = items.map((item, position) => {
      const metadata = item.querySelector('[data-year]');
      const year = Number(metadata?.getAttribute('data-year')) || 0;
      return { item, position, year, selected: metadata?.getAttribute('data-selected') === 'true' };
    });
    const selected = records.filter(record => record.selected);
    const chronological = records.slice().sort((a, b) => b.year - a.year || a.position - b.position);
    const heading = list.previousElementSibling;
    const context = heading?.textContent.trim() || 'Publications';
    list.id = list.id || `publication-list-${listIndex}`;
    let button;
    let status;
    let selectedView = selected.length > 0;
    if (selected.length) {
      const controls = document.createElement('div');
      controls.className = 'publication-controls';
      status = document.createElement('span');
      status.setAttribute('aria-live', 'polite');
      button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-controls', list.id);
      controls.append(status, button);
      list.before(controls);
      button.addEventListener('click', () => { render(!selectedView); scheduleUpdate(); });
    }
    function render(showSelected) {
      selectedView = showSelected;
      const order = showSelected ? records : chronological;
      order.forEach(record => {
        record.item.hidden = showSelected && !record.selected;
        list.appendChild(record.item);
      });
      if (button) {
        const label = showSelected ? `View all ${records.length} publications` : 'Show selected publications';
        button.textContent = label;
        button.setAttribute('aria-label', `${context}: ${label}`);
        button.setAttribute('aria-expanded', String(!showSelected));
        status.textContent = showSelected ? `Selected publications (${selected.length})` : 'All publications · newest first';
      }
    }
    render(selectedView);
    publicationViews.push({ items, showAll: () => render(false) });
  });

  function revealHash() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (!target) return;
    publicationViews.forEach(view => {
      if (view.items.some(item => item.hidden && item.contains(target))) view.showAll();
    });
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === 'DETAILS') parent.open = true;
    }
    target.scrollIntoView();
  }
  function updateCurrent() {
    let active = 0;
    targets.forEach((target, i) => {
      if (target && target.getBoundingClientRect().top <= Math.min(180, window.innerHeight * .25)) active = i;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = links.length - 1;
    links.forEach((link, i) => {
      if (i === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let pending = false;
  function scheduleUpdate() {
    if (pending) return;
    pending = true;
    window.requestAnimationFrame(() => { pending = false; updateCurrent(); });
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', () => { revealHash(); scheduleUpdate(); });
  window.addEventListener('load', () => { revealHash(); scheduleUpdate(); });
  document.querySelector('.home-content').addEventListener('toggle', scheduleUpdate, true);
  links.forEach(link => link.addEventListener('click', () => { if (!wide.matches) index.open = false; }));
  updateCurrent();
})();
