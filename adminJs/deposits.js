

db.collection("Nusers").where('userId', '!=', ' ')
.onSnapshot((querySnapshot) => {
    var Users1 = [];
    querySnapshot.forEach((doc) => {
      if(doc.data().deposits){
        //console.log(doc.data().deposits);
        Users1.push(doc.data());
        console.log(Users1)
        let counter  = 1;
        let allDeposits =  Users1.map((fund) => {
          return `<tr>
            <td>${counter++}</td>
            <td><img src="${fund.imageUrl}" width="70px" height="70px" /></td>
            <td>${fund.username}</td>
            <td>$${fund.wallet}</td>
            <td>${fund.deposits.map((depi => { 
                return `<div class="chekas">
                <div>
                  <div style="font-weight: bold;">ID</div>
                  <div>${depi.id}</div>
                </div>
                  <br>
                  <div>
                    <div style="font-weight: bold;">USERID</div>
                    <div>${depi.userId}</div>
                  </div>
                  
                  <br>
                  <div>
                    <div style="font-weight: bold;">AMOUNT</div>
                    <div>$${depi.amount}</div>
                  </div>
                  
                  <br>
                  <div>
                    <div style="font-weight: bold;">INVESTTYPE</div>
                    <div>${depi.paymentType}</div>
                  </div>
                  
                  <br>
                  <div>
                    <div style="font-weight: bold;">PROFIT</div>
                    <div>${depi.payment_date}</div>
                  </div>
                  
                  <br>
                  <div>
                    <div style="font-weight: bold;">INVESTRETURN</div>
                    <div>${depi.paymentStatus}</div>
                  </div>
                  
                  <br>

                  <div style="display: flex;">
                    <button class="editBtn" onclick="updateDeposits()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">Approve</a></button>
                    <button class="delBtn" onclick="rejectDeposits()"><a class="" data-bs-toggle="offcanvas" href="#offcanvasScrolling2" role="button" aria-controls="offcanvasScrolling">Reject</a></button>
                  </div>
                    
          

                  
                    
                  
                </div>
                <br>
                `

              })).join(' ')}</td>
          </tr>
          `

          
        })

        document.getElementById('allUsers').innerHTML = allDeposits;
      }else{
        console.log('no such document')
      }
    
    })
});    