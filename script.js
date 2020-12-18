// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  //Create initial arrays of possible characters to use
  var lcLetters = "abcdefghijklmnopqrstuvwxyz";
  var lcLettersArray = lcLetters.split(""); //splits string array from one to many
  var ucLettersArray = lcLetters.toUpperCase().split(""); //leveraging lcletters to create ucLetters
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spCharArray = ["!", "#", "$", "%", "&", "(", "*", "+", "-", "/", ":", ";", "<", ">"];

  //Declare variables to hold user preference values
  var useCaps = false;
  var useLowerCase = false;
  var useNums = false;
  var useSpChars = false;

  //Gather user preferences; Decided to force use
  //to use at least two character types; using a
  //for loop to accomplish.
  var i = 0;

  while (i < 2) {

    alert("IMPORTANT: Your password must contain at least TWO of the following:  Caps, Lowercase, Numbers, and/or Special Characters");

    i = 0;
    useCaps = confirm("Would you like to include capital letters in your password?");
    if (useCaps === true) {
      i++,
        includeCaps = "Caps";
    }
    else { includeCaps = "No caps" };

    useLowerCase = confirm("Would you like to include lower case letters in your password?");

    if (useLowerCase === true) {
      i++,
        includeLowerCase = "Lowercase letters";
    }
    else { includeLowerCase = "No lowercase letters" };

    useNums = confirm("Would you like to include NUMBERS in your password?");
    if (useNums === true) {
      i++,
        includeNums = "Numbers";
    }
    else { includeNums = "No Numbers" };

    useSpChars = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
    if (useSpChars === true) {
      i++,
        includeSpChars = "Special Characters";
    }
    else { includeSpChars = "No Special Characters" };
  }

  // Gather user preference for number of characters to use in their password and
  // ensure it is a number and it falls within the range of 8 and 128
  var howMany = parseInt(prompt("Passwords are be between 8 and 128 characters long. Input desired password length."));

  while (isNaN(howMany) || howMany < 8 || howMany > 128) {
    howMany = prompt("Whoops, please enter a desired password length (type in a number between 8-128");
  }

  var numChars = parseInt(howMany);

  //final validation alert of user preferences
  alert("Your password will be comprised of:" + "\n" + "\n" + includeCaps + "\n" + includeLowerCase + "\n" + includeNums + "\n" + includeSpChars + "\n" + "And a total of " + numChars + " characters");


  var includedChars = [];

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

  console.log(includedChars);

  var yourPW = [];
  // var yourPWstring = [];

  for (var j = 0; j < numChars; j++) {
    var pwItem = includedChars[Math.floor(Math.random() * includedChars.length)];
    yourPW.push(pwItem);
  }

  console.log(yourPW);

  var password = generatePassword(yourPW);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

  // Write password to the #password input
  function generatePassword(PWord) {
  
    Pword = PWord.join("");
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
