// show the cash out button
document.getElementById('show-btn-cash-out')
    .addEventListener('click' , function(){

        // show the cash out from button clicked
        document.getElementById('cash-out-form').classList.remove('hidden');

        // hide the add money form
        document.getElementById('add-money-form').classList.add('hidden');

})

// show the add money button
document.getElementById('show-add-money-form')
    .addEventListener('click', function(){

        document.getElementById('add-money-form').classList.remove('hidden');

        document.getElementById('cash-out-form').classList.add('hidden');
        
})