// Activity 1: For Loop

// Task 1:

const Task1 = () => {
    for (let i = 1; i <= 10; i++)
        console.log(i);
}
Task1();

// Task 2:

const Task2 = () => {
    for (let i = 1; i <= 10; i++)
        console.log(5 * i);
}
Task2();

// Activity 2: While Loop

// Task 3:

const Task3 = () => {
    let i = 0;
    let sum = 0;
    while (i <= 10) { sum += i; i++; }
    console.log(sum);
}
Task3();

// Task 4:

const Task4 = () => {
    let i = 10;
    while (i > 0) { console.log(i); i--; }
}
Task4();

// Activity 3: Do...While Loop

// Task 5:

const Task5 = () => {
    let i = 1;
    do {
        console.log(i++);
    }
    while (i <= 5);
}
Task5();

// Task 6:

const Task6 = (a) => {
    let i = 1;
    let fact = 1;
    do {
        fact *= i++;
    }
    while (i <= a);
    console.log(fact);
}
Task6(3);

// Activity 4: Nested Loops

// Task 7:

const Task7 = () => {
    for (let i = 1; i <= 5; i++) {
        let str = "* ";
        console.log(str.repeat(i));
    }
}
Task7();

// Activity 5: Loop Control Statements

// Task 8:

const Task8 = () => {
    for (let i = 1; i <= 10; i++) {
        if (i == 5) continue;
        console.log(i);
    }
}
Task8();

// Task 9:

const Task9 = () => {
    for (let i = 1; i <= 10; i++) {
        if (i == 7) break;
        console.log(i);
    }
}
Task9();