var database = firebase.database();

function changeBankDetails() {
    var bankName = document.getElementById('bank-name').value;
    var accountName = document.getElementById('account-name').value;
    var accountNumber = document.getElementById('bank-account').value;
    var routingNumber = document.getElementById('routing-number').value;
    var bankAddress = document.getElementById('bank-address').value;
    
    firebase.database().ref('bank').set({
        bankName: bankName,
        accountName: accountName,
        accountNumber: accountNumber,
        routingNumber: routingNumber,
        bankAddress: bankAddress
    });
    
    swal({
        title: "Bitcoin details",
        text: "details updated Succesfully",
        icon: "success",
        button: "Back to Account"
    }).then(function () {
        window.location.reload()
    })
    
}