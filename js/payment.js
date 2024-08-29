//let bitcoin = document.getElementById('btc');
let select = document.getElementById('paymentSelect');
let btcAddress = document.getElementById('btcAddress');
let usdtAddress = document.getElementById('usdtAddress');

function checkPayment(){
    
    if (select.value == 'BITCOIN'){
        console.log('worked');
        btcAddress.style.display = 'block';
        usdtAddress.style.display = 'none';
    }else if(select.value == 'USDTTRC20'){
        usdtAddress.style.display = 'block';
        btcAddress.style.display = 'none';
    
    }else if(select.value == '') {
        alert('Choose either BITCOIN or USDT TRC')
    } else {
        console.log('select an option')
    }
}


    