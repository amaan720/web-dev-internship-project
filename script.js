function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!name || !email || !message) {
    errorMsg.textContent = "Please fill out all fields.";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "Please enter a valid email.";
    return false;
  }

  alert("Message sent successfully!");
  errorMsg.textContent = "";
  return true;
}
