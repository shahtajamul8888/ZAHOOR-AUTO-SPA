function handleBooking(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let service = document.getElementById("service").value;

  let amount = 0;
  if (service === "Bike") amount = 160;
  else if (service === "Car") amount = 360;
  else if (service === "Bus") amount = 800;
  else if (service === "Truck") amount = 800;

  let message =
    `Booking Request:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${contact}%0A` +
    `Service: ${service}%0A` +
    `Amount: ₹${amount}`;

  // 1️⃣ WhatsApp
  window.open(
    `https://wa.me/919797472650?text=${message}`,
    "_blank"
  );

  // 2️⃣ Cashfree Payment Link (UNCHANGED)
  setTimeout(() => {
    window.location.href =
      "https://payments.cashfree.com/links?code=YOUR_CASHFREE_LINK_CODE";
  }, 1000);
}

// Manual payment
function openPayment() {
  window.location.href =
    "https://payments.cashfree.com/links?code=YOUR_CASHFREE_LINK_CODE";
}

// About popup
function openAbout() {
  document.getElementById("about-popup").style.display = "flex";
}
function closeAbout() {
  document.getElementById("about-popup").style.display = "none";
}

// Contact popup
function openContact() {
  document.getElementById("contact-popup").style.display = "flex";
}
function closeContact() {
  document.getElementById("contact-popup").style.display = "none";
}