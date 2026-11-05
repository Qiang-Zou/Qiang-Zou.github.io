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
