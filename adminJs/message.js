

db.collection("Nusers").where('userId', '!=', '')
    .onSnapshot((querySnapshot) => {
        var Users = [];
       
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          Users.push(doc.data());
          console.log("All Users1: ", Users)
          var allUsersResult = Users.map((allUser) => {
            console.log(typeof(Users))
              return `<div>
              <table class="table">
                <thead  class="tableHead">
                    <tr style="background-color:#000 !important; color:#fff !important; font-size: 15px;">
                      
                      <th scope="col">Username</th>
                      <th scope="col">Details</th>
                    
                    </tr>
                </thead>

                <tbody>
                  <tr style="font-size: 13px;">
                    <td>${allUser.username}</td>
                    <td>${allUser.messages.map((depo => { 
                      return `<div class="chekas">
                        <div>
                          <div style="font-weight: bold;">USERID</div>
                          <div>${depo.userId}</div>
                        </div>
                        
                        <br>
                        <div>
                          <div style="font-weight: bold;">TITLE</div>
                          <div>${depo.title}</div>
                        </div>
                        
                       <br>

                       <div>
                        <div style="font-weight: bold;">MESSAGE</div>
                        <div>${depo.messageBody}</div>
                       </div>
                       
                       <br>
                       <div>
                        <div style="font-weight: bold;">DATE</div>
                        <div>${depo.message_date}</div>
                       </div>
                       
                       <br>
                       <div>
                          <div style="display:flex;">
                            <button class="editBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Send Message</a></button>
                          </div>
                        </div>
                      </div>
                      <br>
                      `

                    })).join(' ')}</td>

                   

                   
                  
                  </tr>
                </tbody>

              </table>

              </div>
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
