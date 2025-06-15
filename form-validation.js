document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const prenom = document.getElementById("prenom").value.trim();
      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const sujet = document.getElementById("sujet").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!prenom || !nom || !email || !sujet || !message) {
        alert("⚠️ Veuillez remplir tous les champs avant de soumettre !");
        return;
      }

      alert("✅ Message bien envoyé)");
      form.reset();
    });
  }
});


 