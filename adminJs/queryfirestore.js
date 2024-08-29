function editUser(){
  console.log('clicked');
}

db.collection("Nusers").where('userId', '!=', '')
    .onSnapshot((querySnapshot) => {
        var Users = [];
        querySnapshot.forEach((doc) => {
          Users.push(doc.data());
          console.log("All Users: ", Users.join(" "))
          var allUsersResult = Users.map((allUser) => {
            return `<div>
            <table class="table">
              <thead  class="tableHead">
                  <tr style="background-color:#000 !important; color:#fff !important; font-size: 15px;">
                  <th scope="col">Name</th>
                  <th scope="col">userId</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Earnings</th>
                  <th scope="col">Roi</th>
                 
                  </tr>
              </thead>

              <tbody>
                  <tr style="font-size: 13px;">
                  <td>${allUser.username}</th>
                  <td>${allUser.userId}</td>
                  <td>${allUser.wallet}</td>
                  <td>${allUser.bonus}</td>
                  <td>${allUser.wallet + allUser.bonus}</td>
                
                  </tr>
              </tbody>

            </table>

          </div>
          `
          }).join(' ')
          
            //cities.push(doc.data().name);
            document.getElementById('allUsers').innerHTML = allUsersResult;
        });

        
        //console.log("Current cities in CA: ", cities.join(", "));
});