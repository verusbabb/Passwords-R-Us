// Assignment Code
var generateBtn = document.querySelector("#generate");  
//Overall purpose of this function is to style the "Generate Password" button.
    //use various lines of code:  generateBtn.setAttribute("style", insert style specifics);

var passwordBox = document.querySelector("#password");
//Style the text "generate password" and "Your secure password elements"
    //password.setAttribute("style", insert style specifics); (need to refer to children to get at individual elements within the ID )

var h1Text = document.querySelectorAll;("#header");
h1Text.setAttribute("style", "font-size: 45px;");
//Style the overall wrapper.
// overallWrapper.setAttribute("style", "background:blue, ");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
