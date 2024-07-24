// Activity 1: Basic Error Handling with Try-Catch

// Task 1:

const Task1 = (() => {
    try {
        throw new Error("Intentional Error");
    } catch (error) {
        console.error("Error:", error.message);
    }
});
Task1();

// Task 2:

const Task2 = ((num1, num2) => {
    try {
        if (num2 === 0)
            throw new Error("Denominator can't be zero");
        return num1 / num2;

    } catch (error) {
        console.error("Error:", error.message);
    }
});
Task2(10, 0);

// Activity 2: Finally Block

// Task 3:

const Task3 = ((num1, num2) => {
    try {
        if (num2 === 0)
            throw new Error("Denominator can't be zero");
        return num1 / num2;

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Code Execution Completed");
    }
});
Task3(10, 5);

// Activity 3: Custom Error Objects

// Task 4:

const Task4 = (() => {
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    }
    function throwCustomError() {
        throw new CustomError("This is a custom error.");
    }
    function handleCustomError() {
        try {
            throwCustomError();
        } catch (error) {
            if (error instanceof CustomError) {
                console.error("Caught a custom error: ", error.message);
            } else {
                console.error("An unexpected error occurred: ", error.message);
            }
        }
    }
    handleCustomError();
});
Task4();

// Task 5:

const Task5 = (() => {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }
    function validateInput(input) {
        if (input.trim() === "") {
            throw new ValidationError("Input cannot be empty.");
        }
        return true;
    }
    function handleValidation() {
        const userInput = "";
        try {
            validateInput(userInput);
            console.log("Input is valid.");
        } catch (error) {
            if (error instanceof ValidationError) {
                console.error("Validation error: ", error.message);
            } else {
                console.error("An unexpected error occurred: ", error.message);
            }
        }
    }
    handleValidation();
});
Task5();

// Activity 4: Error Handling in Promises

// Task 6:

const Task6 = (() => {
    function randomPromise() {
        return new Promise((res, rej) => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                res("Promise resolved successfully!");
            } else {
                rej(new Error("Promise rejected."));
            }
        });
    }
    randomPromise()
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
});
Task6();

// Task 7:

const Task7 = (() => {
    function randomPromise() {
        return new Promise((resolve, reject) => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected."));
            }
        });
    }
    async function handleRandomPromise() {
        try {
            const result = await randomPromise();
            console.log(result);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
    handleRandomPromise();
});
Task7();

// Activity 5: Graceful Error Handling in Fetch

// Task 8:

const Task8 = (() => {
    function fetchData() {
        return fetch('https://picsum.photos/200')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log("Data received:", data);
            })
            .catch(err => {
                console.error("Fetch error:", err.message);
            });
    }
    fetchData();
});
Task8();

// Task 9:

const Task9 = async () => {
    async function fetchData() {
        try {
            const res = await fetch('https://picsum.photos/200');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            console.log("Data received:", data);
        } catch (err) {
            console.error("Fetch error:", err.message);
        }
    }
    await fetchData();
};
Task9();
