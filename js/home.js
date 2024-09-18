
// step:1 added by add money with event handler
document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        console.log('added by add money button')

        // step:2 get money to be added the amount
        const addMoney=document.getElementById('add-money-input').value;
        console.log(addMoney);
        // get the pin number
        const getThePinNumber=document.getElementById('add-money-pin').value;
        console.log(getThePinNumber);

})