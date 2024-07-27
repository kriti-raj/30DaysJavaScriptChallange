// Activity 1: Understanding Closures

// Task 1:

const Task1 = () => {
    const outerVariable = 'Hello from the outer function!';
    function innerFunction() {
        return outerVariable;
    }
    return innerFunction;
}
const inner = Task1();
console.log(inner());

// Task 2:

const Task2 = () => {
    const createCounter = () => {
        let counter = 0;
        return {
            increment: () => {
                counter += 1;
            },
            getValue: () => {
                return counter;
            }
        };
    }
    const counter = createCounter();
    counter.increment();
    counter.increment();
    console.log(counter.getValue());
    counter.increment();
    console.log(counter.getValue());
}
Task2();

// Activity 2: Practical Closures

// Task 3:

const Task3 = () => {
    const generateUniqueId = () => {
        let lastId = 0;
        return () => {
            lastId += 1;
            return lastId;
        };
    }
    const getId = generateUniqueId();
    console.log(getId());
    console.log(getId());
    console.log(getId());
    console.log(getId());
}
Task3();

// Task 4:

const Task4 = () => {
    const createGreeting = (name) => {
        return () => {
            return `Hello, ${name}!`;
        };
    }
    const greetUser = createGreeting('Alice');
    console.log(greetUser());
}
Task4();

// Activity 3: Closures in Loops

// Task 5:

const Task5 = () => {
    const createFunctionArray = (size) => {
        const functionArray = [];
        for (let i = 0; i < size; i++) {
            functionArray[i] = (() => {
                const index = i;
                return () => {
                    console.log(index);
                };
            })();
        }
        return functionArray;
    }
    const functions = createFunctionArray(5);
    functions[0]();
    functions[1]();
    functions[2]();
    functions[3]();
    functions[4]();
}
Task5();

// Activity 4: Module Pattern


// Task 6:

const Task6 = () => {
    const createItemManager = () => {
        let items = [];
        return {
            addItem: (item) => {
                items.push(item);
            },
            removeItem: (item) => {
                items = items.filter(i => i !== item);
            },
            listItems: () => {
                return items;
            }
        };
    }
    const itemManager = createItemManager();
    itemManager.addItem('Item 1');
    itemManager.addItem('Item 2');
    itemManager.addItem('Item 3');
    console.log(itemManager.listItems());
    itemManager.removeItem('Item 2');
    console.log(itemManager.listItems());
}
Task6();

// Activity 5: Memoization


// Task 7:

const Task7 = () => {
    const memoize = (func) => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache[key] !== undefined) {
                return cache[key];
            } else {
                const result = func(...args);
                cache[key] = result;
                return result;
            }
        };
    };
    const slowFunction = (num) => {
        console.log('Computing...');
        return num * num;
    };
    const memoizedFunction = memoize(slowFunction);
    console.log(memoizedFunction(5));
    console.log(memoizedFunction(5));
    console.log(memoizedFunction(6));
    console.log(memoizedFunction(6));
};
Task7();

// Task 8:

const Task8 = () => {
    const memoize = (func) => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache[key] !== undefined) {
                return cache[key];
            } else {
                const result = func(...args);
                cache[key] = result;
                return result;
            }
        };
    };
    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };
    const memoizedFactorial = memoize(factorial);
    console.log(memoizedFactorial(5));
    console.log(memoizedFactorial(5));
    console.log(memoizedFactorial(6));
    console.log(memoizedFactorial(6));
};
Task8();
