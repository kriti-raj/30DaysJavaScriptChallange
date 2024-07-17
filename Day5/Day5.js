// Activity 1: Function Declaration

// Task 1:

const Task1 = (a) => {
    console.log(!(a % 2) ? "even" : "odd");
}
Task1(15);

// Task 2:

const Task2 = (a) => {
    let b = Math.pow(a, 2);
    return b;
}
console.log(Task2(15));

// Activity 2: Function Expression

// Task 3:

const Task3 = (a, b) => {
    console.log((a > b) ? a : b);
}
Task3(15, 16);

// Task 4:

const Task4 = (a, b) => {
    const c = a + b;
    console.log(c);
}
console.log(Task4('hello ', 'World!'));

// Activity 3: Arrow Function

// Task 5:

const Task5 = (a, b) => {
    return a + b;
}
console.log(Task5(15, 16));

// Task 6:

const Task6 = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) return true;
    }
    return false;
}
console.log(Task6('hello ', 'l'));

// Activity 4: Arrow Function

// Task 7:

const Task7 = (a, b = 10) => {
    return a * b;
}
console.log(Task7(15, 16));

// Task 8:

const Task8 = (a, b = 18) => {
    return "Hello Mr. " + a + " You are " + b + " years old."
}
console.log(Task8("Ram", 19));

// Activity 5: Higher-Order Functions

// Task 9:

function Task9(fn, n) {
    return function () {
        for (let i = 0; i < n; i++) {
            fn();
        }
    };
}
const fn = () => console.log("Hello!");
const sayHello5Times = Task9(fn, 5);
sayHello5Times();

// Task 10:

function Task10(fn1, fn2, a) {
    return fn2(fn1(a));
}
const addOne = (x) => x + 1;
const square = (x) => x * x;
const result = Task10(addOne, square, 5);
console.log(result);