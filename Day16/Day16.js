// Activity 1: Understanding Closures

// Task 1:

const Task1 = (n) => {
    if (n === 0 || n === 1) return 1;
    else return n * Task1(n - 1);
}
const testCases1 = [0, 1, 5, 7, 10];
testCases1.forEach((num, index) => {
    const result = Task1(num);
    console.log(`Test Case ${index + 1} : ${result}`);
});

// Task 2:

const Task2 = (n) => {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return Task2(n - 1) + Task2(n - 2);
}
const testCases2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testCases2.forEach((num, index) => {
    const result = Task2(num);
    console.log(`Test Case ${index + 1} : ${result}`);
});

// Activity 2: Recursion with Arrays

// Task 3:

const Task3 = (arr) => {
    if (arr.length === 0)
        return 0;
    else
        return arr[0] + Task3(arr.slice(1));
}
const testCases3 = [
    [],
    [1],
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40],
    [-1, -2, -3, -4, -5]
];
testCases3.forEach((arr, index) => {
    const result = Task3(arr);
    console.log(`Test Case ${index + 1} : ${result}`);
});

// Task 4:

const Task4 = (arr1) => {
    if (arr1.length === 1) {
        return arr1[0];
    } else {
        const maxOfRest = Task4(arr1.slice(1));
        return arr1[0] > maxOfRest ? arr1[0] : maxOfRest;
    }
}
const testCases4 = [
    [1],
    [1, 2, 3, 4, 5],
    [10, 20, 5, 40, 30],
    [-1, -2, -3, -4, -5],
    [5, 5, 5, 5]
];
testCases4.forEach((arr, index) => {
    const result = Task4(arr);
    console.log(`Test Case ${index + 1} : ${result}`);
});


// Activity 3: String Manipulation with Recursion

// Task 5:

const Task5 = (str) => {
    if (str.length <= 1)
        return str;
    else
        return Task5(str.slice(1)) + str[0];
}
const testCases5 = [
    "",
    "a",
    "hello",
    "world",
    "recursion",
    "JavaScript"
];
testCases5.forEach((str, index) => {
    const result = Task5(str);
    console.log(`Test Case ${index + 1} : "${result}"`);
});

// Task 6:

const Task6 = (str1) => {
    if (str1.length <= 1)
        return true;
    else {
        if (str1[0] !== str1[str1.length - 1])
            return false;
        else
            return Task6(str1.slice(1, -1));
    }
}
const testCases6 = [
    "",
    "a",
    "racecar",
    "level",
    "hello",
    "world",
    "madam"
];
testCases6.forEach((str, index) => {
    const result = Task6(str);
    console.log(`Test Case ${index + 1} : ${result}`);
});

// Activity 4: Recursive Search

// Task 7:

const Task7 = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right)
        return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target)
        return mid;
    else if (arr[mid] > target)
        return Task7(arr, target, left, mid - 1);
    else
        return Task7(arr, target, mid + 1, right);

}
const testCases7 = [
    { arr: [], target: 5 },
    { arr: [1], target: 1 },
    { arr: [1, 2, 3, 4, 5], target: 3 },
    { arr: [1, 2, 3, 4, 5], target: 6 },
    { arr: [10, 20, 30, 40, 50], target: 40 },
    { arr: [-5, -3, 0, 1, 2], target: 0 }
];
testCases7.forEach((test, index) => {
    const { arr, target } = test;
    const result = Task7(arr, target);
    console.log(`Test case ${index + 1}: ${result}`);
});

// Task 8:

const Task8 = (arr, target) => {
    if (arr.length === 0) {
        return 0;
    } else {
        const count = arr[0] === target ? 1 : 0;
        return count + Task8(arr.slice(1), target);
    }
}
const testCases8 = [
    { arr: [], target: 5 },
    { arr: [1], target: 1 },
    { arr: [1, 2, 3, 4, 5], target: 3 },
    { arr: [1, 2, 2, 2, 5], target: 2 },
    { arr: [10, 20, 30, 40, 50], target: 60 },
    { arr: [1, 2, 1, 2, 1, 2, 1], target: 1 }
];
testCases8.forEach((test, index) => {
    const { arr, target } = test;
    const result = Task8(arr, target);
    console.log(`Test case ${index + 1}: Target ${target} in array [${arr}] occurs ${result} times`);
});

// Activity 5: Tree Traversal(Optional)

// Task 9: