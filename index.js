const income = document.getElementById('income-field');
const balance = document.getElementById('balance');
document.getElementById('calculateBtn').addEventListener('click', function () {
    const food = document.getElementById('food-field');
    const rent = document.getElementById('rent-field');
    const cloth = document.getElementById('cloth-field');

    const expenseField = document.getElementById('total-expense');
    const totalExpense = parseInt(food.value) + parseInt(rent.value) + parseInt(cloth.value);

    expenseField.innerText = totalExpense;
    balance.innerText = income.value - totalExpense;

    // income.value = '';
    // food.value = '';
    // rent.value = '';
    // cloth.value = '';
})

document.getElementById('saveBtn').addEventListener('click', function () {

    const savefield = document.getElementById('save-field');
    const savingAmount = document.getElementById('saving-amount');

    const save = parseFloat(savefield.value);

    const totalSave = parseFloat(income.value) * (save / 100);
    savingAmount.innerText = totalSave;

    const remainingBalanceField = document.getElementById('ramaining-balance');
    const remainingBalance = parseFloat(balance.innerText) - parseFloat(totalSave);
    remainingBalanceField.innerText = remainingBalance;
})