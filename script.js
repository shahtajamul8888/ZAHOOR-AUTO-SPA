// REVEAL + STAGGER
function revealOnScroll(){
  const trigger=window.innerHeight-100;
  document.querySelectorAll('.reveal-left,.reveal-card').forEach((el,i)=>{
    if(el.getBoundingClientRect().top<trigger){
      setTimeout(()=>el.classList.add('active'),i*120);
    }
  });
}
window.addEventListener('scroll',revealOnScroll);
window.addEventListener('load',revealOnScroll);

// SERVICE MODAL
function openService(name,rate,link){
  document.getElementById('serviceTitle').innerText=name+" Wash";
  document.getElementById('serviceRate').innerText="Rate: ₹"+rate;
  document.getElementById('payNow').href=link;
  document.getElementById('serviceModal').style.display='flex';
}
function closeModal(){
  document.getElementById('serviceModal').style.display='none';
}

// WHATSAPP POPUP
function openWhatsApp(){
  document.getElementById('whatsappModal').style.display='flex';
}
function closeWhatsApp(){
  document.getElementById('whatsappModal').style.display='none';
}