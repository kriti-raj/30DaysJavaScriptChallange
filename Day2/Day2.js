// Activity 1: Arithmatic Operation

// Task 1:

const add = (a, b) => {
    return (a + b);
}
console.log(add(10, 15));

// Task 2:

const subtract = (a, b) => {
    return (a - b);
}
console.log(subtract(10, 15));

// Task 3:

const multiply = (a, b) => {
    return (a * b);
}
console.log(multiply(10, 15));

// Task 4:

const sum = (a, b) => {
    return (a / b);
}
console.log(sum(10, 15));

// Task 5:

const remainder = (a, b) => {
    return (a % b);
}
console.log(remainder(10, 15));

// Activity 2: Assignment Operator

// Task 6:

const AssignmentAdd = () => {
    let a = 15;
    a += 10;
    return (a);
}
console.log(AssignmentAdd());

// Task 7:

const AssignmentSubtract = () => {
    let a = 15;
    a -= 10;
    return (a);
}
console.log(AssignmentSubtract());

// Activity 3: Comparison Operator

// Task 8:

const task8 = (a, b) => {
    let x = a < b;
    let y = a > b;
    return ({ x, y });
}
console.log(task8(5, 10));

// Task 9:

const task9 = (a, b) => {
    let x = a <= b;
    let y = a >= b;
    return ({ x, y });
}
console.log(task9(5, 10));

// Task 10:

const task10 = (a, b) => {
    let x = a == b;
    let y = a === b;
    return ({ x, y });
}
console.log(task10(5, '5'));

// Activity 4: Logical Operator

// Task 11:

const task11 = () => {
    let p = false && false;
    let q = true && false;
    let r = false && true;
    let s = true && true;
    return ({ p, q, r, s });
}
console.log(task11());

// Task 12:

const task12 = () => {
    let p = false || false;
    let q = true || false;
    let r = false || true;
    let s = true || true;
    return ({ p, q, r, s });
}
console.log(task12());

// Task 13:

const task13 = () => {
    let p = !false;
    let q = !true;
    return ({ p, q });
}
console.log(task13());

// Activity 4: Ternary Operator

const ternaryOperator = (a) => {
    return (a > 0) ? "positive" : "negative";
}
console.log(ternaryOperator(-5));

// Feature Request:

const calculator = (a, b) => {
    let sum = a + b;
    let diff = a - b;
    let mul = a * b;
    let divide = a / b;
    let remainder = a % b;
    return ({ sum, diff, mul, divide, remainder })
}
console.log(calculator(5, 10));

const Comparison = (a, b) => {
    let greater = a > b;
    let smaller = a < b;
    let greaterEqual = a >= b;
    let smallerEqual = a <= b;
    let logicalAnd = a && b;
    let logicalOr = a || b;
    let negation = !a;
    return ({ greater, smaller, greaterEqual, smallerEqual, logicalAnd, logicalOr, negation })
}
console.log(Comparison(5, 10));

const ternaryOperatorScript = (a) => {
    return (a > 0) ? "positive" : "negative";
}
console.log(ternaryOperatorScript(-5));