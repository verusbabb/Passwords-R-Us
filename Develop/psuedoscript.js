// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


function generatePassword() {


   //PSUEDO CODE:
  //Create an OBJECT called userCriteria with the following properties and default values:
    //useCaps :false
    //useLowerCase:true (setting as true to force userCriteria to have at least one true value; will not be asking user for preferences on whether to use lower case)
    //useNums:false
    //useSpChars:false
    //numChars: 0
  
    var userCriteria = {
      useCaps : false,
      useLowerCase : true,
      useNums : false,
      useSpChars : false,
      numChars: 0,
      }
  
      //CONFIRM: Passwords will contain lower case letters by default.  Would you also like to use capital letters in your password? 
      //Reassign value in useCaps property of userCriteria with their response.
          //IF they want...
          //ALERT "Your password will include include capital letters".
              //ELSE
                //ALERT "Your password won't include capital letters"
  
      userCriteria.useCaps = confirm("All passwords will contain lower case letters, but you can also choose to include numbers, caps, and/or special characters.  Would you like to include CAPS?");
  
          if (userCriteria.useCaps == true) {
              alert("You have chosen to INCLUDE CAPS in your password");
          }
              else {
                  alert("You have chose to NOT INCLUDE CAPS in your password");
              }
  
      //CONFIRM: Would you also like to use numbers in your password? 
      //Reassign value in useNums property of userCriteria with their response.
          //IF they want...
          //ALERT "Your password will include include numbers".
              //ELSE
                //ALERT "Your password won't include numbers"
  
      userCriteria.useNums = confirm("Would you like to include NUMBERS in your password?");
  
          if (userCriteria.useNums == true) {
              alert("You have chosen to INCLUDE NUMBERS in your password");
          }
                  else {
                      alert("You have chose to NOT INCLUDE NUMBERS in your password");
                  }
  
    //CONFIRM: Would you also like to use special characters in your password? 
      //Reassign value in useSpChars property of userCriteria with their response.
          //IF they want...
          //ALERT "Your password will include include special characters".
              //ELSE
                //ALERT "Your password won't include special characters."
  
      userCriteria.useSpChars = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
  
          if (userCriteria.useSpChars == true) {
              alert("You have chosen to include SPECIAL CHARACTERS in your password");
          }
                  else {
                      alert("You have chose to NOT INCLUDE SPECIAL CHARACTERS in your password");
                  }
  
    //PROMPT: Your password needs to have between 8-128 characters.  How many would you like to use?
    //Reassign value in numChars property of userCriteria.
      //LOOP until numChars is between 8-128:
          //IF numChars is between 8-128...
            //ALERT user: "You have opted to create a password that contains " + userCriteria.numChars + ".".
              //ELSE PROMPT user: "The number of characters needs to be between 8-128.  How many would you like?"
  
      userCriteria.numChars = prompt("Your password must be between 8 and 128 characters in length.  How many characters would you like to use?")
  
      var numCharsInt = parseInt(userCriteria.numChars);
  
      while (numCharsInt < 8 || numCharsInt > 128) {
          userCriteria.numChars = prompt("Whoops, your password has to be between 8 and 128 characters.  Please specify a number in that range")
          numCharsInt = userCriteria.numChars;
      }
        
  
      userCriteria.numChars = numCharsInt;

      alert("Your password will contain " + userCriteria.numChars + " characters.");
  
      console.log(userCriteria.useCaps, userCriteria.useLowerCase, userCriteria.useNums, userCriteria.useSpChars, userCriteria.numChars);
  
  
    //Generate a password using all property values of userCriteria.

}

  var password = generatePassword();
    
    
    

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
