// console.log('file added')

// step:1 ---set event handler
document.getElementById('login-button').addEventListener('click', function(){
    console.log('login button clicked')

    // step:2--get the phone number
    const phoneNUmber=document.getElementById('phone-number').value;
    console.log(phoneNUmber);
})