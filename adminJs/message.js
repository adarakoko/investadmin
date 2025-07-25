

// db.collection("Nusers").where('userId', '!=', '')
//     .onSnapshot((querySnapshot) => {
//         var Users = [];
       
//         querySnapshot.forEach((doc) => {
//           console.log(doc.data());
//           Users.push(doc.data());
//           console.log("All Users1: ", Users)
//           var counter = 1;
//           var allUsersResult = Users.map((allUser) => {
//             console.log(typeof(Users))
//               return `
              
//                   <tr style="font-size: 13px;">
//                   <td>${counter++}</td>
//                   <td><img src="${allUser.imageUrl}" width="70px" height="70px" /></th>
//                     <td>${allUser.username}</td>
//                     <td>${allUser.messageBody.map((depo => { 
//                       return `<div class="chekas">
//                         <div>
//                           <div style="font-weight: bold;">USERID</div>
//                           <div>${depo.userId}</div>
//                         </div>
                        
//                         <br>
//                         <div>
//                           <div style="font-weight: bold;">TITLE</div>
//                           <div>${depo.title}</div>
//                         </div>
                        
//                        <br>

//                        <div>
//                         <div style="font-weight: bold;">MESSAGE</div>
//                         <div>${depo.messageBody}</div>
//                        </div>
                       
//                        <br>
//                        <div>
//                         <div style="font-weight: bold;">DATE</div>
//                         <div>${depo.message_date}</div>
//                        </div>
                       
//                        <br>
//                        <div>
//                           <div style="display:flex;">
//                             <button class="editBtn" onclick="deleteUser()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Send Message</a></button>
//                           </div>
//                         </div>
//                       </div>
//                       <br>
//                       `

//                     })).join(' ')}</td>

                   

                   
                  
//                   </tr>
               
//               `
//           }).join(' ')
          
//             //cities.push(doc.data().name);
//             document.getElementById('allUsers').innerHTML = allUsersResult;
//         });
// });

// 

db.collection("Nusers").where('userId', '>', '') 
  .onSnapshot((querySnapshot) => {
    let Users = [];

    querySnapshot.forEach((doc) => {
      Users.push(doc.data());
    });

    console.log("All Users: ", Users);

    // Filter users that have messages array and at least one message with messageBody
    const filteredUsers = Users.filter(user =>
      Array.isArray(user.messages) &&
      user.messages.some(msg => msg.messageBody && msg.messageBody.trim() !== "")
    );

    let counter = 1;
    const allUsersResult = filteredUsers.map((allUser) => `
        <tr style="font-size: 13px;">
          <td>${counter++}</td>
          <td><img src="${allUser.imageUrl || 'default.png'}" width="70px" height="70px" /></td>
          <td>${allUser.username || ''}</td>
          <td>
            ${allUser.messages
              .filter(msg => msg.messageBody && msg.messageBody.trim() !== "")
              .map((depo) => `
                <div class="chekas">
                  <div>
                    <div style="font-weight: bold;">USERID</div>
                    <div>${depo.userId || ''}</div>
                  </div>
                  <br>
                  <div>
                    <div style="font-weight: bold;">TITLE</div>
                    <div>${depo.title || ''}</div>
                  </div>
                  <br>
                  <div>
                    <div style="font-weight: bold;">MESSAGE</div>
                    <div>${depo.messageBody || ''}</div>
                  </div>
                  <br>
                  <div>
                    <div style="font-weight: bold;">DATE</div>
                    <div>${depo.message_date || ''}</div>
                  </div>
                  <br>
                  <div style="display:flex;">
                    <button class="editBtn" onclick="deleteUser()">
                      <a data-bs-toggle="offcanvas" href="#offcanvasScrolling" 
                         role="button" aria-controls="offcanvasScrolling">
                        Send Message
                      </a>
                    </button>
                  </div>
                </div><br>
              `).join('')}
          </td>
        </tr>
    `).join('');

    document.getElementById('allUsers').innerHTML = allUsersResult;
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
