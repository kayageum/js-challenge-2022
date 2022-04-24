const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeging = document.querySelector("#greeting");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function loginHandler(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeging(username);
}

function showGreeging(username) {
  greeging.classList.remove(HIDDEN_CLASSNAME);
  greeging.innerText = "Hello " + username;
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginHandler);
} else {
  showGreeging(savedUsername);
}
