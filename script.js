// Select form and elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Regex for email validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Handle form submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from submitting
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If all valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset(); // clear fields
  } else {
    successMessage.textContent = "";
  }
});
