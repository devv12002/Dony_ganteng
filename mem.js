const contactForm = document.getElementById("contact_form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const URL = e.target.action;
  const formData = new formData(contactForm);

  fetch(URL, {
    method: "POST",
    body: "formData",
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("error acured"));
});
