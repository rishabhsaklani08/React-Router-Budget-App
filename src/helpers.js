export const waait = () => new Promise(res =>
    setTimeout(res, Math.random() * 2000))

// color
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50% `
}

//Local Storage --> The code will fetch the value of
//the key from localStorage and return it
//as a JSON object.
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create Budget
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

// delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}