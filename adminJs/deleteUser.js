function deleteUser() {
  
    var userId = document.getElementById('userIdDelete').innerText;
    console.log(userId);
    // User deleted.
    db.collection("Nusers").doc(userId).delete();

    swal({
        title: "Account Deletion",
        text: "Account deleted successfully",
        icon: "success",
        button: "Back to Profile"
    }).then(function () {
        window.location.reload()
    })
}