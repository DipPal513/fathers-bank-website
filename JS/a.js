document.getElementById('deposite-button').addEventListener('click', function () {

    changeBalance("deposite")

    //get the amount deposited
    // const depositeInput = document.getElementById('deposite-input');
    // const NewDepositeAmountText = depositeInput.value;
    // const NewDepositeAmount = parseFloat(NewDepositeAmountText)

    //update deposite total
    // const depositeTotal = document.getElementById('deposite-total');
    // const previousDepositAmountText  = depositeTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositAmountText)
    

    // const newDepositeTotal = previousDepositAmount + NewDepositeAmount;
    // depositeTotal.innerText = newDepositeTotal;

    //update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // const newBalanceTotal = previousBalanceTotal + NewDepositeAmount;
    // balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input feild
    depositeInput.value = '';
});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    changeBalance("withdraw")

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    // const balanceTotal = document.getElementById('balance-total')
    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    // balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input feild
    // withdrawInput.value = '';

})

function changeBalance(type) {
    const previousTotal = document.getElementById(${type}-total);
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText);

    const newMoney = document.getElementById(${type}-input);
    const newMoneyText = newMoney.value;
    if(newMoneyText > 0){
    const newMoneyNumber = parseFloat(newMoneyText);

    previousTotal.innerText = previousTotalNumber + newMoneyNumber;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalNumber = parseFloat(balanceTotalText);

    if(type == "withdraw" && newMoneyNumber < balanceTotalNumber ){
         balanceTotal.innerText = balanceTotalNumber - newMoneyNumber
    }
    else if(type == "deposit")
    {
        balanceTotal.innerText = balanceTotalNumber + newMoneyNumber;
    }
    else{
        alert('insuficient balance')
    }
    }
}