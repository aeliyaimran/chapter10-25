// chapter 12 to 13
        // // 1
        var inpCheck = prompt("Input Single Character Or Single Number");
        var asciiCode = inpCheck.charCodeAt(0);
        if (asciiCode >= 97 && asciiCode <= 122) {
            document.write("Small Alphabet");
        }
        else if (asciiCode >= 65 && asciiCode <= 90) {
            document.write("Capital Alphabet");
        }
        else if (asciiCode >= 48 && asciiCode <= 57) {
            document.write("Number");
        }

       // // 2
        var numOne = parseInt(prompt("Enter first value : "));
        var numTwo = parseInt(prompt("Enter second value : "));
        if(numOne > numTwo){
            document.write(numOne);
        }else if (numOne < numTwo){
            document.write(numTwo);
        }else if (numOne == numTwo){
            document.write("Equal");
        }else{
            document.write("invalid input.");
        }

       // 3
        var checkNum = parseInt(prompt("Enter a value"));
        if(checkNum > 0){
            document.write("Value is positive");
        }else if(checkNum < 0){
            document.write("Value is Negative");
        }else{
            document.write("ZERO");
        }

       // // 4
        var checkInp = prompt("Enter single character : ").toLowerCase();
        if(checkInp.length > 1){
            document.write("Invalid input");
        }else if(checkInp == 'a' ||checkInp == 'e' || checkInp == 'i' || checkInp == 'o' || checkInp == 'u' ){
       
            document.write(true);
     }else{
            document.write(false)
        }

       // // 5
        var correctPass = 'password';
        var checkPass = prompt("Enter password :");
        if(checkPass == ''||checkPass == null || checkPass == undefined){
            document.write("Please enter your password");
        }else if(checkPass == correctPass) {
            document.write("Correct! The password you entered matches the original password");
        }else{
            document.write("Incorrect password");
       }

       // // 6
       // This if/else statement does not work. Try to fix it:
        var greeting;
        var hour = 13;
        if (hour < 18) {
           greeting = "Good day";
       // else here is the error " the closing curly bracket of 'if statement'is missing and opening curly bracket of 'else statement' is missing"
            greeting = "Good evening";
        }
       // Below is the solution
        var greeting;
        var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
            document.write(greeting);
        }else{
            greeting = "Good evening";
            document.write(greeting);
       }
       
       // // 7
        var checkTime = parseInt(prompt("Enter current time in 24Hrs format between 0000 and 2359"));
        if(checkTime >= 0o0 && checkTime < 1200){
            document.write("Good Morning.");
        }else if(checkTime >= 1200 && checkTime < 1700){
            document.write("Good Afternoon.");
        }else if(checkTime >= 1700 && checkTime < 2100){
            document.write("Good Evening.");
        }else if(checkTime >= 2100 && checkTime < 2359){
            document.write("Good Night.");
        }else{
          document.write("Invalid Input.");
        }