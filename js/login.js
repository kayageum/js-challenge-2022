const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginHandler(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", loginHandler);