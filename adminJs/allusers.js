

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
                    <th scope="col">User Id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                  </tr>
              </thead>

              <tbody>
                  <tr style="font-size: 13px;">
                    <td id="userIdDelete">${allUser.userId}</th>
                    <td>${allUser.username}</td>
                    <td>${allUser.email}</td>
                    <td>${allUser.created_at}</td>
                    <td><button class="delBtn" onclick="deleteUser()"> Delete</button></td>
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