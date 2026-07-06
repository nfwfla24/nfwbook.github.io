// Shared navigation + footer HTML strings — injected into every page
// Usage: <script src="_partials.js"></script> then call injectNav() and injectFooter()

function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html',      label: 'Home'        },
    { href: 'technology.html', label: 'Technology'  },
    { href: 'about.html',      label: 'About'       },
    { href: 'book.html',       label: 'Book'        },
    { href: 'consulting.html', label: 'Advisory'    },
    { href: 'media.html',      label: 'Media'       },
  ];

  const logoSVG = `<img src="logov2.png" alt="NFW Logo" class="nav__logo-img" width="38" height="38" style="object-fit:contain;"/>`;

  const desktopLinks = pages.map(p =>
    `<li><a href="${p.href}"${activePage === p.href ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}"${activePage === p.href ? ' class="active"' : ''}>${p.label}</a>`
  ).join('');

  return `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo" aria-label="The New Financial World LLC — Home">
        ${logoSVG}
        <span>The New Financial World</span>
      </a>
      <ul class="nav__links" role="list">${desktopLinks}</ul>
      <div style="display:flex;align-items:center;gap:var(--space-3)">
        <button class="theme-toggle" data-theme-toggle aria-label="Toggle dark mode">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <a href="contactus.html" class="btn btn--accent btn--sm nav__cta--desktop">Work With Us</a>
        <button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav__mobile" id="mobile-nav" role="menu">
      ${mobileLinks}
      <a href="contactus.html" class="btn btn--accent nav__cta">Work With Us</a>
    </div>
  </div>
</nav>`;
}

function getFooterHTML() {
  const year = new Date().getFullYear();
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__brand-name">The New Financial World LLC</div>
        <p class="footer__tagline">Digital infrastructure advisory at the convergence of energy, reliability, and verifiable systems. Home of the BRIS and VRL methodologies.</p>
        <div class="footer__socials">
          <a href="https://x.com/nfwfla" target="_blank" rel="noopener" class="footer__social" aria-label="X / Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/nfwfla" target="_blank" rel="noopener" class="footer__social" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@NFWFLA" target="_blank" rel="noopener" class="footer__social" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://open.spotify.com/show/5wkVIeUkeCnNiXCYGZ0Mer" target="_blank" rel="noopener" class="footer__social" aria-label="Spotify">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <p class="footer__heading">Company</p>
        <ul class="footer__links" role="list">
          <li><a href="about.html">About</a></li>
          <li><a href="technology.html">Technology</a></li>
          <li><a href="consulting.html">Advisory</a></li>
          <li><a href="media.html">Media</a></li>
          <li><a href="contactus.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__heading">Research</p>
        <ul class="footer__links" role="list">
          <li><a href="technology.html#bris">BRIS Methodology</a></li>
          <li><a href="technology.html#vrl">VRL Methodology</a></li>
          <li><a href="book.html">The Book</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__heading">Legal</p>
        <ul class="footer__links" role="list">
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Use</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© ${year} The New Financial World LLC (#L25000469598). All rights reserved.</p>
      <p>Not financial advice. For educational and informational purposes only.</p>
    </div>
  </div>
</footer>`;
}

function injectNav(activePage) {
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = getNavHTML(activePage || window.location.pathname.split('/').pop() || 'index.html');
  else document.body.insertAdjacentHTML('afterbegin', getNavHTML(activePage));
  // Mobile toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
  }
  // Theme toggle
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  const stored = window.__nfwTheme;
  if (stored) root.setAttribute('data-theme', stored);
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      window.__nfwTheme = next;
      toggle.innerHTML = next === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    });
  }
}

function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = getFooterHTML();
  else document.body.insertAdjacentHTML('beforeend', getFooterHTML());
}

// Fade-up scroll animation
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// Accordion
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const content = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', !expanded);
      if (content) content.classList.toggle('open', !expanded);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFadeUp();
  initAccordions();
  // Set initial theme based on system preference
  if (!document.documentElement.getAttribute('data-theme')) {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    window.__nfwTheme = dark ? 'dark' : 'light';
  }
});
