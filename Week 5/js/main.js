// Basic JS setup for future features

console.log("Pipe Cleaner Business site loaded");

// Example: simple alert for contact form (placeholder)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted! (This is just a placeholder)");
    });
  }
});
