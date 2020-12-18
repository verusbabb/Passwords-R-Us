<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <script type="text/javascript">

        //Get user preference values:
        var useCaps = confirm("Would you like to use capital letters in your password?");

        var useLowerCase = confirm("Would you like to use lower case letters in your password?");

        var useNums = confirm("Would you like to use numbers in your password?");

        var useSpChars = confirm("Would you like to use special characters in your password?");

        var numChars = prompt("Passwords have to be between 8-128 characters.  How many would you like your password to be?");

        //Ensuring they are in character length range.
        while (numChars < 8 || numChars > 128) {
            numChars = prompt("Whoops, your password has to be between 8 and 128 characters.  Please specify a number in that range.")
        }

        //console.log printout.
        console.log(useCaps, useLowerCase, useNums, useSpChars, numChars);

    </script>
</body>

</html>