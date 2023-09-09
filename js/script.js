let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    const income = parseFloat(document.getElementById("income").value);
    if (!isNaN(income)) {
        totalIncome += income;
        updateTotals();
        document.getElementById("income").value = "";
    }
}

function addExpense() {
    const expense = parseFloat(document.getElementById("expense").value);
    if (!isNaN(expense)) {
        totalExpense += expense;
        updateTotals();
        document.getElementById("expense").value = "";
    }
}

function updateTotals() {
    document.getElementById("totalIncome").textContent = "$" + totalIncome.toFixed(2);
    document.getElementById("totalExpense").textContent = "$" + totalExpense.toFixed(2);
}