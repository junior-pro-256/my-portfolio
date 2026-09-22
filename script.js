// ---------- Loading animation ----------
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const loaderMsg = 'booting portfolio...';
let li = 0;

function typeLoader() {
  if (li <= loaderMsg.length) {
    loaderText.textContent = loaderMsg.slice(0, li);
    li++;
    setTimeout(typeLoader, 30);
  }
}
typeLoader();

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 500);
});

// ---------- Theme toggle (dark/light) ----------
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// ---------- Scroll to top button ----------
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Contact form (front-end only placeholder) ----------
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in every field.';
    return;
  }

  // Placeholder: wire this up to EmailJS, Formspree, or a backend endpoint.
  status.textContent = `Thanks, ${name} — this form isn't connected to a backend yet, so nothing was actually sent.`;
  form.reset();
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
