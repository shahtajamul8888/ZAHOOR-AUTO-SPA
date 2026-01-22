const modal = document.getElementById("optionModal");
const optTitle = document.getElementById("optTitle");
const optPrice = document.getElementById("optPrice");
const payLink = document.getElementById("payLink");
const bookLink = document.getElementById("bookLink");
const serviceImg = document.getElementById("serviceImg");

const WHATSAPP_NUMBER = "919XXXXXXXXX";

const images = {
  bike: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop",
  car: "https://images.unsplash.com/photo-1633014041037-f5446fb4ce99?q=80&w=1200&auto=format&fit=crop",
  bus: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  truck: "https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?q=80&w=1200&auto=format&fit=crop"
};

function openOptions(type, price, paymentUrl, key) {
  optTitle.innerText = type + " Wash";
  optPrice.innerText = "Price: ₹" + price;
  serviceImg.src = images[key];
  payLink.href = paymentUrl;

  bookLink.href =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=Hello Zahoor Auto Spa,%0AI want to book a " +
    type + " wash.%0APrice: ₹" + price;

  modal.style.display = "flex";

  // auto close after payment click
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