
function submitForm(event) {
    var form = document.getElementById("myform");
    if (form.checkValidity()) {
        event.preventDefault();


    var company_name = document.getElementById("inputUserName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPass").value;
    var company_description = document.getElementById("inputTextArea").value;
    var AdminName = document.getElementById("inputAdmin").value;

    console.log(company_description)
  

    var formData = {
      companyName: company_name,
      companyDescription: company_description,
      employeeName: AdminName,
      email: email,
      password: password,
    };
    console.log(JSON.stringify(formData));
    var apiEndpoint = " https://d8e8-182-176-157-31.ngrok-free.app/company/register";
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        window.location.href = "/SignIN/index.html";
        console.log(data);
        window.alert(data)
      })
      .catch(error => {
        console.error("Error:", error);
      });
    } else {
    
  }
  }