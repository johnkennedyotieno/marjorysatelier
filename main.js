/* Marjory's Atelier — main.js */

// === NAV SCROLL STATE ===
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// === MOBILE NAV TOGGLE ===
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// === PRODUCT CATALOGUE ===
let allProducts = { bags: [], wearables: [] };
let activeTab = 'bags';

async function loadProducts() {
  try {
    const res  = await fetch('products.json');
    allProducts = await res.json();
    renderProducts(activeTab);
  } catch (err) {
    console.error('Could not load products.json', err);
  }
}

function renderProducts(tab) {
  const grid     = document.getElementById('productGrid');
  const products = allProducts[tab] || [];
  grid.innerHTML  = '';

  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.07}s`;

    const waUrl    = `https://wa.me/254711789266?text=${encodeURIComponent(p.whatsapp_text)}`;
    const hasMulti = p.images && p.images.length > 1;
    const mainImg  = p.images && p.images[0] ? p.images[0] : '';
    const altImg   = hasMulti ? p.images[1] : mainImg;

    card.innerHTML = `
      <div class="product-card__img-wrap">
        <img
          class="product-card__img product-card__img--main"
          src="${mainImg}"
          alt="${p.name}"
          loading="lazy"
        />
        ${hasMulti ? `<img
          class="product-card__img product-card__img--alt"
          src="${altImg}"
          alt="${p.name} — alternate view"
          loading="lazy"
        />` : ''}
        ${p.tag ? `<span class="product-card__tag">${p.tag}</span>` : ''}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${p.price}</span>
          <a
            href="${waUrl}"
            target="_blank"
            rel="noopener"
            class="product-card__order"
            aria-label="Order ${p.name} via WhatsApp"
          >Order</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// === TABS ===
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-btn--active'));
    btn.classList.add('tab-btn--active');
    activeTab = btn.dataset.tab;
    renderProducts(activeTab);
  });
});

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll(
  '.pillar, .craft__stat, .story__text, .story__visual, .catalogue__inner h2, .catalogue__intro'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});

// === INIT ===
loadProducts();
