<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <script type="text/javascript">

        //Define object

            var userCriteria = {
                useCaps: false,
                useLowerCase: false,
                useNums: false,
                useSpChars: false,
                numChars: 0,
            }

        //get user inputs for caps, lowercase, uppercase, and special characters.

                userCriteria.useCaps = confirm("Would you like to include capital letters in your password?");
                userCriteria.useLowerCase = confirm("Would you like to include lower case letters in your password?")
                userCriteria.useNums = confirm("Would you like to include NUMBERS in your password?");
                userCriteria.useSpChars = confirm("Would you like to include SPECIAL CHARACTERS in your password?");

        //get user input for how many characters.
                howMany = prompt("Your password must be between 8 and 128 characters in length.  How many characters would you like to use?");


        //ensure that the number is between 8-128.
            while (howMany < 8 || howMany > 128) {
                howMany = prompt("Whoops, your password has to be between 8 and 128 characters.  Please specify a number in that range");
            }


        //assign user
                userCriteria.numChars = parseInt(howMany);


        //validate users preferences  on screen.
            alert("Confirming preferences --> Use caps =  " + userCriteria.useCaps + ";  Use lower case = " + userCriteria.useLowerCase + ";  Use special characters = " + userCriteria.useSpChars + ";  Use numbers =  " + userCriteria.useNums + ";  AND, be " + howMany + " long.");


        //print final preferences in console.
                console.log(userCriteria.useCaps, userCriteria.useLowerCase, userCriteria.useNums, userCriteria.useSpChars, userCriteria.numChars);


    </script>
</body>

</html>