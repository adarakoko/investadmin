var database = firebase.database();

function changeBtcAddress() {
    var bitcoinValue = document.getElementById('btc-address').value;
    var file = document.getElementById('btc-photo').files[0];
    

    
    const kname = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    }

    const ref = firebase.storage().ref();

    const task = ref.child(kname).put(file, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
        
        firebase.database().ref('bitcoin').set({
            bitcoinAddress: bitcoinValue,
            imageUrl: url
        });
        
        swal({
            title: "Bitcoin details",
            text: "details updated Succesfully",
            icon: "success",
            button: "Back to Account"
        }).then(function () {
            window.location.reload()
        })
    })
    
}