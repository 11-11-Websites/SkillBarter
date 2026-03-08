// js/auth.js

function register() {
  const email = document.getElementById("email").value.trim();
  const pass  = document.getElementById("password").value.trim();

  console.log("Register clicked", { email });

  if (!email || !pass) {
    alert("Please enter email and password.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, pass)
    .then((cred) => {
      console.log("Registered user:", cred.user);
      alert("Registered Successfully");
      window.location = "dashboard.html";
    })
    .catch(err => {
      console.error("Register error:", err);
      alert(err.message);
    });
}

function login() {
  const email = document.getElementById("email").value.trim();
  const pass  = document.getElementById("password").value.trim();

  console.log("Login clicked", { email });

  if (!email || !pass) {
    alert("Please enter email and password.");
    return;
  }

  auth.signInWithEmailAndPassword(email, pass)
    .then((cred) => {
      console.log("Login success:", cred.user);
      window.location = "dashboard.html";
    })
    .catch(err => {
      console.error("Login error:", err);
      alert(err.message);
    });
}
