



function submitForm(event) {
  var form = document.getElementById("myform");
  if (form.checkValidity()) {
    event.preventDefault();

  
    var inputUserName = document.getElementById("inputUserName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPass").value;
    var companyName = document.getElementById("inputCompanyName").value;
    var departmentName = document.getElementById("department").value;

    var formData = {
      employeeName: inputUserName,
      email: email,
      password: password,
      departmentName: departmentName,
      companyName: companyName,
    };
    console.log(JSON.stringify(formData));
    var apiEndpoint = " https://d8e8-182-176-157-31.ngrok-free.app/auth/signup";
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        window.alert("Invalid credentials");
        throw new Error("Invalid credentials");

      }
      return response.json();
  })
      .then(data => {
        window.alert("Sign up Successfull")
        window.location.href = "/SignIN/index.html";
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {

  }
}

