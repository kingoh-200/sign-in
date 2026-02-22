const form = document.getElementById("form");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
e.preventDefault();
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

error.textContent = "";
success.textContent = "";

if (username === "") {
error.textContent = "Username is required";
return;
}

if (!email.includes("@")) {
error.textContent = "Enter valid email";
return;
}

if (password.length < 6) {
error.textContent = "Password must be at least 6 characters";
return;
}

success.textContent = "Registration successful!";
});