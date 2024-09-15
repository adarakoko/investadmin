

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
                  <td>${counter++}</td>
                   <td><img src="${allUser.imageUrl}" width="70px" height="70px" /></th>
                    <td>${allUser.username}</td>
                    <td>$${allUser.wallet}</td>
                  
                    <td>${allUser.withdrawals && allUser.withdrawals.map((depo => { 
                      return `<div class="chekas">
                      <div>
                        <div style="font-weight: bold;">ID</div>
                        <div>${depo.id}</div>
                      </div>
                        
                        <br>
                        <div>
                          <div style="font-weight: bold;">USERID</div>
                          <div>${depo.userId}</div>
                        </div>
                        
                        <br>

                        <div>
                          <div style="font-weight: bold;">AMOUNT</div>
                          <div>$${depo.amount}</div>
                        </div>
                        
                       <br>

                       <div>
                        <div style="font-weight: bold;">METHOD</div>
                        <div>${depo.withdrawType}</div>
                       </div>
                       
                       <br>

                       <div>
                        <div style="font-weight: bold;">ADDRESS</div>
                        <div>${depo.walletAddress}</div>
                       </div>
                       
                       <br>

                       <div>
                        <div style="font-weight: bold;">DATE</div>
                        <div>${depo.withdraw_date}</div>
                       </div>
                       
                       <br>

                       <div>
                          <div style="font-weight: bold;">STATUS</div>
                          <div>${depo.WithdrawStatus}</div>
                       </div>
                       
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
