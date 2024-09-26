const userBudget = document.querySelector("#budgetEntry");
const enterBudget = document.querySelector("#enter");
const budgetEntry = document.querySelector(".budgetEntry");
const budgetDetails = document.querySelector(".budgetDetails");
const budgetShow = document.querySelector("#budget");
const amountRemaining = document.querySelector("#amountRemaining");
const userExpense = document.querySelector(".expdetail");
const userExpenseValue = document.querySelector(".expamount");
const expenseList = document.querySelector("#expenseList");
const addExpense = document.querySelector("#add");
const totalExpense = document.querySelector("#totalexp");
let body = document.body;
let expense = 0;
budgetDetails.style.display = "none";
enterBudget.addEventListener("click", () => {
  if (userBudget.value == "") {
    alert("Input your budget");
  } else {
    budgetDetails.style.display = "block";
    budgetEntry.style.display = "none";
    budgetValue();
  }
});
function budgetValue() {
  budgetShow.innerHTML = `&#8358;${userBudget.value}`;
  amountRemaining.innerHTML = `&#8358;${userBudget.value}`;
}
addExpense.addEventListener("click", () => {
  createList();
  savedata();
});
function createList() {
  if (userExpense.value == "" || userExpenseValue.value == "") {
    alert("Input Expenses");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = userExpense.value;
    const span = document.createElement("span");
    span.innerHTML = `&#8358;${parseInt(userExpenseValue.value)}`;
    let img = document.createElement("img");
    img.src = "delete icon.png";
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(img);
    expenseList.append(li);

    evaluateExpense();
    remove(img, li);

    userExpense.value = "";
    userExpenseValue.value = "";
    savedata();
  }
}
function evaluateExpense() {
  let expenseValue = parseInt(userExpenseValue.value);
  expense += expenseValue;
  totalExpense.innerHTML = `&#8358;${expense}`;
  evaluateAmount(expense);
  savedata();
}
function evaluateAmount(expense) {
  let amount = parseInt(userBudget.value);
  amount -= expense;

  if (amount < userBudget.value / 2) {
    amountRemaining.style.color = "red";
  }
  amountRemaining.innerHTML = `&#8358;${amount}`;
  savedata();
}
function remove(img, li) {
  img.addEventListener("click", () => {
    li.innerHTML = "";
    let expenseValue = parseInt(userExpenseValue.value);
    expense -= expenseValue;
    savedata();
  });
}
