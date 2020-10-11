
// Variables to store character lists
var lowerCaseChar = "abcdefghizjklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar =  "0123456789";
var specialChar = "!#$%& '()*+,-./:;<=>?@[]^_`{|}~";
var charArr = [];

function generatePassword() {
  // Get users input for password length
  // passwordLength stores the value entered by the user
  var passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose a number that is within the range of 8 to 128 characters."));

  // Check if users input is less than 8, more than 128, or not a number.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry. Enter a value within the specified range.");
    return "";
  }
  // Check what conditions the user wants
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");

  // If the user selected no to all conditions, return an error
  if (confirmNum != true && confirmLowerCase != true && confirmUpperCase != true && confirmSpecChar != true) {
    alert("You must select at least one character type");
  }
  
  // if 'true' the app will concatenate numChar and charArr into a new array
  if (confirmNum === true) {
  var conOne = charArr.concat(numericChar);
  }
  // if 'false' then the app will concatenate charArr with an empty 'conOne' array into a new array
  else {
    var conOne = charArr.concat();
  }

  // Concatenate lower case into conOne 
   if (confirmLowerCase === true){
     var conTwo = conOne.concat(lowerCaseChar);
   } else {
  // Concatenate an empty string into conOne if user selects no
     var conTwo = conOne.concat();
  }
  
  // Concatenate upper case characters into conTwo
   if (confirmUpperCase === true){
     var conThree = conTwo.concat(upperCaseChar);
   } else {
  // Concatenate an empty string into conTwo if user selects no
     var conThree = conTwo.concat();
  }
  
  // Concatenate special characters into conThree
   if (confirmSpecChar === true){
     var conFour = conFour = conThree.concat(specialChar);
   } else {
  // Concatenate an empty string into conThree if user selects no
     var conFour = conFour = conThree.concat();
  }

  // Create a new variable to turn the concatenated array of characters into a string
  var result = conFour.toString();
  // console.log result to ensure correct output
  console.log(result);

  // Create a new empty variable to store the randomized password characters
  var complete = ""; 
  // For loop to generate the random characters
  for (var i = 0; i < passwordLength; i++) {
  // Create a new variable random, then use Math.floor, Math.random * result.length to select a random character inside the concatenated character lists 
    var random = result.charAt(Math.floor(Math.random() * result.length));
  // Console log the randomly selected characters to ensure correct output
    console.log(random);
  // Add the randomly selected character to the complete variable created above the for loop
    complete = complete.concat(random);
     
  }
  
  

  
  // Return the completed random password
  return complete;

  
  
  

  

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
