const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", function () {
  formStatus.textContent = "Sending your message...";
});
