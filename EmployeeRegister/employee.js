var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPhone");
var dropdownDepartment = document.getElementById("department")
var target = document.getElementById("tableDiv");



 function addList(event){

    var form = document.getElementById("myform");
       if (form.checkValidity()) {
       event.preventDefault();

    if(inputName.value == "" && inputEmail.value == "" && inputPass.value == "" && dropdownDepartment.value == ""){

    }else{
      console.log(inputName.value)
    let list = document.createElement("tr");
    let listChild = document.createElement("td");
    var text = document.createTextNode(inputName.value);
    listChild.appendChild(text);
    let listChild2 = document.createElement("td");
    var text2 = document.createTextNode(inputEmail.value);
    listChild2.appendChild(text2);
    let listChild3 = document.createElement("td");
    var text3 = document.createTextNode(inputPass.value);
    listChild3.appendChild(text3);
    let listChild4 = document.createElement("td");
    var text4 = document.createTextNode(dropdownDepartment.value);
    listChild4.appendChild(text4);

    list.appendChild(listChild);
    list.appendChild(listChild2);
    list.appendChild(listChild3);
    list.appendChild(listChild4);
    target.appendChild(list);
    }




    var apiEndpoint = " https://d8e8-182-176-157-31.ngrok-free.app/company";
    fetch(apiEndpoint, {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // window.location.href = "/SignIN/index.html";
        console.log(data);
        // window.alert(data)
      })
      .catch(error => {
        console.error("Error:", error);
      });


  } else {
}

   

}