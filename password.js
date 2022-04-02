let password = document.querySelector("#pw");
let confirm_password = document.querySelector("#confirm-pw");
let error_message = document.querySelector('#error-message');

password.onchange = () => validate_pw();
confirm_password.onkeyup = () => validate_pw();

function validate_pw(){
  if (password.value != confirm_password.value || password.value.length === 0){
    password.classList.add("error")
    confirm_password.classList.add("error")
    confirm_password.setCustomValidity("Error: Passwords don't match. Please try again.");
    error_message.style.opacity = '100%'
  }
  else{
    password.classList.remove("error")
    confirm_password.classList.remove("error")
    confirm_password.setCustomValidity("");
    error_message.style.opacity = '0%'
  }
}

password.classList.add("error")
confirm_password.classList.add("error")
error_message.style.opacity = '100%'