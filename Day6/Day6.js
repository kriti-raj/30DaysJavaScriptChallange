// Activity 1: Array Creation and Access

// Task 1:

const Task1 = () => {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr);
}
Task1();

// Task 2:

const Task2 = () => {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr[0], arr[arr.length - 1]);
}
Task2();

// Activity 2: Array Methods (Basic)

// Task 3:

const Task3 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.push(6);
    console.log(arr);
}
Task3();

// Task 4:

const Task4 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.pop();
    console.log(arr);
}
Task4();

// Task 5:

const Task5 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.shift();
    console.log(arr);
}
Task5();

// Task 6:

const Task6 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.unshift(0);
    console.log(arr);
}
Task6();

// Activity 3: Array Methods (Intermediate)

// Task 7:

const Task7 = () => {
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [];
    arr.map((elem) => {
        arr2.push(elem * 2)
    })
    console.log(arr2);
}
Task7();

// Task 8:

const Task8 = () => {
    const arr = [1, 2, 3, 4, 5];
    const arr2 = arr.filter((arr) => (!(arr % 2)))
    console.log(arr2);
}
Task8();

// Task 9:

const Task9 = () => {
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce((total, curr) => { return total + curr }, 0);
    console.log(sum);
}
Task9();

// Activity 4: Array Iteration

// Task 10:

const Task10 = () => {
    const arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);
}
Task10();

// Task 11:

const Task11 = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.forEach(elem => {
        console.log(elem);
    });
}
Task11();

// Activity 5: Multi-dimensional Arrays

// Task 12:

const Task12 = () => {
    const arr = [[0], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5]];
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);
}
Task12();

// Task 13:

const Task13 = () => {
    const arr = [[0], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5]];
    for (let i = 0; i < arr.length; i++) {
        arr[i].forEach(elem => {
            console.log(elem);
        })
    }
}
Task13();