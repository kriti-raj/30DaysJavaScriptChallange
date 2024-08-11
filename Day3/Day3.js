// Activity 1: If-Else Statement

// Task 1:

const Task1 = (a) => {
    if (a > 0) return 'Positive'
    else if (a < 0) return 'Negative'
    else return 'Zero'
}
console.log(Task1(0));

// Task 2:

const Task2 = (a) => {
    if (a >= 18) return 'Eligible to Vote'
    else return 'Note eligible to Vote'
}
console.log(Task2(0));

// Activity 2: Nested If-Else Statement

// Task 3:

const Task3 = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(Task3(0, 1, 2));

// Activity 3: Switch Case

// Task 4:

const Task4 = (a) => {
    switch (a) {
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return 'Wednesday'
            break;
        case 4:
            return 'Thrusday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'
            break;
        case 7:
            return 'Sunday'
            break;

        default:
            break;
    }
}
console.log(Task4(4));

// Task 5:

const Task5 = (a) => {
    switch (true) {
        case (a >= 90):
            return 'A'
            break;
        case (a >= 80):
            return 'B'
            break;
        case (a >= 70):
            return 'C'
            break;
        case (a >= 60):
            return 'D'
            break;

        default:
            return 'F'
            break;
    }
}
console.log(Task5(95));

// Activity 4: Conditional (Terrnary) Operator

// Task 6:

const Task6 = (a) => {
    return (a % 2) ? "odd" : "even";
}
console.log(Task6(4));

// Activity 5: Combining Conditions

// Task 7:

const Task7 = (a) => {
    if (a % 4 == 0 && a % 100 != 0) return "Leap Year";
    if (a % 400 == 0) return "Leap Year";
    return "Not a Leap Year";
}
console.log(Task7(4));