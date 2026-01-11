// Protect pages: only allow access if token exists
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}
