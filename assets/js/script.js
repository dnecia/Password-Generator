// Assignment Codes
var generateBtn = document.querySelector("#generate");
//Special Characters
var specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
//number characters
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//lowercase characters
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//uppercaseCharacters
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var returnedPassword = "";

var passwordLength;
var specialCheck;
var numberCheck;
var lowercaseCheck;
var uppercaseCheck;
//First prompt instructing password length 
function determineLength() {
  passwordLength = prompt(
    "How many characters would you like to contain in your password?"
  );
  if (passwordLength < 8) {
    //if user enters characters less than 8 alerted that it needs to be at least 8 characters
    alert("Password must be at least 8 characters and no more than 129 characters.");
    determineLength();
    //if user enters characters greater than 129 alerted that it needs to be at less than 129 characters
  } else if (passwordLength > 129) {
    alert("Password must be less than 129 characters.");
    determineLength();
    //if user enters anything but a number, then alerted to enter a number 
  } else if (isNaN(passwordLength)) {
    alert("Please enter a number only.");
    determineLength();
  } else {
    alert(
      "Choose what types of characters would you like to use in your generated password."
    );
  }
  return passwordLength;
}
//Prompt instructing special character 
function determineSpecial() {
  specialCheck = confirm("Click OK to comfirm inclusion of special characters.");
  return specialCheck;
}
//Prompt instructing number characters
function determineNumber() {
  numberCheck = confirm("Click OK to comfirm inclusion of number characters.");
  return numberCheck;
}
//Prompt instructing lowercase characters
function determinelowercase() {
  lowercaseCheck = confirm(
    "Click OK to comfirm inclusion of lowercase characters."
  );
  return lowercaseCheck;
}
//Prompt instructing uppercase characters
function determineuppercase() {
  uppercaseCheck = confirm(
    "Click OK to comfirm inclusion of uppercase characters."
  );
  return uppercaseCheck;
}
//Addition of the console for each of the password criteria
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineSpecial();
  console.log(specialCheck);
  determineNumber();
  console.log(numberCheck);
  determinelowercase();
  console.log(lowercaseCheck);
  determineuppercase();
  console.log(uppercaseCheck);
  var passwordCharacters = "";

  if (specialCheck) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  if (numberCheck) {
    passwordCharacters = passwordCharacters.concat(numberCharacters);
  }

  if (lowercaseCheck) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
  }

  if (uppercaseCheck) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
  }

  // console.log(passwordCharacters);

  console.log(passwordLength);

  for (i = 0; i < passwordLength; i++) {
    returnedPassword =
      returnedPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    // console.log(returnedPassword);
  }

  console.log(returnedPassword);
  return returnedPassword;
}


// Write password to the #password input
function writePassword() {
  var passwordLength = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordLength;
}

// Event listener to generate button on click
generateBtn.addEventListener("click", writePassword);

