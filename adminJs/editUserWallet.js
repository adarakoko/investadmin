function editUserWallet() {
    var userId = document.getElementById('userId').value;
   var accountBalance = document.getElementById('accountBalance').value;
   var earnings = document.getElementById('earnings').value;
   var roi = document.getElementById('roi').value;

   var account = parseInt(accountBalance);
   var earn = parseInt(earnings);
   var roiValue = parseInt(roi);

   db.collection("Nusers").doc(userId).update({
        bonus: earn,
        roi: roiValue,
        wallet: account
    })

    swal({
        title: "Profile",
        text: "Profile updated successfully",
        icon: "success",
        button: "Back to Profile"
    }).then(function () {
        window.location.reload()
    })
}