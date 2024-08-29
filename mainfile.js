
const loginBtn = document.getElementById('login').onclick = ((e) => {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   if(email === 'admin@homy.com' && password === 'admin123'){
        swal({
            title: "Admin Login",
            text: "Login Successful",
            icon: "success",
            button: "Proceed to Dashboard"
        }).then(function () {
            window.location.href = './adminJs/overview.html';
        })
        
   } else {
    swal({
        title: "Admin Login",
        text: "Invalid Login Credentials",
        icon: "error",
        button: "Try Again"
    }).then(function () {
        window.location.reload();
    })
   }
}) 


