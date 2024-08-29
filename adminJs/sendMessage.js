function sendMessage() {
    var messageTitle = document.getElementById('messageTitle').value;
    var userId = document.getElementById('userId').value;
    var messageBody = document.getElementById('messageBody').value;


    const today = new Date();
    var docRef = db.collection("Nusers").doc(userId);

    docRef.update({
        messages: firebase.firestore.FieldValue.arrayUnion(
            {   
                userId: userId,
                title: messageTitle,
                messageBody: messageBody,
                message_date: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate(),
                
            }
        )
            
            
    }, {merge: true})

    swal({
        title: "Message",
        text: "Message sent successfully",
        icon: "success",
        button: "Back to Message"
    }).then(function () {
        window.location.reload()
    })
}