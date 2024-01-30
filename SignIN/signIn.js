function signIn(event) {
  var form = document.getElementById("myform");
  if (form.checkValidity()) {
      event.preventDefault();

      var email = document.getElementById("inputEmail").value;
      var password = document.getElementById("inputPass").value;

      var formData = {
          email: email,
          password: password
      };

      var apiEndpoint = " https://d8e8-182-176-157-31.ngrok-free.app/auth/login";

      fetch(apiEndpoint, {
          method: "Post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
      })
          .then(response => {
              if (!response.ok) {
                window.alert("Invalid credentials");
                throw new Error("Invalid credentials");

              }
              return response.json();
          })
          .then(data => {
              console.log(data);
              window.alert("You are successfully logged in. Press Enter to proceed ");
              window.location.href = "/EmployeeRegister/employee.html";
          })
          .catch(error => {
              console.error("Error:", error);
          });
  } else {
  }
}
