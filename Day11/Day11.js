// Activity 1: Understanding Promises

// Task 1:

const Task1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Message after 2 seconds");
    }, 2000);
});
Task1.then(mess => {
    console.log(mess);
});

// Task 2:

const Task2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Error: Operation rejected");
    }, 2000);
});
Task2.catch(err => {
    console.log(err);
});

// Activity 2: Chaining Promises

// Task 3:

const Task3 = (() => {
    const fetch1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("Fetch 1");
        }, 1000);
    })
    const fetch2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("Fetch 2");
        }, 1000);
    })
    const fetch3 = new Promise((res, rej) => {
        setTimeout(() => {
            res("Fetch 3");
        }, 1000);
    })
    const fetch4 = new Promise((res, rej) => {
        setTimeout(() => {
            res("Fetch 4");
        }, 1000);
    });

    fetch1
        .then(mes1 => {
            console.log(mes1);
            return fetch2;
        })
        .then(mes2 => {
            console.log(mes2);
            return fetch3;
        })
        .then(mes3 => {
            console.log(mes3);
            return fetch3;
        })
        .then(mes4 => {
            console.log(mes4);
            return fetch3;
        })
});
Task3();

// Activity 3: Using Async/Await

// Task 4:

const Task4 = async (promise) => {
    try {
        const res = await promise;
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}
const timePromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Async - Await")
    }, 1000);
})
Task4(timePromise);

// Task 5:

const Task5 = async (promise) => {
    try {
        const res = await promise;
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}
const rejPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Async - Await")
    }, 1000);
})
Task5(rejPromise);

// Activity 4: Fetching Data from an API

// Task 6:

const Task6 = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error in response');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error('Error while fetching data:', err);
        });

};
Task6();

// Task 7:

const Task7 = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error("Error in response");
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Error while fetching data:", err);
    }
};
Task7();

// Activity 5: Concurrent Promises

// Task 8:

const Task8 = async () => {
    const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
    const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
    const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json());

    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log('All results:', results);
        })
        .catch(error => {
            console.error('Error while fetching data:', error);
        });
};
Task8();

// Task 9:

const Task9 = async () => {
    const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('Result from promise 1'), 3000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('Result from promise 2'), 1000));
    const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('Result from promise 3'), 2000));

    Promise.race([promise1, promise2, promise3])
        .then(result => {
            console.log('First resolved result:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
Task9();