var database = firebase.database();

function changeUsdtAddress() {
    var usdtValue = document.getElementById('usdt-address').value;
    var file = document.getElementById('usdt-photo').files[0];
    

    
    const kname = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    }

    const ref = firebase.storage().ref();

    const task = ref.child(kname).put(file, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
        
        firebase.database().ref('usdt').set({
            usdtAddress: usdtValue,
            imageUrl: url
        });
        
        swal({
            title: "USDT TRC20 details",
            text: "details updated Succesfully",
            icon: "success",
            button: "Back to Account"
        }).then(function () {
            window.location.reload()
        })
    })
    
}