document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".js-whatsapp");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Contact");
        fbq("track", "Lead", {
          content_name: "Contato WhatsApp - Agile 1.4 LTZ",
          value: 32000,
          currency: "BRL"
        });
      }
    });
  });
});