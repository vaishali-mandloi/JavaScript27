document.getElementById('form_id').addEventListener('click', function(event) {
        event.preventDefault();
});

function validateName() {
    let val = document.querySelector('input[name=fullname').value;
    let regex = /^[a-zA-Z ]+$/;

    // console.log(val);

    if(val == ""){
        document.querySelector('.nameErr').textContent = "This field is required";
    }  else if(!regex.test(val)) {
        document.querySelector('.nameErr').textContent = "Please Enter Only Alphabates";
    } else {
        document.querySelector('.nameErr').textContent = "";
    }
}

function validateEmail() {
    let val = document.querySelector('input[name=email').value;
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    // console.log(val);

    if(val == ""){
        document.querySelector('.emailErr').textContent = "This field is required";
    }  else if(!regex.test(val)) {
        document.querySelector('.emailErr').textContent = "Please Enter valid email address";
    } else {
        document.querySelector('.emailErr').textContent = "";
    }
}

function validatePassword() {
    let val = document.querySelector('input[name=pwd]').value;
    if(val == "") {
        document.querySelector('.passwordErr').textContent = "This field is required";
    }  else {
        document.querySelector('.passwordErr').textContent = "";
    }
}

function validateNumber() {
    let val = document.getElementById('contact').value;
    let regex = /^9876[0-9]{6}$/;

    if(val == "") {
        document.querySelector('.contactErr').textContent = "This field is required";
    } else if(!regex.test(val)) {
        document.querySelector('.contactErr').textContent = "Please enter 10 digits (start with 9876)";
    } else {
        document.querySelector('.contactErr').textContent = "";
    }
}

function validateAddress() {
    let val = document.querySelector('input[name="address"]').value;
    // console.log("addrses[0]" + val);

    if(val == "") {
        document.querySelector('.addressErr').textContent = "This field is required";
    }  else {
        document.querySelector('.addressErr').textContent = "";
    }
}

let ids = 0;

function addAddress() {
    let parent = document.querySelector(".newAddedAddresses");

    let newElement = document.createElement('div');
    newElement.classList.add("newAddress");
    ids++;
    newElement.innerHTML = '<input type="text" name="address" id="adr'+ids +'"/>' +
    '<button onclick="deleteAddress(this)">Remove</button>';

    console.log(newElement);

    parent.append(newElement);
}

function deleteAddress(btn) {
    const addContainer = document.querySelector(".newAddedAddresses");
    let prt = btn.parentNode;
    addContainer.removeChild(prt);
}

function submitData() {

    console.log(ids);
    let addresses = [];
    let name = document.querySelector('input[name="fullname"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="pwd"]').value;
    let contact = document.querySelector('input[name="contact"]').value;

    let nameErr = document.querySelector('.nameErr').textContent;
    let emailErr = document.querySelector('.emailErr').textContent
    let passwordErr = document.querySelector('.passwordErr').textContent
    let contactErr = document.querySelector('.contactErr').textContent
    let addressArr = document.querySelector('.addressErr').textContent

    for(let i=0; i<=ids; i++) {
        addresses[i] = document.getElementById(`adr${i}`).value;
    }

    if(name == "" || email == "" || password == "" || contact == "" || addresses == [] || nameErr == "" || emailErr == "" || passwordErr == "" || contactErr == "" || addressArr == "") {
        document.querySelector(".submitErr").innerHTML = "Please fill all the fields currectly.";
    }
    else {
        document.querySelector(".submitErr").innerHTML = "";
        document.querySelector(".displayData").style.display = "block";
        document.querySelector(".displayData").innerHTML = "Name :" + name + "<br>Email :" + email + "<br>Pasword :" + password + "<br>Contact :" + contact + "<br>Addresses :" + addresses;
    }

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(contact);
    console.log(addresses);
}
