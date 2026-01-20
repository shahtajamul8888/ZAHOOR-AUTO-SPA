import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, get }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

window.login = function(){
  signInWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>panel.style.display="block")
    .catch(()=>alert("Login failed"));
};

window.searchBooking = function(){
  searchResults.innerHTML = "";
  get(ref(db,"bookings")).then(snap=>{
    Object.values(snap.val()||{}).forEach(b=>{
      if(b.contact === searchPhone.value){
        searchResults.innerHTML += `
          <div class="result-card">
            ${b.name} | ${b.service}<br>
            ₹${b.amount} | ${b.status}
          </div>`;
      }
    });
  });
};