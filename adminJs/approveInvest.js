function approveInvest() {
    var balance = document.getElementById('balance').value;
    var userId = document.getElementById('userId').value;
    var Id = document.getElementById('Id').value;
    var amount = document.getElementById('amount').value;
    var amountInt = parseInt(amount);
    var investType = document.getElementById('investType').value;
    var investStatus = document.getElementById('status').value;
    var profit = document.getElementById('profit').value;
    var profitInt = parseInt(profit);
    var earnings = document.getElementById('earnings').value;
    var earningsInt = parseInt(earnings);
    var investReturn = document.getElementById('investReturn').value;
    var investReturnInt = parseInt(investReturn);
    var Balance = parseInt(balance);


    var today = new Date();
    var priorDate = new Date(new Date().setDate(today.getDate() + 56));
    var formatPriorDate = priorDate.toLocaleDateString("en-US");
    var docRef = db.collection("Nusers").doc(userId);

    docRef.update({
        
        wallet: Balance,
        bonus: profitInt + earningsInt,
        investments: firebase.firestore.FieldValue.arrayUnion(
            {   
                id: Id,
                userId: userId,
                amount: amountInt,
                typeOfInvestment: investType,
                profit: profitInt,
                returnsOnInvestment: investReturnInt,
                maturity_date: formatPriorDate,
                investStatus: investStatus,
                
            }
        )
            
            
    }, {merge: true})

    swal({
        title: "Investment",
        text: "Investment approved successfully",
        icon: "success",
        button: "Back to Profile"
    }).then(function () {
        window.location.reload()
    })
}