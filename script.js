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

  let message = `Booking Request:%0AName: ${name}%0APhone: ${contact}%0AService: ${service}`;

  // Step 1: Send WhatsApp Message
  window.open(`https://wa.me/919797472650?text=${message}`, "_blank");

  // Step 2: Redirect to UPI after 1 second
  setTimeout(() => {
    window.location.href = `upi://pay?pa=9797472650@okbizaxis&pn=ZahoorAutoSpa&am=${amount}&cu=INR`;
  }, 1000);
}

// Contact Popup
function openContact() {
  document.getElementById("contact-popup").style.display = "flex";
}
function closeContact() {
  document.getElementById("contact-popup").style.display = "none";
}