(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.nav-toggle');
  function setNav(open) {
    root.classList.toggle('nav-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle) toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setNav(!root.classList.contains('nav-open'));
  });

  // выпадающие меню навигации и языка
  document.querySelectorAll('.nav__droptoggle, .lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var box = btn.parentElement;
      var open = !box.classList.contains('open');
      document.querySelectorAll('.nav__drop.open, .lang.open').forEach(function (el) {
        if (el !== box) { el.classList.remove('open'); }
      });
      box.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__drop, .lang')) {
      document.querySelectorAll('.nav__drop.open, .lang.open').forEach(function (el) { el.classList.remove('open'); });
    }
    if (root.classList.contains('nav-open') && !e.target.closest('#site-nav, .nav-toggle')) setNav(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setNav(false);
      document.querySelectorAll('.nav__drop.open, .lang.open').forEach(function (el) { el.classList.remove('open'); });
    }
  });

  // кнопка «наверх»
  var top = document.querySelector('[data-totop]');
  if (top) {
    var onScroll = function () { top.classList.toggle('visible', window.scrollY > 600); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
