

db.collection("Nusers").where('userId', '!=', '')
    .onSnapshot((querySnapshot) => {
        var Users = [];
       
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          Users.push(doc.data());
          console.log("All Users1: ", Users)
          var counter = 1;
          var allUsersResult = Users.map((allUser) => {
            console.log(typeof(Users))
              return `
             

                  <tr style="font-size: 13px;">
                  <td>${counter}</td>
                    <td><img src="${allUser.imageUrl}" width="70px" height="70px" /></th>
                    <td>${allUser.username}</td>
                    <td>$${allUser.wallet}</td>
                    <td>${allUser.deposits.map((depo => { 
                      return `<div class="chekas">
                        <div>${depo.id}</div>
                        <br>
                        <div>${depo.userId}</div>
                        <br>
                       <div>$${depo.amount}</div>
                       <br>
                       <div>${depo.paymentType}</div>
                       <br>
                       <div>${depo.payment_date}</div>
                       <br>
                       <div>${depo.paymentStatus}</div>
                       <br>
                       <div>
                          <div style="display:flex;">
                            <button class="editBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Approve</a></button>
                            <button class="delBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling2" role="button" aria-controls="offcanvasScrolling">Reject</a></button>
                          </div>
                        </div>
                      </div>
                      <br>
                      `

                    })).join(' ')}</td>

                   

                   
                  
                  </tr>
              
              `
          }).join(' ')
          
            //cities.push(doc.data().name);
            document.getElementById('allUsers').innerHTML = allUsersResult;
        });
});





/*<tbody>
  <tr style="font-size: 13px;">
    <td id="userIdDelete">${allUser.userId}</th>
    <td>${allUser.username}</td>
    <td>${allUser.deposits.find(function(element) {
      return element.hasOwnProperty("amount");
  }).amount}</td>

    <td>${allUser.deposits.find(function(element) {
      return element.hasOwnProperty("payment_date");
  }).payment_date}</td>

    <td>${allUser.deposits.find(function(element) {
      return element.hasOwnProperty("paymentStatus");
  }).paymentStatus}</td>

    <td style="display:flex;"><button class="editBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Approve</a></button><button class="delBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Reject</a></button></td>
    <td></td>
  </tr>
</tbody>*/
