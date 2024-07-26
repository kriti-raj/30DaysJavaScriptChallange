// Activity 1: Creating and Exporting Modules

// Task 1:

const Task1 = require("./Task1");
console.log(Task1(10, 5))

// Task 2:

const Task2 = require("./Task2");
console.log("Name: ", Task2.name)
console.log("Age: ", Task2.age)
Task2.greet();

// Activity 2: Named and Default Exports

// Task 3:

const { add, subtract, multiply, divide } = require("./Task3");
console.log(`${10} + ${5} = ${add(10, 5)}`);
console.log(`${10} - ${5} = ${subtract(10, 5)}`);
console.log(`${10} * ${5} = ${multiply(10, 5)}`);
console.log(`${10} / ${5} = ${divide(10, 5)}`);

// Task 4:

const Task4 = require("./Task4");
const name = "Kriti Raj";
console.log(Task4(name));

// Activity 3: Importing Entire Modules

// Task 5:

const Task5 = require('./Task5');

console.log(`API URL: ${Task5.API_URL}`);
console.log(`Max retries: ${Task5.MAX_RETRIES}`);

const path = 'users';
console.log(`Endpoint for ${path}: ${Task5.getEndpoint(path)}`);

const currentRetries = 3;
console.log(`Can retry (current retries: ${currentRetries}): ${Task5.canRetry(currentRetries)}`);

// Activity 4: Using Third-Party Modules

// Task 6:

const lodash = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;
const chunks = lodash.chunk(array, size);

console.log(`Array: ${array}`);
console.log(`Chunks of size ${size}: ${JSON.stringify(chunks)}`);

// Task 7:

const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
    .then(res => {
        console.log('Response data:', res.data);
    })
    .catch(err => {
        console.error('Error making request:', err);
    });

// Activity 5: Module Bundling (Optional)

// Task 8: