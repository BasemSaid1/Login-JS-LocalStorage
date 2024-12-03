var names = document.getElementById("names");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signup = document.querySelector("#signup");
var Success = document.getElementById("Success");
var mailExists = document.getElementById("mailExists");
var Allinputsisrequired = document.getElementById("Allinputsisrequired");
var usersList = [];
let welUser = document.querySelector("#welUser");

if (localStorage.getItem("users") !== null) {
  usersList = JSON.parse(localStorage.getItem("users"));
} else {
  usersList = [];
}

function signuup() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email == email.value) {
      if (mailExists) {
        mailExists.classList.remove("d-none");
      }
      if (Success) Success.classList.add("d-none");
      if (Allinputsisrequired) Allinputsisrequired.classList.add("d-none");
      return;
    }
  }

  if (names.value == "" || password.value == "" || email.value == "") {
    Allinputsisrequired.classList.remove("d-none");
    Success.classList.add("d-none");
  } else {
    var users = {
      UserName: names.value,
      Pass: password.value,
      email: email.value,
    };
    usersList.push(users);
    localStorage.setItem("users", JSON.stringify(usersList));
    Success.classList.remove("d-none");
    Allinputsisrequired.classList.add("d-none");
  }
}
function validateInputs(element) {
  var regex = {
    names: /^[A-Za-z_]{3,15}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^[A-Za-z0-9_]{8,}$/,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
// //////// login
let userNameValue = "";
let loginEmail = document.getElementById("loginEmail");
let loginPass = document.getElementById("loginPass");
let logIn = document.querySelector("#login");
let incorrect = document.getElementById("incorrect");

function loginnn() {
  for (var i = 0; i < usersList.length; i++) {
    console.log(usersList[i]);
    if (loginEmail.value == "" || loginPass.value == "") {
      incorrect.classList.remove("d-none");
    }
    if (
      loginEmail.value == usersList[i].email &&
      loginPass.value == usersList[i].Pass
    ) {
      userNameValue = usersList[i];
      console.log("UserName", userNameValue.UserName);

      localStorage.setItem("currentUser", usersList[i].UserName);
      location.href = "home.html";
    }
  }
}
let currentUser = localStorage.getItem("currentUser");
if (currentUser) {
  welUser.innerHTML = `Welcome ${currentUser}`;
}

// //////////////// home

let logout = document.querySelector("#logout");
function loggout() {
  localStorage.removeItem("currentUser");
}
