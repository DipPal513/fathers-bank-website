//get all input 

const email = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');


submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let userEmail = email.value;
    let userPass = password.value;

    if(userEmail == 'user@gmail.com' && userPass == 'secret'){
        form.style.backgroundColor = 'lightgreen';
        submitBtn.style.backgroundColor = 'green';
        window.location.href = 'banking.html'
    }
    else{
        form.style.backgroundColor = 'darkred';
        submitBtn.style.backgroundColor = 'red';
        alert('please enter valid email and password')
    }
});






