//Create initial arrays of possible characters to use
var lcLetters = "abcdefghijklmnopqrstuvwxyz";
var lcLettersArray = lcLetters.split(""); //splits string array from one to many
var ucLettersArray = lcLetters.toUpperCase().split(""); //leveraging lcletters to create ucLetters
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCharArray = ["!", "#", "$", "%", "&", "(", "*", "+", "-", "/", ":", ";", "<", ">"];

//Delcare variables to store parts of password develop
var yourPW = [];
var password = [];

//Target the Generate Password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //for loop gathering user preferences and creating validation response values
  //this loop also ensures that the user selects at least one character type
  var i = 0;

  let useCaps = false;
  let useLowerCase = false;
  let useNums = false;
  let useSpChars = false;

  while (i < 1) {
    alert("IMPORTANT: You must select AT LEAST ONE OF Caps, lowercase, numbers, or special characters");

    i = 0;
    useCaps = confirm("Can our random generator include CAPS?");
    if (useCaps === true) {
      i++;
      var includeCaps = "CAPS";
    }
    else { includeCaps = "No CAPS" };

    useLowerCase = confirm("Can our random generator include LOWERCASE?");

    if (useLowerCase === true) {
      i++;
      var includeLowerCase = "LOWERCASE letters";
    }
    else { includeLowerCase = "No LOWERCASE letters" };

    useNums = confirm("Can our random generator include NUMBERS?");
    if (useNums === true) {
      i++;
      var includeNums = "NUMBERS";
    }
    else { includeNums = "No NUMBERS" };

    useSpChars = confirm("Can our random generator include SPECIAL CHARACTERS?");
    if (useSpChars === true) {
      i++;
      var includeSpChars = "SPECIAL CHARACTERS";
    }
    else { includeSpChars = "No SPECIAL CHARACTERS" };
  }

  // Prompt for number of characters; ensure result is an integer value
  var howMany = parseInt(prompt("Passwords are be between 8 and 128 characters long. Input desired password length."));

  //while loop ensuring number of characters is in range
  while (isNaN(howMany) || howMany < 8 || howMany > 128) {
    var howMany = prompt("Whoops, please enter a desired password length (must be between 8-128");
  }

  var numChars = parseInt(howMany);

  //final validation alert of user preferences
  alert("You indicated the resulting password can include :" + "\n" + "\n" + "==> " + includeCaps + "\n" + "==> " + includeLowerCase + "\n" + "==> " + includeNums + "\n" + "==> " + includeSpChars + "\n" + "==> " + "And a total of " + numChars + " characters");

  //creating/setting an array as empty prior to adding user-preferred character types to the array
  //ensuring the array is empty in the event the writePassword function 
  //is called more than once in a session
  var includedChars = [];

  //assembling a single array of all user preferred character groups
  if (useCaps === true) {
    includedChars = ucLettersArray;
  }
  
  if (useLowerCase === true) {
    includedChars = includedChars.concat(lcLettersArray);
  }

  if (useNums === true) {
    includedChars = includedChars.concat(numArray);
  }

  if (useSpChars === true) {
    includedChars = includedChars.concat(spCharArray);
  }

  //running for loop to randomly generate string array with password characters
  for (var j = 0; j < numChars; j++) {
    var pwItem = includedChars[Math.floor(Math.random() * includedChars.length)];
    yourPW.push(pwItem);
  }

  password = yourPW.join("");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // emptying arrays so that password results start from scratch if
  //user decides to call the writePassword fuction more than once in a session
  password = [];
  yourPW = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
