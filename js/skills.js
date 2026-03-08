// js/skills.js

function addSkill() {
  const courseName  = document.getElementById("courseName").value.trim();
  const barterSkill = document.getElementById("barterSkill").value.trim();
  const personName  = document.getElementById("personName").value.trim();
  const phone       = document.getElementById("phone").value.trim();
  const user        = auth.currentUser;

  if (!user) {
    alert("You are not logged in. Please log in again.");
    console.error("auth.currentUser is null");
    window.location.href = "index.html";
    return;
  }

  if (!courseName || !barterSkill || !personName || !phone) {
    alert("Please fill all fields.");
    return;
  }

  db.collection("skills").add({
    userId: user.uid,
    courseName: courseName,
    barterSkill: barterSkill,
    personName: personName,
    phone: phone,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Course Added Successfully");
    document.getElementById("courseName").value  = "";
    document.getElementById("barterSkill").value = "";
    document.getElementById("personName").value  = "";
    document.getElementById("phone").value       = "";
  })
  .catch(err => {
    alert("Error adding course: " + err.message);
    console.error(err);
  });
}
