function editUser(){
  console.log('clicked');
}

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
              <td>${allUser.username}</th>
              <td><img src="${allUser.imageUrl}" width="70px" height="70px" /></th>
              <td>${allUser.userId}</td>
              <td>${allUser.wallet}</td>
              <td>${allUser.bonus}</td>
              <td>${allUser.wallet + allUser.bonus}</td>
            
              </tr>
          `
          }).join(' ')
          
            //cities.push(doc.data().name);
            document.getElementById('allUsers').innerHTML = allUsersResult;
        });

        
        //console.log("Current cities in CA: ", cities.join(", "));
});