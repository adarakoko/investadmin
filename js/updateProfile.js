//const user = firebase.auth().currentUser;

function editProfile() {
    console.log('clicked');
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user.uid);
        if (user) {
            var profileUsername = document.getElementById('profileUsername').value;
            var profileEmail = document.getElementById('profileEmail').value;
            console.log(profileUsername);
             db.collection("Nusers").doc(user.uid).update({
                username: profileUsername,
                email: profileEmail
             })
             swal({
                title: "Profile",
                text: "Profile updated successfully",
                icon: "success",
                button: "Back to Profile"
            }).then(function () {
                window.location.reload()
            })
        } else {
          // User is signed out
          // ...
        }
    });
}









