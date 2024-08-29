const logoutbtn = document.getElementById('logout-btn').onclick = ((e) => {
    e.preventDefault();

  
    swal({
        title: "Admin",
        text: "Logged Out",
        icon: "success",
        button: "Proceed to Login"
    }).then(function () {
        window.location.href = '/index.html';
    })
        
}) 
    