

document
  .getElementById("createForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    console.log("Email:", userEmail);
    console.log("Password:", userPassword);

    try {
      let API = "https://fakestoreapi.com/users";
      let getApi = await fetch(API);
      let apiJson = await getApi.json();

      console.log("All Users from API:", apiJson);

      let users = [
        { email: "kev02937@", password: "kevin@gmail.com" },
        { email: "john@gmail.com", password: "m38rmF$" },
        { email: "user3@example.com", password: "password3" }
      ];

      let isUserValid = users.some(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (isUserValid) {
        alert("Login successful!");
        window.location.href = "/index.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });


  // m38rmF$"
  // john@gmail.com