document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".js-whatsapp");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Contact");
        fbq("track", "Lead", {
          content_name: "Contato WhatsApp - Agile 1.4 LTZ",
          content_category: "Veículo",
          value: 32000,
          currency: "BRL"
        });
      }
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryImages = document.querySelectorAll(".gallery-img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImage.src = this.src;
      lightboxImage.alt = this.alt;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});
