function copyLink() {
  navigator.clipboard.writeText("https://tinyurl.com/ZahoorAutoSpa");
  let toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => { toast.classList.remove("show"); }, 2000);
}