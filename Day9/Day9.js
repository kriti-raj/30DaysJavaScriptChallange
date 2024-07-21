// Activity 1: Selecting and Manipulating Elements

// Task 1:

const Task1 = () => {
    document.getElementById("day9Id").innerHTML = "This is changed";
}
Task1();

// Task 2:

const Task2 = () => {
    document.querySelector(".day9Class").style.backgroundColor = "red";
}
Task2();

// Activity 1: Creating and Appending Elements

// Task 3:

const Task3 = () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = "This is a new Div";
    document.body.appendChild(newDiv);
}
Task3();

// Task 4:

const Task4 = () => {
    const newLi = document.createElement('li');
    newLi.textContent = "This is a new Li";
    document.getElementById("myList").appendChild(newLi);
}
Task4();

// Activity 3: Removing Elements

// Task 5:

const Task5 = () => {
    const newDiv = document.getElementById('to-rem');
    newDiv.remove();
}
Task5();

// Task 6:

const Task6 = () => {
    const newLi = document.createElement('li');
    newLi.textContent = "This is a new Div";
    document.getElementById("myList").appendChild(newLi);
}
Task6();

// Activity 4: Removing Elements

// Task 7:

const Task7 = () => {
    const imgSrc = document.getElementById('picToChange');
    imgSrc.src = "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg";
}
Task7();

// Task 8:

const Task8 = () => {
    const elem = document.getElementById('picToChange');
    elem.classList.add("rounded");
    elem.classList.remove("height");
}
Task8();

// Activity 5: Event Handling

// Task 9:

const Task9 = () => {
    const toChange = document.getElementById('para');
    toChange.textContent = "This is the Final Paragraph";
}
document.getElementById("changeButton").addEventListener('click', Task9);

// Task 8:

const Task10 = () => {
    const toChange = document.getElementById('picToChange');
    toChange.style.borderColor = "red";
}
document.getElementById("picToChange").addEventListener('mouseover', Task10);