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

  function foldList(list, limit, noun) {
    const items = Array.from(list.children);
    if (items.length <= limit) return;
    const details = document.createElement('details');
    details.className = 'more-items';
    const summary = document.createElement('summary');
    const heading = list.previousElementSibling;
    const context = heading && /^H[2-4]$/.test(heading.tagName) ? heading.textContent.trim() : 'Service';
    const closedLabel = `Show ${items.length - limit} more ${noun}`;
    summary.textContent = closedLabel;
    summary.setAttribute('aria-label', `${context}: ${closedLabel}`);
    const rest = document.createElement(list.tagName.toLowerCase());
    if (list.tagName === 'OL') rest.start = limit + 1;
    items.slice(limit).forEach(item => rest.appendChild(item));
    details.append(summary, rest);
    list.after(details);
    details.addEventListener('toggle', () => {
      const label = details.open ? `Show fewer ${noun}` : closedLabel;
      summary.textContent = label;
      summary.setAttribute('aria-label', `${context}: ${label}`);
      scheduleUpdate();
    });
  }
  document.querySelectorAll('#research .prose > ul').forEach(list => foldList(list, 3, 'publications'));
  document.querySelectorAll('#research .prose > ol').forEach(list => foldList(list, 3, 'entries'));
  document.querySelectorAll('#service .prose > ol').forEach(list => foldList(list, 4, 'entries'));

  function revealHash() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (!target) return;
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
