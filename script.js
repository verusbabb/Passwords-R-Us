// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); {
    
    //Create arrays to use in password generator
    var lcLetters = "abcdefghijklmnopqrstuvwxyz";
    var lcLettersArray = lcLetters.split(""); //takes one long string value and separates them into individual values
    var ucLettersArray = lcLetters.toUpperCase().split(""); //quick way to leverage ucLettersArray to create all CAPs array
    var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var spCharArray = ["!", "#", "$", "%", "&", "(", "*", "+", "-", "/", ":", ";", "<", ">", "?", "@", "[", "^", "_", "{", "}", "~"]; 



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
