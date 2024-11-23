const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.getElementById("button");

password.addEventListener("input", function () {
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;

  let strengthValue = "";

  if (passwordLength === 0) {
    strengthValue = "";
  } else if (passwordLength < 5) {
    strengthValue = "Weak";
  } else if (passwordLength < 10) {
    strengthValue = "Medium";
  } else {
    strengthValue = "Strong";
  }

  strength.textContent = strengthValue;

});

function displayMsg() {
  
  if (!message.style.display || message.style.display == "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

function show() {
  var x = document.getElementById("password");
  if (x.type == "password") {
    x.type = "text";
    document.getElementById("showimage").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showimage").src =
      "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  }
}
