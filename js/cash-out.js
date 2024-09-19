
// step:1
document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        // step:2
        const cashAmount=document.getElementById('cash-out-input').value;
        const cashAmountNumber=parseFloat(cashAmount)

        const cashPin=document.getElementById('cash-out-pin').value;
        console.log(cashAmount,cashPin)

        // step:3 verify pin
        if(cashPin === '1234'){
           const balance=document.getElementById('balance').innerText;
           const balanceNumber=parseFloat(balance);

           const newBalance= balanceNumber - cashAmountNumber;
        // step:4  updated new balance
            document.getElementById('balance').innerText =newBalance;

            
        }
        else{
            alert('Failed to cash out! please try again latter')
        }

})


