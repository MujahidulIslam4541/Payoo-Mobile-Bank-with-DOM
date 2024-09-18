
// step:1 added by add money with event handler
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
       

        // step:2 get money to be added the amount
        const addMoney=document.getElementById('add-money-input').value;
        console.log(addMoney);
        // get the pin number
        const getThePinNumber=document.getElementById('add-money-pin').value;
        console.log( typeof getThePinNumber);

        // step:3 verify the pin number
        if(getThePinNumber==='1234'){
            console.log('adding amount your account')

            // step:4 get current balance
            const balance=document.getElementById('balance').innerText;
            console.log( typeof balance);

            // step:5 add addMoney with balance
            const addMoneyNumber=parseFloat(addMoney);
            const balanceNumber=parseFloat(balance);
            const newBalance= addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // step:6 Update balance DOM
            document.getElementById('balance').innerText = newBalance;



        }
        else{
            alert('Failed to add Money! please try again.')
        }

})