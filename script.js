// Show Rates
function showRate(service, price) {
  document.getElementById("rate-display").innerText =
    `${service} Washing Rate: ₹${price}`;
}

// Handle Booking
function handleBooking(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let service = document.getElementById("service").value;

  let message = `Booking Details:%0AName: ${name}%0AContact: ${contact}%0ADate: ${date}%0ATime: ${time}%0AService: ${service}`;

  // Send WhatsApp Message
  window.open(`https://wa.me/919797472650?text=${message}`, "_blank");

  // Amount Calculation
  let amount = 0;
  if (service === "Bike") amount = 200;
  if (service === "Car") amount = 450;
  if (service === "Bus" || service === "Truck") amount = 800;

  // Show QR Popup
  document.getElementById("qr-popup").style.display = "flex";

  // Auto-redirect to UPI after 5s
  setTimeout(() => {
    window.location.href =
      `upi://pay?pa=9797472650@okbizaxis&pn=ZahoorAutoSpa&am=${amount}&cu=INR`;
  }, 5000);
}

// Close QR
function closeQR() {
  document.getElementById("qr-popup").style.display = "none";
}