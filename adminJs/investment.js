

db.collection("Nusers").where('userId', '!=', ' ')
    .onSnapshot((querySnapshot) => {
        var Users2 = [];
       
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          Users2.push(doc.data());
          console.log("All Users2: ", Users2)
          var counter1 = 1;
          var allUsersResult = Users2.map((allUser) => {
            console.log(typeof(Users2))
              return `
            
                  <tr style="font-size: 13px;">
                  <td>${counter1++}</td>
                  <td><img src="${allUser.imageUrl}" width="70px" height="70px" /></th>
                    <td>${allUser.username}</td>
                    <td>$${allUser.wallet}</td>
                    <td>$${allUser.bonus}</td>
                    
                    <td>${allUser.investments.map((depo => { 
                      return `<div class="chekas">
                      <div>98po
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
                          <div style="font-weight: bold;">INVESTTYPE</div>
                          <div>${depo.typeOfInvestment}</div>
                        </div>
                        
                        <br>
                        <div>
                          <div style="font-weight: bold;">PROFIT</div>
                          <div>$${depo.profit}</div>
                        </div>
                        
                        <br>
                        <div>
                          <div style="font-weight: bold;">INVESTRETURN</div>
                          <div>$${depo.returnsOnInvestment}</div>
                        </div>
                        
                        <br>
                        
                        <div>
                          <div style="font-weight: bold;">MATURITY</div>
                          <div>${depo.maturity_date}</div>
                        </div>
                        
                        <br>
                        <div>
                          <div style="font-weight: bold;">STATUS</div>
                          <div>${depo.investStatus}</div>
                        </div>
                        
                        <br>
                        <div style="display: flex;">
                          <button class="editBtn" onclick="approveInvestment()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Approve</a></button>
                          <button class="delBtn" onclick="rejectInvestment()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling2" role="button" aria-controls="offcanvasScrolling">Reject</a></button>
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

/*<div>${depo.id}</div>
    <br>
    <div>${depo.userId}</div>
    <br>
    <div>$${depo.amount}</div>
    <br>
    <div>${depo.typeOfInvestment}</div>
    <br>
    <div>$${depo.profit}</div>
    <br>
    <div>$${depo.returnsOnInvestment}</div>
    <br>
    <div>${depo.invest_date}</div>
    <br>
    <div>${depo.maturity_date}</div>
    <br>
    <div>${depo.investStatus}</div>
    <br>
    <div></div>*/
