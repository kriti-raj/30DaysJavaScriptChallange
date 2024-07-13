// Activity 1: Variable Declaration

// Task 1:

var task1 = 10;
console.log(task1);

// Task 2:

let task2 = "Hello World!";
console.log(task2);

// Activity 2: Constant Decalaration

// Task 3:

const task3 = true;
console.log(task3);

// Activity 3: Data Types

// Task 4:

const task4a = 10;
const task4b = "Hiii";
const task4c = true;
const task4d = {
    car: "Ford",
    milage: "12km"
};
const task4e = [1, 2, 3, 4];
console.log(typeof (task4a));
console.log(typeof (task4b));
console.log(typeof (task4c));
console.log(typeof (task4d));
console.log(typeof (task4e));

// Activity 4: Reassigning Variables

// Task 5:

let task5 = true;
console.log(task5);
task5 = 12;
console.log(task5);
task5 = "Hi there!";
console.log(task5);

// Activity 5: Reassigning Variables

// Task 6:

const task6 = true;
console.log(task5);
task6 = 12;
console.log(task5);

// Feature Request:

// 1. Variable Types Console Log:

function FeatureRequest1() {
    const numberVar = 42;
    const stringVar = "Hello, world!";
    const booleanVar = true;
    const nullVar = null;
    let undefinedVar;
    const arrayVar = [1, 2, 3, 4, 5];
    const functionVar = function () { return "function"; };
    const symbolVar = Symbol("symbol");
    const objectVar = {
        numberVar: 42,
        stringVar: "Hello, world!",
        booleanVar: true,
    };

    console.log(`Value: ${numberVar}, Type: ${typeof numberVar}`);
    console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);
    console.log(`Value: ${booleanVar}, Type: ${typeof booleanVar}`);
    console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`);
    console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`);
    console.log(`Value: ${arrayVar}, Type: ${typeof arrayVar}`);
    console.log(`Value: ${functionVar}, Type: ${typeof functionVar}`);
    console.log(`Value: ${symbolVar.toString()}, Type: ${typeof symbolVar}`);
    console.log(`Value: ${JSON.stringify(objectVar)}, Type: ${typeof objectVar}`);
}
FeatureRequest1();

// 2. Reassignment Demo:

function FeatureRequest2() {
    let letVar = 5;
    console.log(letVar);
    letVar = 10;
    console.log(letVar);

    const constVar = 5;
    console.log(constVar);
    constVar = 10;
    console.log(constVar);
}
FeatureRequest2()