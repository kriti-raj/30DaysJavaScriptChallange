// Activity 1: Creating and Exporting Modules

// Task 1:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person1 = new Person('Alice', 30);
console.log(person1.greet());

// Task 2:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
const person2 = new Person('Alice', 30);
console.log(person2.greet());
person2.updateAge(31);

// Activity 2: Class Inheritance

// Task 3:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}
const student1 = new Student('Bob', 20, 'S12345');
console.log(student1.getStudentId());

// Task 4:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const student2 = new Student('Bob', 20, 'S12345');
console.log(student2.greet());

// Activity 3: Static Methods and Properties

// Task 5:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static genericGreeting() {
        return 'Hello, welcome to the Person class!';
    }
}
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
console.log(Person.genericGreeting());

// Task 6:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static genericGreeting() {
        return 'Hello, welcome to the Person class!';
    }
}
class Student extends Person {
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount += 1;
        console.log(`Total number of students: ${Student.studentCount}`);
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const student3 = new Student('Bob', 20, 'S12345');
const student4 = new Student('Alice', 22, 'S67890');
console.log(student3.greet());
console.log(student4.greet());

// Activity 4: Getters and Setters

// Task 7:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static genericGreeting() {
        return 'Hello, welcome to the Person class!';
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    static studentCount = 0;
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        Student.studentCount += 1;
        console.log(`Total number of students: ${Student.studentCount}`);
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const person3 = new Person('John', 'Doe', 40);
console.log(person3.fullName);

// Task 8:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static genericGreeting() {
        return 'Hello, welcome to the Person class!';
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Student extends Person {
    static studentCount = 0;
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        Student.studentCount += 1;
        console.log(`Total number of students: ${Student.studentCount}`);
    }
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const person4 = new Person('John', 'Doe', 40);

console.log(person4.fullName);

person4.fullName = 'Jane Smith';

console.log(person4.fullName);

// Activity 5: Private Fields (Optional)

// Task 9:

class Account {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }
}
const account1 = new Account(1000);
console.log(`Initial Balance: $${account1.getBalance()}`);
account1.deposit(500);
console.log(`Balance after deposit: $${account1.getBalance()}`);
account1.withdraw(300);
console.log(`Balance after withdrawal: $${account1.getBalance()}`);
account1.withdraw(1500);
console.log(`Balance after invalid withdrawal attempt: $${account1.getBalance()}`);

// Task 10:

class Account {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }
}
const account = new Account(1000);
console.log(`Initial Balance: $${account.getBalance()}`);
account.deposit(500);
console.log(`Balance after deposit: $${account.getBalance()}`);
account.withdraw(300);
console.log(`Balance after withdrawal: $${account.getBalance()}`);
account.withdraw(1500);
console.log(`Balance after invalid withdrawal attempt: $${account.getBalance()}`);
account.deposit(200);
console.log(`Balance after depositing $200: $${account.getBalance()}`);
account.withdraw(100);
console.log(`Balance after withdrawing $100: $${account.getBalance()}`);
