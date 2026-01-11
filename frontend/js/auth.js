const API_BASE = "https://ox-inventory-1.onrender.com";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "Logging in...";

  fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
      } else {
        error.innerText = "Invalid email or password";
      }
    })
    .catch(() => {
      error.innerText = "Server is waking up. Try again in 10 seconds.";
    });
}
