import "../styles/contact.scss";

// Header fetch
// Fetch file from public/contact.json because fetch dont work when file lies in src folder
// Footer fetch

fetch("./database/contact.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    document.querySelector(".contact-page__title").textContent = data.pageTitle;
    document.querySelector(".contact-form__label--name").textContent =
      data.form.name;
    document.querySelector(".contact-form__label--email").textContent =
      data.form.email;
    document.querySelector(".contact-form__label--phoneNumber").textContent =
      data.form.phoneNumber;
    document.querySelector(".contact-form__label--topic").textContent =
      data.form.topic;
    document.querySelector(".contact-form__label--message").textContent =
      data.form.message;
    document.querySelector(".contact-form__button").textContent =
      data.form.submitButton;

    // Start validation after JSON is loaded
    setupValidation(data.form.validation);
  })
  .catch((error) => {
    console.error("Error loading contact data:", error);
  });

const setupValidation = (validationMessages) => {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  //Fields and messages
  const fields = [
    { id: "name", errorId: "nameError", message: validationMessages.name },
    { id: "email", errorId: "emailError", message: validationMessages.email },
    {
      id: "phoneNumber",
      errorId: "phoneNumberError",
      message: validationMessages.phoneNumber,
    },
    { id: "topic", errorId: "topicError", message: validationMessages.topic },
    {
      id: "message",
      errorId: "messageError",
      message: validationMessages.message,
    },
  ];

  const validateField = (field) => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);

    error.textContent = "";
    input.classList.remove("invalid");
    error.classList.remove("visible");

    if (field.id === "phoneNumber" && input.value.trim() !== "") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(input.value.trim())) {
        error.textContent = validationMessages.phoneNumber;
        error.classList.add("visible");
        input.classList.add("invalid");
        return false;
      }
    }

    if (!input.value.trim()) {
      error.textContent = field.message;
      error.classList.add("visible");
      input.classList.add("invalid");
      return false;
    } else {
      error.textContent = "";
      error.classList.remove("visible");
      input.classList.remove("invalid");
      return true;
    }
  };

  const validateForm = () => {
    let isValid = true;
    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    submitButton.disabled = !isValid;
  };

  form.addEventListener("input", validateForm);
  // Show errormessage when user leave field
  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);

    input.addEventListener("blur", () => {
      if (!input.value.trim()) {
        error.textContent = field.message;
        error.classList.add("visible");
        input.classList.add("invalid");
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!submitButton.disabled) {
      alert("Formuläret har skickats!");
      form.reset();
      validateForm(); //Update button and messages
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    submitButton.disabled = true; // Knappen ska vara inaktiverad när sidan laddas
  });
};
