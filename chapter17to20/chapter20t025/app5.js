//Q.1
let firstName = prompt("Enter your first name:");

// Prompt the user to enter their last name
let lastName = prompt("Enter your last name:");

// Merge the first name and last name into a full name
let fullName = firstName + " " + lastName;

// Greet the user with their full name
alert("Hello, " + fullName + "!");

//Q.2
// Prompt the user to enter their favorite mobile phone model
let mobileModel = prompt("Enter your favorite mobile phone model:");

// Find the length of the user input
let inputLength = mobileModel.length;

// Display the length of the user input in the browser
alert("The length of your input is: " + inputLength);


//Q.3
let word = "Pakistani";


let indexOfN = word.indexOf("n");


alert("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

//Q.4

let a = "Hello World";


let lastIndexOfL = a.lastIndexOf("l")

alert("The last index of 'l' in the a 'Hello World' is: " + lastIndexOfL);

// Q.5


let word2 = "Pakistani";

let charAtThirdIndex = word2.charAt(3);

alert("The character at the 3rd index in the word2 'Pakistani' is: " + charAtThirdIndex);

// Q.6

let firstName1 = prompt("Enter your first name:");


let lastName1 = prompt("Enter your last name:");


let fullName1 = firstName1.concat(" ", lastName1);


alert("Hello, " + fullName1 + "!");

//Q.7


let city = "Hyderabad";


let newCity = city.replace("Hyder", "Islam");


alert("The new name of the city is: " + newCity);

//Q.8


let text = "IMRAN and AELIYA ARE HUSBAND WIFE.";

let newText = text.replace(/and/, "&");


alert("The updated string is: " + newText);

//Q.9

let str = "472";
let num = parseInt(str);


alert("Original string value: " + str );


alert("Converted number value: " + num  );

//Q.10


let userInput = prompt("Enter your input:");

let capitalizedInput = userInput.toUpperCase();


alert("Your input in capital letters: " + capitalizedInput);

//Q.11

// Prompt the user to enter input
let userInput1 = prompt("Enter your input:");


function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(char) {
        return char.toUpperCase();
    });
}


let titleCaseInput1 = toTitleCase(userInput1);


alert("Your input in title case: " + titleCaseInput1);

//Q.12

// Variable declaration
let num1 = 35.36;

// Convert the number to a string and remove the dot
let numAsString = num1.toString().replace(".", "");

// Display the result in the browser
alert("Result: " + numAsString);

//Q.13

// Function to check if a character is a special symbol
function isSpecialSymbol(char) {
    const specialSymbols = ['@', '.', '!'];
    return specialSymbols.includes(char);
}

// Prompt the user to enter a username
let username = prompt("Enter your username:");

// Flag to track if the username is valid
let isValid = true;

// Check each character of the username
for (let i = 0; i < username.length; i++) {
    if (isSpecialSymbol(username[i])) {
        isValid = false;
        break;
    }
}

// If username contains special symbols, prompt the user to enter a valid username
if (!isValid) {
    alert("Invalid username! Username cannot contain special symbols [@, ., !]");
} else {
    alert("Valid username! Welcome, " + username + "!");

}

//Q.14

// Array of items
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search
function searchItem(item) {
    // Convert item and array elements to lowercase for case-insensitive search
    let lowercaseItem = item.toLowerCase();
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === lowercaseItem) {
            return true;
        }
    }
    return false;
}

// Prompt the user to enter an item for search
let userInput2 = prompt("Enter an item to search:");

// Perform search and display the result
if (searchItem(userInput2)) {
    alert(userInput2 + " is found in the list!");
} else {
    alert(userInput2 + " is not found in the list.");
}

//Q.15

// Function to check if a character is a letter
function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

// Function to check if a character is a digit
function isDigit(char) {
    return /\d/.test(char);
}

// Function to validate the password
function validatePassword(password) {
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        return false;
    }
    // Check if the first character is a letter
    if (!isLetter(password[0])) {
        return false;
    }
    // Check if the password contains at least one letter and one digit
    let hasLetter = false;
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
        if (isLetter(password[i])) {
            hasLetter = true;
        }
        if (isDigit(password[i])) {
            hasDigit = true;
        }
    }
    return hasLetter && hasDigit;
}

// Prompt the user to enter a password
let password = prompt("Enter your password:");

// Validate the password
if (validatePassword(password)) {
    alert("Password is valid!");
} else {
    alert("Invalid password! Password must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long.");
}

//Q.16

// String to convert to an array
let  university = "University of Karachi";

// Convert the string to an array using split method
let universityArray = university.split(" ");

// Display the elements of the array in the browser
alert("Array elements: ");
for (var i = 0; i < universityArray.length; i++) {
    alert(universityArray[i] + ", ");
}

//Q.17

// Prompt the user to enter input
let userInput3 = prompt("Enter your input:");

// Get the last character of the input
let lastCharacter = userInput3.charAt(userInput3.length - 1);

// Display the last character
alert("The last character of your input is: " + lastCharacter);


//Q.18

let string = "The quick brown fox jumps over the lazy dog";


function countOccurrences(string, word) {
    
    let lowerStr = string.toLowerCase();
    let lowerWord = word.toLowerCase();
    let wordsArray = lowerStr.split(" ");

    
    let count = 0;

    
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === lowerWord) {
            count++;
        }
    }

    return count;
}
let occurrences = countOccurrences(str, "the");


alert("Number of occurrences of 'the' in the given string: " + occurrences);


