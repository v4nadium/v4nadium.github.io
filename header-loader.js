// header-loader.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./header.html")
    .then(res => res.text())
    .then(html => {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      document.body.insertBefore(temp.firstElementChild, document.body.firstChild);
      initHeaderEvents(); // active les événements du menu
    });
});

function initHeaderEvents() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const close = document.getElementById("close-sidebar");

  toggle?.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
  });

  close?.addEventListener("click", () => {
    sidebar.classList.add("hidden");
  });

  // Fermer si clic en dehors
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.add("hidden");
    }
  });
}
