// Activity 1: Basic Regular Expressions

// Task 1:

const Task1 = () => {
    const matchJavaScript = (str) => {
        let regex = /JavaScript/g;
        return str.match(regex);
    }
    let str = "JavaScript is a versatile language. Many developers love JavaScript.";
    console.log(matchJavaScript(str));
}
Task1();

// Task 2:

const Task2 = () => {
    const matchDigits = (str) => {
        let regex = /\d/g;
        return str.match(regex);
    }
    let str = "The year is 2024 and the time is 12:45 PM.";
    console.log(matchDigits(str));
}
Task2();

// Activity 2: Character Classes and Quantifiers

// Task 3:

const Task3 = () => {
    const matchCapitalWords = (str) => {
        let regex = /\b[A-Z][a-z]*\b/g;
        return str.match(regex);
    }
    let str = "JavaScript is Developed by Brendan Eich.";
    console.log(matchCapitalWords(str));
}
Task3();

// Task 4:

const Task4 = () => {
    const matchDigitSequences = (str) => {
        let regex = /\d+/g;
        return str.match(regex);
    }
    let str = "There are 123 apples and 4567 oranges.";
    console.log(matchDigitSequences(str));
}
Task4();

// Activity 3: Grouping and Capturing

// Task 5:

const Task5 = () => {
    const capturePhoneNumber = (str) => {
        let regex = /\((\d{3})\) (\d{3})-(\d{4})/;
        let match = str.match(regex);
        return match ? match.slice(1) : [];
    }
    let str = "My phone number is (123) 456-7890.";
    console.log(capturePhoneNumber(str));
}
Task5();

// Task 6:

const Task6 = () => {
    const captureEmail = (str) => {
        let regex = /(\w+)@(\w+\.\w+)/;
        let match = str.match(regex);
        return match ? match.slice(1) : [];
    }

    let str = "Contact me at user@example.com.";
    console.log(captureEmail(str));
}
Task6();

// Activity 4: Assertions and Boundaries

// Task 7:

const Task7 = () => {
    const matchWordAtBeginning = (str) => {
        let regex = /^\w+/;
        return str.match(regex);
    }

    let str = "Hello, this is a test string.";
    console.log(matchWordAtBeginning(str));
}
Task7();

// Task 8:

const Task8 = () => {
    const matchWordAtEnd = (str) => {
        let regex = /\w+$/;
        return str.match(regex);
    }
    let str = "This is a test string. Goodbye";
    console.log(matchWordAtEnd(str));
}
Task8();

// Activity 5: Practical Applications

// Task 9:

const Task9 = () => {
    const validatePassword = (password) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }
    let password = "Password1!";
    console.log(validatePassword(password));
}
Task9();

// Task 10:

const Task10 = () => {
    const validateURL = (url) => {
        let regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{2,256}\.[a-z]{2,6})(\/[a-zA-Z0-9@:%_\+.~#?&//=]*)?$/;
        return regex.test(url);
    }
    let url = "https://www.example.com";
    console.log(validateURL(url));
}
Task10();