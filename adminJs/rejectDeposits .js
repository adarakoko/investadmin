function rejectDeposits() {
    var balance = document.getElementById('balance').value;
    var userId = document.getElementById('userId').value;
    var Id = document.getElementById('paymentId').value;
    var amount = document.getElementById('amount').value;
    var paymentType = document.getElementById('paymentSelect').value
   var paymentStatus = document.getElementById('paymentStatus').value;
    var depositAmount = parseInt(amount);
    var Balance = parseInt(balance);


    const today = new Date();
    var docRef = db.collection("Nusers").doc(userId);

    docRef.update({
        
        wallet: Balance,
        deposits: firebase.firestore.FieldValue.arrayUnion(
            {   
                id: Id,
                userId: userId,
                amount: depositAmount,
                paymentType: paymentType,
                payment_date: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate(),
                paymentStatus: paymentStatus
            }
        )
            
            
    }, {merge: true})

    swal({
        title: "Deposit",
        text: "Deposit rejected successfully",
        icon: "success",
        button: "Back to Deposit"
    }).then(function () {
        window.location.reload()
    })
}