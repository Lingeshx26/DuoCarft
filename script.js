(function() {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { io.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('is-visible'); });
  }

  // Dark mode toggle
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('duocraft-theme', next); } catch (e) {}
    });
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    function closeMenu() {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    function toggleMenu() {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', function(e) {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== navToggle) {
        closeMenu();
      }
    });
    window.addEventListener('resize', function() {
      if (window.innerWidth > 640) closeMenu();
    });
  }

  // Header shadow on scroll
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });

  // 3D tilt on every card — bound individually so a missing element
  // elsewhere on the page can never block the others from working.
  var canHover = !reduceMotion && window.matchMedia('(hover: hover)').matches;
  if (canHover) {
    var maxTilt = 6;

    function attachTilt(card) {
      function onMove(e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var rotateY = (x - 0.5) * maxTilt * 2;
        var rotateX = (0.5 - y) * maxTilt * 2;
        card.style.transform =
          'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      }
      function onLeave() {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      }
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    }

    document.querySelectorAll('.tilt-card').forEach(attachTilt);
  }
})();
