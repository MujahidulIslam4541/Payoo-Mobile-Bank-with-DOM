

// step:1 ---set event handler
document.getElementById('login-button').addEventListener('click', function(event){

    // step:2--added preventdefault method 
    event.preventDefault();
    console.log('login button clicked')

    // step:3--get the phone number
    const phoneNUmber=document.getElementById('phone-number').value;
    console.log(phoneNUmber);

    // step:4 added the pin number
    const pinNumber=document.getElementById('pin-number').value;
    console.log(pinNumber);

    // step:5 this is temporary
    if(phoneNUmber==='01' && pinNumber==='1234'){
        console.log('You are logged in')
        window.location.href='./home-page.html'
    }
    else{
        alert('Wrong Phone Number or pin');
    }
})