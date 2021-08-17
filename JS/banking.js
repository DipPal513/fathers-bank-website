//banking site 



// handle deposite button event 

// const depositBtn = document.querySelector('#deposit-btn');
// const depositInput = document.querySelector('#deposit-input');


// depositBtn.addEventListener('click',function(){
//     let userDepositInput= parseFloat(depositInput.value);
//     const depositTotal = document.querySelector('#currentDepositAmount');
//    if(userDepositInput <= 0){
//        alert('please enter a valid amount')
//    }
//    else{
//     const previousDepositAmount =parseFloat(depositTotal.innerText);
//     const updatedDepositTotal=userDepositInput + previousDepositAmount;
//     totalBalance.innerText = updatedDepositTotal;
//     depositTotal.innerHTML = updatedDepositTotal;
//     depositInput.value = '';
//    }
// });

// //handle with withdraw button event
// const totalBalance = document.querySelector('#totalAmount');
// const withdrawBtn = document.querySelector('#withdraw-btn');
// const withdrawInput = document.querySelector('#withdraw-input');
// const withdrawTotal = document.querySelector('#currentwithdrawAmount');

// withdrawBtn.addEventListener('click',function(){
//     let userWithdrawInput = parseFloat(withdrawInput.value);
//     if(userWithdrawInput <= 0){
//         alert('please enter a valid amount')
//     }
//     else{

//         let previousWithdrawAmount =parseFloat(withdrawTotal.innerText);
//         const finalWithdraw =  userWithdrawInput + previousWithdrawAmount
//         withdrawTotal.innerText =finalWithdraw;
//         let currTotal = parseFloat(totalBalance.innerText);
//         let finalTotal = currTotal - finalWithdraw
//         totalBalance.innerText = finalTotal;
//         userWithdrawInput = '';
//     }
// })

// advance code


document.querySelector('#deposit-btn').addEventListener('click',function(){changeBalance('deposit')});
document.querySelector('#withdraw-btn').addEventListener('click',function(){changeBalance('withdraw')});
function changeBalance(type){
    let previousTotal = document.getElementById(`${type}-total`);
    let previousTotalNumber = parseFloat(previousTotal.innerText)
    let userInput = document.getElementById(`${type}-input`);
    let userInputNumber  = parseFloat(userInput.value);
    previousTotal.innerText = previousTotalNumber + userInputNumber;

    userInput.value = '';
    const balanceTotal = document.getElementById('balance-total');
    let balanceTotalNumber = parseFloat(balanceTotal.innerText)
    if(userInputNumber <= 0){
        alert('you cannot give empty or negitave value');
    }
    else{
        if(type == 'withdraw'){
            if(userInputNumber > balanceTotalNumber){
                alert('insufficient balance')
            }
            else{
                balanceTotal.innerText = balanceTotalNumber - userInputNumber;
            }
        }
        
        else if(type == 'deposit'){
            balanceTotal.innerText = userInputNumber + balanceTotalNumber;
        }
    }
    
}