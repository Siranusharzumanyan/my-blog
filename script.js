const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberInput = document.getElementById("remember");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

 const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Մուտքագրեք վավեր էլ․ փոստ։";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent =
      "Գաղտնաբառը պետք է պարունակի առնվազն 8 նիշ, մեծատառ, փոքրատառ, թիվ և հատուկ նշան։";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    if (rememberInput.checked) {
      localStorage.setItem("savedEmail", emailInput.value);
      localStorage.setItem("savedPassword", passwordInput.value);
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }

    alert("You are logged in successfully.");
  }
});

window.onload = function () {
  const savedEmail = localStorage.getItem("savedEmail");
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedEmail && savedPassword) {
    emailInput.value = savedEmail;
    passwordInput.value = savedPassword;
    rememberInput.checked = true;
  }
};
