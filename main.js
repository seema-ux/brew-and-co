function switchTab(category, btn) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + category).classList.add('active');
  btn.classList.add('active');
}

let cartCount = 0, cartTotal = 0;
function addToCart(name, price) {
  cartCount++; cartTotal += price;
  document.getElementById('cartNum').textContent = cartCount;
  document.getElementById('cartBubble').style.display = 'flex';
  const toast = document.getElementById('toast');
  toast.textContent = name + ' added! 🌸';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
  const bubble = document.getElementById('cartBubble');
  bubble.style.transform = 'scale(1.3)';
  setTimeout(() => bubble.style.transform = 'scale(1)', 200);
}

function showCart() {
  alert('🛒 ' + cartCount + ' items • Total: ₹' + cartTotal + '\n\nCall us to place your order:\n+91 98765 43210');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
function openModal(src) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const was = card.classList.contains('expanded');
    document.querySelectorAll('.menu-card').forEach(c => c.classList.remove('expanded'));
    if (!was) card.classList.add('expanded');
  });
});
