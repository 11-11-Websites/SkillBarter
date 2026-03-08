// js/request.js
function requestSkill(skillId){
    const user = auth.currentUser;
    if (!user) {
        alert("Please login first.");
        return;
    }

    db.collection("requests").add({
        skillId: skillId,
        requester: user.uid,
        status: "Pending",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("Request Sent");
    }).catch(err => {
        alert("Error sending request: " + err.message);
        console.error(err);
    });
}
