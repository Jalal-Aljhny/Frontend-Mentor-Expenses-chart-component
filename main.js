const expenses = document.querySelectorAll(
  ".container div:nth-child(2) ul li span"
);

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    let maxAmount = 0;
    let maxExpense;

    expenses.forEach((expense) => {
      const day = expense.parentElement.textContent.trim().toLowerCase();
      const item = data.find((item) => item.day === day);
      if (item) {
        expense.style.height = `${item.amount * 2}px`;
        const amount = item.amount;
        if (amount > maxAmount) {
          maxAmount = amount;
          maxExpense = expense;
        }
      }
    });
    if (maxExpense) {
      maxExpense.style.backgroundColor = "#76b5bc";
    }
  } catch (error) {
    console.log("Error fetching:", error);
  }
}

fetchData();
