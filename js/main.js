document.addEventListener("DOMContentLoaded", () => {
  const trackedLinks = document.querySelectorAll("[data-track]");
  const contactForm = document.querySelector("#contact-form");

  trackedLinks.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("Tracked event:", item.dataset.track);
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const status = document.querySelector("#form-status");
      if (status) {
        status.textContent = "Your message was sent successfully.";
      }

      console.log("Tracked event: contact_form_submit");
    });
  }
});
