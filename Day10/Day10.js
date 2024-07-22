// Activity 1: Basic Event Handling

// Task 1:

const Task1 = () => {
    const clickHandler = document.getElementById("btn");
    const paraChange = document.getElementById("para");
    clickHandler.addEventListener('click', () => {
        paraChange.textContent = "This is the final paragraph."
    })
}
Task1();

// Task 2:

const Task2 = () => {
    const img = document.getElementById("myImg");
    img.addEventListener('dblclick', () => {
        if (img.style.opacity === "0.5") {
            img.style.opacity = "1";
        } else {
            img.style.opacity = "0.5";
        }
    })
}
Task2();

// Activity 2: Mouse Events

// Task 3:

const Task3 = () => {
    const clickHandler = document.getElementById("colorChange");
    clickHandler.addEventListener('mouseover', () => {
        clickHandler.style.backgroundColor = "blue"
    })
}
Task3();

// Task 4:

const Task4 = () => {
    const clickHandler = document.getElementById("colorChange");
    clickHandler.addEventListener('mouseout', () => {
        clickHandler.style.backgroundColor = "red"
    })
}
Task4();

// Activity 3: Keyboard Events

// Task 5:

const Task5 = () => {
    const inputHandler = document.getElementById("inputArea");
    inputHandler.addEventListener('keydown', (e) => {
        console.log(`Key pressed: ${e.key}`);
    })
}
Task5();

// Task 6:

const Task6 = () => {
    const inputHandler = document.getElementById("inputArea");
    const paraChange = document.getElementById("para");
    inputHandler.addEventListener('keyup', () => {
        paraChange.textContent = `Current value: ${inputHandler.value}`
    })
}
Task6();

// Activity 4: Form Events

// Task 7:

const Task7 = () => {
    const form = document.getElementById("myForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formObj = {};
        formData.forEach((val, key) => {
            formObj[key] = val;
        });
        console.log("Form Data:", formObj);
    });
}
Task7();

// Task 8:

const Task8 = () => {
    const select = document.getElementById("mySel");
    const paraChange = document.getElementById("para");
    select.addEventListener('change', () => {
        paraChange.textContent = `Selected value: ${select.value}`
    })
}
Task8();

// Activity 5: Event Delegation

// Task 9:

const Task9 = () => {
    const form = document.getElementById("myForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formObj = {};
        formData.forEach((val, key) => {
            formObj[key] = val;
        });
        console.log("Form Data:", formObj);
    });
}
Task9();

// Task 8:

const Task10 = () => {
    const ul = document.getElementById("ulList");
    ul.addEventListener('click', (e) => {
        console.log(`Clicked Item ${e.target.textContent}`);
    })
}
Task10();