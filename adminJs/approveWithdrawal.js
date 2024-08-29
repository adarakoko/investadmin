function approveWithdrawal() {
    var balance = document.getElementById('balance').value;
    var userId = document.getElementById('userId').value;
    var Id = document.getElementById('withdrawId').value;
    var amount = document.getElementById('amount').value;
    var walletAddress = document.getElementById('walletAddress').value;
    var withdrawSelect = document.getElementById('withdrawSelect').value;
    var withdrawStatus = document.getElementById('withdrawStatus').value;
    var Balance = parseInt(balance);
    var amountInt = parseInt(amount);


    var today = new Date();
    var docRef = db.collection("Nusers").doc(userId);

    docRef.update({
        
        wallet: Balance - amountInt,
        withdrawals: firebase.firestore.FieldValue.arrayUnion(
            {   
                id: Id,
                userId: userId,
                amount: amountInt,
                walletAddress: walletAddress,
                withdrawType: withdrawSelect,
                WithdrawStatus: withdrawStatus,
                withdraw_date: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate(),
            }
        )
            
            
    }, {merge: true})

    swal({
        title: "Withdrawal",
        text: "Withdrawal approved successfully",
        icon: "success",
        button: "Back to withdrawal"
    }).then(function () {
        window.location.reload()
    })
}