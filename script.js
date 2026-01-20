function hideAllServiceOptions() {
  document.getElementById("bike-options").style.display = "none";
  document.getElementById("car-options").style.display = "none";
  document.getElementById("bus-options").style.display = "none";
  document.getElementById("truck-options").style.display = "none";
}

function showServiceOptions(id) {
  hideAllServiceOptions();
  document.getElementById(id).style.display = "flex";
}

function closeServiceOption(id) {
  document.getElementById(id).style.display = "none";
}

hideAllServiceOptions();

/* ===== Marquee behavior ===== */
(function () {
  const marquee = document.getElementById("topMarquee");
  const text = document.getElementById("marqueeText");

  // Different text at night (8 PM – 6 AM)
  const hour = new Date().getHours();
  if (hour >= 20 || hour < 6) {
    text.textContent =
      "🌙 NIGHT SERVICE AVAILABLE • ZAHOOR AUTO SPA •";
  }

  // Auto-hide after 5 seconds (only per refresh)
  setTimeout(() => {
    marquee.style.opacity = "0";
    marquee.style.transform = "translateY(-10px)";
    setTimeout(() => marquee.style.display = "none", 1000);
  }, 5000);
})();