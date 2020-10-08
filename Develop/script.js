var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialCaseChar = "~!@#$%^&*()_+";
// Prompt questions

function generatePassword() {
  // Get users input for password length
  var passwordLength = (prompt("How many characters would you like your password to have? Please choose a random number between 8 and 128."));
  if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    alert("Please enter a number between 8-128");
    return;
   }

   // Get users input for if they want numbers
   var confirmNum = confirm("Do you want your password to contain numbers?");
   if (confirmNum === true) {
     alert("Yes");
  } else {
     alert("No");
   }

  // Get users input for if they want lowercase letters
   var confirmLowerCase = confirm("Do you want your password to contain lowercase letters?");

   if (confirmLowerCase === true) {
     alert("Yes");
   } else {
     alert("No");
   }

  // Get users input for if they want uppercase letters
   var confirmUpperCase = confirm("Do you want your password to contain uppercase letters?");
  if (confirmUpperCase === true) {
    alert("Yes");
  } else {
    alert("No");
  }

  // Get users input for if they want special characters
  var confirmSpecChar = confirm(
    "Do you want your password to contain special characters?"
  );
  if (confirmSpecChar === true) {
    alert("Yes");
  } else {
    alert("No");
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
