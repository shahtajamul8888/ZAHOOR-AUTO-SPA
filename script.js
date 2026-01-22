// REVEAL + STAGGER (UNCHANGED)
function revealOnScroll() {
  const trigger = window.innerHeight - 100;

  document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('active');
    }
  });

  const cards = document.querySelectorAll('.reveal-card');
  cards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < trigger) {
      setTimeout(() => card.classList.add('active'), i * 120);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// OPTIONS LOGIC
function openOptions(name, price, link) {
  document.getElementById('optTitle').innerText = name + " Wash";
  document.getElementById('optPrice').innerText = "Rate: ₹" + price;
  document.getElementById('payLink').href = link;
  document.getElementById('optionModal').style.display = "flex";
}

function closeOptions() {
  document.getElementById('optionModal').style.display = "none";
}