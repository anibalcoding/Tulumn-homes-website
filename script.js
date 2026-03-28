// ---- Service card expand ----
function toggleService(btn) {
  const card = btn.closest('.service-card');
  const details = card.querySelector('.service-details');
  const isExpanded = card.classList.contains('expanded');
  card.classList.toggle('expanded', !isExpanded);
  details.style.maxHeight = isExpanded ? null : details.scrollHeight + 'px';
}

// ---- Header scroll effect ----
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ---- Mobile nav ----
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ---- FAQ toggle ----
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(fi => {
    fi.classList.remove('open');
    fi.querySelector('.faq-answer').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ---- Land option toggle ----
function selectLandOption(type) {
  const ownOption = document.getElementById('landOwn');
  const needOption = document.getElementById('landNeed');
  const ownForm = document.getElementById('landFormOwn');
  const needForm = document.getElementById('landFormNeed');

  ownOption.classList.remove('active');
  needOption.classList.remove('active');
  ownForm.classList.remove('visible');
  needForm.classList.remove('visible');

  if (type === 'own') {
    ownOption.classList.add('active');
    ownForm.classList.add('visible');
    setTimeout(() => ownForm.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  } else {
    needOption.classList.add('active');
    needForm.classList.add('visible');
    setTimeout(() => needForm.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  }
}

// ---- Gallery tabs ----
document.querySelectorAll('.gallery-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ---- Form submit handler ----
function handleFormSubmit(e, formType) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Thank You!';
    btn.style.background = '#2C7A3A';
    btn.style.opacity = '1';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 1200);
}

// ---- Mobile gallery expand ----
function toggleMobileGallery(el) {
  const isOpen = el.classList.contains('open');
  el.classList.toggle('open', !isOpen);
  const expand = el.querySelector('.gallery-mobile-expand');
  expand.style.maxHeight = isOpen ? null : expand.scrollHeight + 'px';
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
