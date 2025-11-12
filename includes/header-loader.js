// header-loader.js
document.addEventListener("DOMContentLoaded", () => {
  // Cherche le premier <header> de la page
  let header = document.querySelector("header");

  // Si aucun <header> n'existe, on le crée et on le place en haut du body
  if (!header) {
    header = document.createElement("header");
    document.body.insertBefore(header, document.body.firstChild);
    console.info("Aucun <header> trouvé — un nouveau header a été créé automatiquement.");
  }

  // Charge le contenu depuis /includes/header.html
  fetch("/includes/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Erreur de chargement du header : " + res.status);
      return res.text();
    })
    .then(html => {
      header.innerHTML = html; // insère tout le contenu du fichier
      console.info("Header chargé avec succès depuis /includes/header.html");

      // Si une fonction initHeaderEvents() est définie, on l'appelle
      if (typeof initHeaderEvents === "function") {
        initHeaderEvents();
      }
    })
    .catch(err => console.error("⚠️ Erreur lors du chargement du header :", err));
});


function initHeaderEvents() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const close = document.getElementById("close-sidebar");
  
  toggle?.addEventListener("click", () => { sidebar.classList.remove("hidden"); });
  close?.addEventListener("click", () => { sidebar.classList.add("hidden"); });
  
  // Fermer si clic en dehors
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) { sidebar.classList.add("hidden"); }
  });
}
