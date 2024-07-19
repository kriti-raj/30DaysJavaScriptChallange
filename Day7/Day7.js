// Activity 1: Object Creation and Access

// Task 1:

const Task1 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
    }
    console.log(book)
}
Task1();

// Task 2:

const Task2 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
    }
    console.log("Title:", book.title, "Author:", book.author);
}
Task2();

// Activity 2: Object Methods

// Task 3:

const Task3 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        getBookInfo: () => {
            return `${book.title} by ${book.author}`
        }
    }
    console.log(book.getBookInfo());
}
Task3();

// Task 4:

const Task4 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        updateYear: (newYear) => {
            return book.year = newYear;
        }
    }
    book.updateYear(2024);
    console.log(book);
}
Task4();

// Activity 3: Nested Objects

// Task 5:

const Task5 = () => {
    const library = {
        name: "My Library",
        books: [
            {
                title: "Atomic Habits",
                author: "James Clear",
                year: 2018
            },
            {
                title: "The Power of Habit",
                author: "Charles Duhigg",
                year: 2012
            },
        ]
    };
    console.log(library);
}
Task5();

// Task 6:

const Task6 = () => {
    const library = {
        name: "My Library",
        books: [
            {
                title: "Atomic Habits",
                author: "James Clear",
                year: 2018
            },
            {
                title: "The Power of Habit",
                author: "Charles Duhigg",
                year: 2012
            },
        ]
    };
    console.log("Library Name:", library.name);
    console.log("Titles of Books in the Library:");
    library.books.forEach(book => {
        console.log(book.title);
    });
}
Task6();

// Activity 4: The `this` Keyword

// Task 7:

const Task7 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        getInfo: function () {
            return `${this.title} (${this.year})`;
        }
    };
    console.log(book.getInfo());
};
Task7();

// Activity 5: Object Iteration

// Task 8:

const Task8 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
    };
    for (let prop in book) {
        console.log(`${prop}: ${book[prop]}`);
    }
};
Task8();

// Task 8:

const Task9 = () => {
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
    };
    Object.keys(book).forEach(key => {
        console.log(key);
    });
    Object.values(book).forEach(value => {
        console.log(value);
    });
};
Task9();