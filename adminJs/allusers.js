

db.collection("Nusers").where('userId', '!=', '')
    .onSnapshot((querySnapshot) => {
        var Users = [];
        querySnapshot.forEach((doc) => {
          Users.push(doc.data());
          console.log("All Users: ", Users.join(" "))
          var counter = 1;
          var allUsersResult = Users.map((allUser) => {
            return `
                  <tr style="font-size: 13px;">
                    <td>${counter++}</td>
                    <td id="userIdDelete">${allUser.userId}</th>
                    <td><img src="${allUser.imageUrl}" width="70px" height="70px"/></td>
                    <td>${allUser.username}</td>
                    <td>${allUser.email}</td>
                    <td>${allUser.created_at}</td>
                    <td><button class="delBtn" onclick="deleteUser()"> Delete</button></td>
                  </tr>
          `
          }).join(' ')
          
            //cities.push(doc.data().name);
            document.getElementById('allUsers').innerHTML = allUsersResult;
        });

        
        //console.log("Current cities in CA: ", cities.join(", "));
});