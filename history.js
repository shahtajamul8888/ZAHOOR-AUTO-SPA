import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.loadHistory = function(){
  const phone = phoneInput.value.trim();
  historyResults.innerHTML = "";

  get(ref(db,"bookings")).then(snap=>{
    const data = snap.val() || {};
    let found = false;

    Object.values(data).forEach(b=>{
      if(b.contact === phone){
        found = true;
        historyResults.innerHTML += `
          <div class="result-card">
            ${b.service}<br>
            ₹${b.amount}<br>
            Status: <b>${b.status}</b>
          </div>`;
      }
    });

    if(!found){
      historyResults.innerHTML = "<p>No bookings found.</p>";
    }
  });
};