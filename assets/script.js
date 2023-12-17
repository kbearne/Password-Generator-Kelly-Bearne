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

// Global array of character set options - stored as objects with a status (which is changed depending on user selection)
const charOptions = [
  { name: "specialCharacters", status: false },
  { name: "numericCharacters", status: false },
  { name: "lowerCasedCharacters", status: false },
  { name: "upperCasedCharacters", status: false },
];

// Global variables - to store the generated password and the password length
let generatedPassword = "";
let passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  // Get password length from user input
  passwordLength = parseInt(document.getElementById("passwordLength").value);

  // Get character set options from user input
  charOptions[0].status = document.getElementById("specialCharacters").checked;
  charOptions[1].status = document.getElementById("numericCharacters").checked;
  charOptions[2].status = document.getElementById("lowerCasedCharacters").checked;
  charOptions[3].status = document.getElementById("upperCasedCharacters").checked;

  // Validate input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  if (!charOptions.some(option => option.status)) {
    alert("Please select at least one character set.");
    return;
  }
}

// Function for getting a random element from an array
function getRandom() {
  // Filter all character sets that are set as 'true'
  let trueCharOptions = charOptions.filter(option => option.status);

  for (let i = 0; i < passwordLength; i++) {
    let passwordCharacterIndex = 0;
    let selectedCharSetIndex = 0;

    // Math.random to select one of the charOptions array items (if set to true)
    selectedCharSetIndex = Math.floor(Math.random() * trueCharOptions.length);

    // Switch matches the randomly selected character array with the master array
    switch (selectedCharSetIndex) {
      case 0:
        passwordCharacterIndex = Math.floor(Math.random() * specialCharacters.length);
        generatedPassword += specialCharacters[passwordCharacterIndex];
        break;
      case 1:
        passwordCharacterIndex = Math.floor(Math.random() * numericCharacters.length);
        generatedPassword += numericCharacters[passwordCharacterIndex];
        break;
      case 2:
        passwordCharacterIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
        generatedPassword += lowerCasedCharacters[passwordCharacterIndex];
        break;
      case 3:
        passwordCharacterIndex = Math.floor(Math.random() * upperCasedCharacters.length);
        generatedPassword += upperCasedCharacters[passwordCharacterIndex];
        break;
      default:
        return 1;
    }
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  // Clear the previous password
  generatedPassword = "";
  
  // Check that at least one character set is selected before proceeding
  if (charOptions.every(option => !option.status)) {
    return;
  }

  getRandom();

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // If no errors then display output
  if (password !== undefined && password.length > 7 && password.length < 129) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', function (event) {
  writePassword(event);
});

// Update the password length slider value dynamically
var passwordLengthSlider = document.getElementById("passwordLength");
var passwordLengthValue = document.getElementById("passwordLengthValue");

// Update the displayed value when the slider value changes
passwordLengthSlider.addEventListener("input", function () {
  passwordLengthValue.textContent = passwordLengthSlider.value;
});

// Add event listener to reset button
var resetBtn = document.querySelector('input[type="reset"]');
resetBtn.addEventListener('click', function () {
  // Reset the password length value to its default
  passwordLengthSlider.value = 8;
  passwordLengthValue.textContent = passwordLengthSlider.value;

  // Manually trigger the input event to update the displayed value
  var inputEvent = new Event('input');
  passwordLengthSlider.dispatchEvent(inputEvent);
});