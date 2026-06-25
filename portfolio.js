/* ── Theme toggle ── */
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  icon.textContent = isDark ? '🌙' : '☀️';
}

/* ── Mobile menu ── */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Navbar scroll shadow ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.15)' : 'none';
});

/* ── Contact form (mailto fallback) ── */
function sendMessage() {
  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  const recipientEmail = 'dnvnatural@gmail.com';
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${fname} ${lname}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailtoLink;

  document.getElementById('formSuccess').style.display = 'block';
  setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
}
