// Protect pages: allow access only if token exists
(function () {
  const token = localStorage.getItem("token");

  if (!token) {
    // Not logged in → redirect to login
    window.location.replace("login.html");
  }
})();
