// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global variables
const charOptions = [
  { name: "specialCharacters", status: false },
  { name: "numericCharacters", status: false },
  { name: "lowerCasedCharacters", status: false },
  { name: "upperCasedCharacters", status: false },
];

const generatedPassword = '';

// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt the user to provide a password between 8 - 128 characters until the input is valid
  let passwordLength = 0;

  do {
    passwordLength = parseInt(prompt("Choose a password length between 8 - 128 characters:"));
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength));

  // Prompt the user until they select at least one character set set charOptions 'status' to match selections
  do {
    charOptions[0].status = confirm("Would you like to use special characters? Please click OK for true or Cancel for false");
    charOptions[1].status = confirm("Would you like to use numeric characters? Please click OK for true or Cancel for false");
    charOptions[2].status = confirm("Would you like to use lower case characters? Please click OK for true or Cancel for false");
    charOptions[3].status = confirm("Would you like to use upper case characters? Please click OK for true or Cancel for false");
  } while (!charOptions[0].status && !charOptions[1].status && !charOptions[2].status && !charOptions[3].status);

}

// Function for getting a random element from an array
function getRandom(arr) {
  let generatingPassword = "";

  for (let i = 0; i < passwordLength; i++) {

  }
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);