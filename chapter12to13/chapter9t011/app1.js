//chapter 9 to 11
 // // 1
 var cityName = prompt("Enter city name : ").toLocaleLowerCase();
 if(cityName == "karachi"){
     alert("Welcome to the city of lights");
 }else{
     alert("Welcome to the city");
 }

// // 2
 var gender = prompt("Enter gender : ").toLocaleLowerCase();
 if (gender == 'male'){
     document.write("Good morning sir");
 }else if (gender == 'female'){
     document.write("Good morning ma'am");
 }else{
     document.write("Invalid input");
 }

// // 3
 var currSignal = prompt("Enter traffic signal color : ").toLowerCase();
 if (currSignal == 'red'){
     alert("Must stop!");
 }else if(currSignal == 'yellow'){
     alert("Ready to move");
 }else if(currSignal == 'green'){
     alert("Move now");
 }else{
     alert("invalid input");
 }

// 4
 var fuelRemain = parseFloat(prompt("Enter fuel remaining : "));
 if (fuelRemain < 0.25){
     alert("Plearse refill the fuel in your car ");
 }else{
     alert("Keep going");
 }

// 5
// // a
 var a = 4;
 if (++a === 5) {
     alert("given condition for variable a is true");
 }

 //condition a is true
//b
 var b = 82;
if (b++ === 83) {
     alert("given condition for variable b is true");
 }
 //condition b is false
// c
var c = 12;
if (c++ === 13) {
     alert("condition 1 is true");
 false
 }
 if (c === 13) {
     alert("condition 2 is true");
 true
 }
 if (++c < 14) {
     alert("condition 3 is true");
 false
 }
 if (c === 14) {
     alert("condition 4 is true");
 true
 }

// // d
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost) {
     alert("The cost equals");
 }
 true 

// // e
 if (true) {
     alert("True");
    // runs
 } 
 if (false) {
     alert("False");
     // does not run
 }

// // f
 if ("car" < "cat") {
     alert("car is smaller than cat");
    // true because "r" comes before than "t"
 }


// // 6
 var obt_one = parseInt(prompt("Marks obtained in first subject"));
 var obt_two = parseInt(prompt("Marks obtained in second subject"));
 var obt_three = parseInt(prompt("Marks obtained in third subject"));
 var max_marks = 300;
 var total_obt = (obt_one+obt_two) + obt_three ;
 var obt_per = ((total_obt/max_marks)*100).toFixed(2);
 document.write("<h1>Marks Sheet</h1>");
 document.write("Total Marks :"+ max_marks +"<br/>");
 document.write("Marks Obtained :"+ total_obt +"<br/>");
 document.write("Percentage :"+ obt_per +"%"+"<br/>");
 if(obt_per >= 80){
     document.write("Grade : A-one"+"<br/>");
     document.write("Remarks : Excellent"+"<br/>");
 }else if(obt_per >= 70){
     document.write("Grade : A"+"<br/>");
     document.write("Remarks : Good"+"<br/>");
 }else if(obt_per >= 60){
     document.write("Grade : B"+"<br/>");
     document.write("Remarks : You need to improve"+"<br/>");
 }else if(obt_per < 60){
     document.write("Grade : Fail"+"<br/>");
     document.write("Remarks : Sorry"+"<br/>");
 }else{
     document.write("invalid input"+"<br/>");
 }

// // 7
 var random_int = Math.random()*10;
 var guess = random_int.toFixed();
 var user = parseInt(prompt("Guess a number between 1 and 10"));
 if (user == guess){
     document.write("Bingo! Correct answer");
 }else if (user+1 == guess){
     document.write("Close enough to the correct answer");
 }else{
     document.write("Wrong Answer");
 }

// // 8
 var checkNum = parseInt(prompt("Enter Number : "));
 if (checkNum%3 == 0){
     document.write("Number is divisible by 3");
 }else{
     document.write("Number is not divisible by 3");
 }

// 9
 var checkEven = parseInt(prompt("Enter Number : "));
 if (checkEven % 2 == 0) {
     document.write("Even");
 } else {
     document.write("Odd");
}

// // 10
 var inpTemp = parseInt(prompt("Input temperature : "));
 if (inpTemp > 40){
     document.write("It is too hot outside.");
 }else if (inpTemp > 30){
     document.write("The Weather today is Normal.");
 }else if (inpTemp > 20){
     document.write("Today’s Weather is cool.");
 }else if (inpTemp > 10){
     document.write("OMG! Today’s weather is so Cool.");
 }else{
     document.write("Invalid Input");
}

// 11
 var firstNumber = parseInt(prompt("Enter First Number : "));
 var SecondNumber = parseInt(prompt("Enter Second Number : "));
 var operation = prompt("Enter Operator symbol Ex. '+','-','*','/','%' : ");
 if (operation == '+'){
     document.write(firstNumber+SecondNumber);
 }else if (operation == '-'){
     document.write(firstNumber-SecondNumber);
 }else if (operation == '*'){
     document.write(firstNumber*SecondNumber);
 }else if (operation == '/'){
     document.write(firstNumber/SecondNumber);
 }else if (operation == '%'){
     document.write(firstNumber%SecondNumber);
 }else{
 document.write("Invalid Input.")
 }