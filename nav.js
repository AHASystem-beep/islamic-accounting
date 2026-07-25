/* ==========================================================================
   nav.js — سلوك القائمة الجانبية (الفتح/الإغلاق) — مشترك بين كل الصفحات
   ========================================================================== */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menuBtn');
    var drawer = document.getElementById('drawer');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('drawerClose');
    if (!menuBtn || !drawer || !overlay || !closeBtn) return;

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
    menuBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    // تمييز الصفحة الحالية في القائمة
    var here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.drawer nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === here) a.classList.add('current');
    });
  });
})();
