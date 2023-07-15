document.getElementById('Calculate-btn').addEventListener("click" , function(){
    // console.log('connected');
    getElementValueById();
})



function getElementValueById(){
    const income = document.getElementById('income-input-field').value;

    // const totalExpenses = document.getElementById(elementId);
    
    const food = document.getElementById('food-input-field').value;
    const rent = document.getElementById('rent-input-field').value;
    const clothes = document.getElementById('clothes-input-field').value;
    
   
    const sum = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = sum;
    // setInnerText('total-expenses' , sum); 
    
    
    const totalMoney = parseFloat(income) - sum;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = totalMoney;
    // setInputValue('income-input-field' , totalMoney);
    
    if(income <= 0 || food <= 0 || rent <= 0 || clothes <= 0 || typeof input !== 'number'){
        // console.log(alert('please enter a valid number'));
        sum = '00';
        totalExpenses.innerText = '00';
        return alert('please enter a valid number');
    }
    // else if(income > totalExpenses){
    //     return alert('income er thika khoroch besi hoy kivabe');
    // }
    // else if(totalExpenses !== 'number' || totalExpenses <=0){
    //     return totalExpenses.innerText = '';
    // }
}

// function getElementById(income, food , rent, clothes){
//     const income = document.getElementById('income-input-field').value;
//     const food = document.getElementById('food-input-field').value;
//     const rent = document.getElementById('rent-input-field').value;
//     const clothes = document.getElementById('clothes-input-field').value;
// }

// SET INNER TEXT:-
// function setInnerText(elementId , value){
//     const totalExpenses = document.getElementById(elementId);
//     totalExpenses.InnerText = value;
// }

// SET INPUT VALUE:-
// function setInputValue(elementId , value){
//     // const income = document.getElementById(elementId);
//     // income.value = value;
// }

document.getElementById('save-btn').addEventListener("click" , function(){
    const totalBalance = document.getElementById('total-balance').innerText;
    const saveInputField = document.getElementById('save-input-field').value;
    const priveousTotalBalance = parseFloat(totalBalance) * 0.2;
    const newSaveInputField = totalBalance - priveousTotalBalance;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = priveousTotalBalance;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = newSaveInputField;
    // console.log(newSaveInputField);
    // if(typeof saveInputField.value !== 'number'){
    //     return alert('please type a valid number');
    // }
})
