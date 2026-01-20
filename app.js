import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, update }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

/* 🔴 REPLACE WITH YOUR FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const PRICES = { Bike:160, Car:360, Bus:800, Truck:800 };

document.getElementById("bookingForm")
  .addEventListener("submit", handleBooking);

function handleBooking(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const service = document.getElementById("service").value;

  const amount = PRICES[service];
  if(!amount) return alert("Invalid service");

  /* Create booking */
  const bookingRef = push(ref(db,"bookings"));
  const bookingId = bookingRef.key;

  update(bookingRef,{
    id: bookingId,
    name,
    contact,
    service,
    amount,
    status: "PENDING",
    createdAt: Date.now()
  });

  /* WhatsApp auto-confirm */
  const msg =
    `Booking Request:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${contact}%0A` +
    `Service: ${service}%0A` +
    `Amount: ₹${amount}%0A` +
    `Booking ID: ${bookingId}`;

  window.open(
    `https://wa.me/919797472650?text=${msg}`,
    "_blank"
  );

  /* Cashfree Payment Link (UNCHANGED) */
  setTimeout(()=>{
    window.location.href =
      `https://payments.cashfree.com/links?code=YOUR_CASHFREE_LINK_CODE&order_id=${bookingId}`;
  },1000);
}