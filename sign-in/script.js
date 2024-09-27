
document
.getElementById("signinForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value; // Corrected variable name

  if (email && password) {
    alert("Login successful!");

    window.location.href = "/log-in/login.html";
  } else {
    let existingMessage = document.getElementById("message");
    if (existingMessage) {
      existingMessage.remove();
    }

    let errorMessage = document.createElement("p");
    errorMessage.id = "message"; 
    errorMessage.style.color = "red";
    errorMessage.textContent = "Error: Invalid email or password. Please try again!";
    document.getElementById("signinForm").appendChild(errorMessage);
  }
});
