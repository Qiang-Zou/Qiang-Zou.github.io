/* Preserve the original homepage's overflow menu and mobile Follow control
   without restoring the legacy jQuery dependency. */
(() => {
  const nav = document.querySelector('#site-nav');
  const toggle = nav.querySelector('button');
  const visible = nav.querySelector('.visible-links');
  const overflow = nav.querySelector('.hidden-links');
  const profile = document.querySelector('.author__urls-wrapper');
  const follow = profile.querySelector('button');

  function closeNavigation() {
    overflow.classList.add('hidden');
    toggle.classList.remove('close');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function fitNavigation() {
    while (overflow.firstElementChild) visible.append(overflow.firstElementChild);
    toggle.classList.add('hidden');
    if (visible.getBoundingClientRect().width > nav.clientWidth) {
      toggle.classList.remove('hidden');
      const available = nav.clientWidth - toggle.offsetWidth - 30;
      while (visible.children.length > 1 && visible.getBoundingClientRect().width > available) {
        overflow.prepend(visible.lastElementChild);
      }
    }
    closeNavigation();
  }

  toggle.addEventListener('click', () => {
    const open = overflow.classList.toggle('hidden') === false;
    toggle.classList.toggle('close', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  follow.addEventListener('click', () => {
    const open = profile.classList.toggle('is-open');
    follow.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (toggle.getAttribute('aria-expanded') === 'true') toggle.focus();
    if (profile.classList.contains('is-open')) follow.focus();
    closeNavigation();
    profile.classList.remove('is-open');
    follow.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeNavigation();
    if (!profile.contains(event.target)) {
      profile.classList.remove('is-open');
      follow.setAttribute('aria-expanded', 'false');
    }
  });
  window.addEventListener('resize', fitNavigation);
  fitNavigation();
  document.fonts.ready.then(fitNavigation);
})();
