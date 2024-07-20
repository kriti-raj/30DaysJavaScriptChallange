// Activity 1: Template Literals

// Task 1:

const Task1 = () => {
    const name = "Kriti Raj";
    const role = "SDE and Full Stack Developer";
    console.log(`Hi!, Myself ${name}. I am a ${role}.`);
}
Task1();

// Task 2:

const Task2 = () => {
    const multiLineString = `Hi! Myself Kriti raj.
I am a full Stack Web Developer.
I am from Patna Bihar.`;
    console.log(multiLineString);
}
Task2();

// Activity 2: Destructuring

// Task 3:

const Task3 = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    const [n0, n1] = numbers;
    console.log(n0, n1);
}
Task3();

// Task 4:

const Task4 = () => {
    const book = {
        title: "Happy Coding",
        author: "Kriti Raj",
        year: 2024
    }
    const { title, author } = book;
    console.log(title + " by " + author);
}
Task4();

// Activity 3: Spread and Rest Operators

// Task 5:

const Task5 = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    const newNumbers = [...numbers, 6, 7, 8, 9, 10];
    console.log(newNumbers);
}
Task5();

const Task6 = () => {
    const restOperator = (...args) => {
        return args.reduce((sum, cur) => sum + cur, 0);
    }
    console.log(restOperator());
    console.log(restOperator(1));
    console.log(restOperator(1, 2));
    console.log(restOperator(1, 2, 3));
    console.log(restOperator(1, 2, 3, 4));
    console.log(restOperator(1, 2, 3, 4, 5));
}
Task6();

// Activity 4: Default Parameters

// Task 7:

const Task7 = (a, b = 1) => {
    return a * b;
}
console.log(Task7(10));
console.log(Task7(10, 5));

// Activity 5: Enhanced Object Literals

// Task 8: (Marked forReview)

// COPIED FROM CHATGPT

const Task8 = () => {
    const name = "Expense Tracker";
    const version = "1.0";

    const expenseTracker = {
        name,
        version,
        expenses: [],
        addExpense(description, amount) {
            this.expenses.push({ description, amount });
            console.log(`Added expense: ${description} - $${amount}`);
        },
        getTotal() {
            return this.expenses.reduce((total, expense) => total + expense.amount, 0);
        },
        logExpenses() {
            console.log("Expenses:");
            this.expenses.forEach(expense => console.log(`${expense.description}: $${expense.amount}`));
        }
    };
    expenseTracker.addExpense("Groceries", 50);
    expenseTracker.addExpense("Utilities", 100);
    console.log(`Total expenses: $${expenseTracker.getTotal()}`);
    expenseTracker.logExpenses();
    console.log(expenseTracker);
}
Task8();

// Task 9:

const Task9 = () => {
    const propName1 = "firstName";
    const propName2 = "lastName";
    const propName3 = "age";

    const person = {
        [propName1]: "John",
        [propName2]: "Doe",
        [propName3]: 30
    };

    console.log(person);
}
Task9();
