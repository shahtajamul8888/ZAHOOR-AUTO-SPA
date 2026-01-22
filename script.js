const modal = document.getElementById("optionModal");
const optTitle = document.getElementById("optTitle");
const optPrice = document.getElementById("optPrice");
const payLink = document.getElementById("payLink");
const bookLink = document.getElementById("bookLink");
const vehicleIcon = document.getElementById("vehicleIcon");

const WHATSAPP_NUMBER = "919XXXXXXXXX";

function openOptions(type, price, paymentUrl, icon) {
  optTitle.innerText = type + " Wash";
  optPrice.innerText = "Price: ₹" + price;
  vehicleIcon.innerText = icon;

  payLink.href = paymentUrl;
  bookLink.href =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=Hello Zahoor Auto Spa,%0AI want to book a " +
    type + " wash.%0APrice: ₹" + price;

  modal.style.display = "flex";

  payLink.onclick = () => {
    setTimeout(closeOptions, 3000);
  };
}

function closeOptions() {
  modal.style.display = "none";
}

modal.addEventListener("click", e => {
  if (e.target === modal) closeOptions();
});