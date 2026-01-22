function hideAllServiceOptions() {
  document.querySelectorAll('.service-options')
    .forEach(el => el.style.display = 'none');
}

function showServiceOptions(id) {
  hideAllServiceOptions();
  document.getElementById(id).style.display = 'flex';
}

function closeServiceOption(id) {
  document.getElementById(id).style.display = 'none';
}

hideAllServiceOptions();