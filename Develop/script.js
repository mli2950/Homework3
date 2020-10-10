var lowerCaseChar =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "*", "@", "_"];
var charArr = [];
// Prompt questions

function generatePassword() {
  // Get users input for password length
  // passwordLength stores the value entered by the user
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose a number that is within the range of 8 to 128 characters."));

  // this 'if' statement returns an alert if the user enters a value that isn't within the specific range
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry. Enter a value within the specified range.");
    return "";
  }
  // these variables store the values of the user's input
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");
  // if 'true' the app will concatenate numChar and charArr into a new array
  if (confirmNum === true) {
    var charArr = [];
    var conOne = charArr.concat(numericChar);
  }
  // if 'false' then the app will concatenate charArr with an empty 'conOne' array into a new array
  else {
     var conOne = charArr.concat();
  }

   if (confirmLowerCase === true){
     var conTwo = conOne.concat(lowerCaseChar);
   } else {
     var conTwo = conOne.concat();
   }
   if (confirmUpperCase === true){
     var conThree = conTwo.concat(upperCaseChar);
   } else {
     var conThree = conTwo.concat();
   }
   if (confirmSpecChar === true){
     var conFour = conFour = conThree.concat(specialChar);
   } else {
     var conFour = conFour = conThree.concat();
  }
  var result = conFour.toString();
  console.log(result);

  
    for (var i = 0; i < passwordLength; i++) {
      var random = result.charAt(Math.floor(Math.random() * result.length));
      console.log(random);
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
