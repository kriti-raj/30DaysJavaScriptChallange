// Activity 1: Understanding LocalStorage

// Task 1:

const Task1 = () => {
    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    }
    const getFromLocalStorage = (key) => {
        return localStorage.getItem(key);
    }
    let key = "myString";
    let value = "Hello, LocalStorage!";
    saveToLocalStorage(key, value);
    console.log(getFromLocalStorage(key));
}
Task1();


// Task 2:

const Task2 = () => {
    const saveObjectToLocalStorage = (key, obj) => {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    const getObjectFromLocalStorage = (key) => {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    let key = "myObject";
    let obj = { name: "John", age: 30 };
    saveObjectToLocalStorage(key, obj);
    console.log(getObjectFromLocalStorage(key));
}
Task2();


// Activity 2: Using LocalStorage

// Task 3:

const Task3 = () => {
    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        displaySavedData();
    });
    function displaySavedData() {
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');
        if (name && email) {
            document.getElementById('savedData').innerText = `Saved Data: Name - ${name}, Email - ${email}`;
        }
    }
    document.addEventListener('DOMContentLoaded', displaySavedData);
}
Task3();

// Task 4:

const Task4 = () => {
    const removeItemFromLocalStorage = (key) => {
        console.log('Before removal:', localStorage);
        localStorage.removeItem(key);
        console.log('After removal:', localStorage);
    }
    let key = "myString";
    localStorage.setItem(key, "Hello, LocalStorage!");
    removeItemFromLocalStorage(key);
}
Task4();


// Activity 3: Understanding SessionStorage

// Task 5:

const Task5 = () => {
    const saveToSessionStorage = (key, value) => {
        sessionStorage.setItem(key, value);
    }
    const getFromSessionStorage = (key) => {
        return sessionStorage.getItem(key);
    }
    let key = "myString";
    let value = "Hello, SessionStorage!";
    saveToSessionStorage(key, value);
    console.log(getFromSessionStorage(key));
}
Task5();


// Task 6:

const Task6 = () => {
    const saveObjectToSessionStorage = (key, obj) => {
        sessionStorage.setItem(key, JSON.stringify(obj));
    }
    const getObjectFromSessionStorage = (key) => {
        let value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    let key = "myObject";
    let obj = { name: "John", age: 30 };
    saveObjectToSessionStorage(key, obj);
    console.log(getObjectFromSessionStorage(key));
}
Task6();


// Activity 4: Using SessionStorage

// Task 7:

const Task7 = () => {
    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        displaySavedData();
    });
    function displaySavedData() {
        let name = sessionStorage.getItem('name');
        let email = sessionStorage.getItem('email');
        if (name && email) {
            document.getElementById('savedData').innerText = `Saved Data: Name - ${name}, Email - ${email}`;
        }
    }
    document.addEventListener('DOMContentLoaded', displaySavedData);
}
Task7();


// Task 8:

const Task8 = () => {
    const removeItemFromSessionStorage = (key) => {
        console.log('Before removal:', sessionStorage);
        sessionStorage.removeItem(key);
        console.log('After removal:', sessionStorage);
    }
    let key = "myString";
    sessionStorage.setItem(key, "Hello, SessionStorage!");
    removeItemFromSessionStorage(key);
}
Task8();


// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9:

const Task9 = () => {
    const saveToBothStorages = (key, value) => {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
    }
    const getFromBothStorages = (key) => {
        return {
            localStorageValue: localStorage.getItem(key),
            sessionStorageValue: sessionStorage.getItem(key)
        };
    }
    let key = "myKey";
    let value = "Hello, Storages!";
    saveToBothStorages(key, value);
    console.log(getFromBothStorages(key));
}
Task9();


// Task 10:

const Task10 = () => {
    const clearAllStorages = () => {
        localStorage.clear();
        sessionStorage.clear();
    }
    const verifyStoragesAreEmpty = () => {
        console.log('LocalStorage:', localStorage);
        console.log('SessionStorage:', sessionStorage);
    }
    clearAllStorages();
    verifyStoragesAreEmpty();
}
Task10();
