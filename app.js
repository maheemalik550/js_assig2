// CHAPTER 9-11
// Q 1
// var userCity = prompt("where do you live");
// if(userCity ==="karachi"){
//     console.log("Welcome to city of lights");
// }
// Q2
// var userGender = prompt("Enter your gender");
// if(userGender === "male"){
//     console.log("Good Morning Sir...");
// }
// if(userGender === "female"){
//     console.log("Good Morning Maam...");
// }
// Q 3
// var signalColor = prompt("Enter signal color");
// if(signalColor === "red"){
//     console.log("Must Stop");
// }
// if(signalColor === "yellow"){
//     console.log("ready to move");
// }
// if(signalColor === "green"){
//     console.log("Move Now");
// }
// Q 4
// var currentFuel = +prompt("Enter your current fuel in car");
// if(currentFuel <0.25){
//     console.log("Please refill the fuel in your car");
// }
// Q 5
// a)
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// // b)
//  var b = 82;
// if (++b === 83){
// alert("given condition for variable b is true");
// }
// c)
// var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c === 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e)
// if (true){
//     alert("True");
//     }
//     if ("false"){
//     alert("False");
//     }
// f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// Q 6
// var firstSubject = +prompt("Enter first subject marks");
// var secondSubject = +prompt("Enter second subject marks");
// var thirdSubject = +prompt("Enter third subject marks");
// var totalMarks = +prompt("Enter  totalMarks ");
// var obtMarks = firstSubject + secondSubject + thirdSubject;
// var percentage = obtMarks / totalMarks * 100;
// if(percentage >=80 && percentage <=100){
//     document.write("percentage" + percentage + "<br>" + "Grade:" + "A+" + "<br>" + "remark:" + "Excellent" );
// }
// else if (percentage >=70 && percentage <=80){
//     document.write("percentage" + percentage + "<br>" + "Grade:" + "A" + "<br>" + "remark:" + "Good" );
// }
// else if (percentage >=60 && percentage <=70){
//     document.write("percentage" + percentage + "<br>" + "Grade:" + "B" + "<br>" + "remark:" + "You need to improve" );
// }
// else if (percentage >=60 ){
//     document.write("percentage" + percentage + "<br>" + "Grade:" + "Fail" + "<br>" + "remark:" + "Sorry" );
// }

// Q 7
// var variable = +prompt("guess the secret number");
// if(variable === 6){
//     console.log("bingo!Correct Answer");
// }
// if(variable === +1){
//     console.log("close enought to correct answer");
// }
// Q 8 
// var number = +prompt("Enter a number");
// if(number %3 ===0){
//     console.log("the number is divisible by 3")
// }else{
//     console.group("the number is not divsible by 3");
// }
// Q 9
// var number = +prompt("Enter a number");
// if(number === 2){
//     console.log("This is even number");
// }
// if(number === 1){
//     console.log("This is odd number ");
// }
// Q 10
// var temperature = +prompt("Enter a temperature value");
// if(temperature <=40){
//     console.log("It is too hot Outside");
// }
// if(temperature <=30){
//     console.log("The weather today is Normal");
// }
// if(temperature <=20 ){
//     console.log("Today Wheaher is cool");
// }
// if(temperature <=10){
//     console.log("OMG! today's Wheather is so cool...")
// }
// Q 11
// var num1 = +prompt("Enter a number");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter a number");
// if(operator === "+"){
//     console.log(num1 + num2);
// }
// if(operator === "-") {
//     console.log(num1 - num2);
// }
// if(operator === "*"){
//     console.log(num1 * num2);
// }
// if(operator === "/"){
//     console.log(num1 / num2);
// }
// if(operator === "%"){
//     console.log(num1 % num2);
// }

// CHAPTER 12-13

// Q 1
// var variable = prompt("enter a variable");
// if(variable === 123){
//     console.log( variable + " " + "is a number");
// }
// else if (variable === "abc"){
//     console.log( variable + " " + "is a lowercase letter");
// }
// else if (variable === "A"){
//     console.log( variable + " " + "is a uppercase letter");
// }
//Q 2
// var integer1 = +prompt("enter a integer");
// var integer2 = +prompt("enter a integer");
// if(integer1 > 0 && integer2 > 0 && integer1 > integer2){
//     console.log("The larger integer is" + " " + integer1);
// }
//  else if(integer1 > 0 && integer2 > 0 && integer2 > integer1){
//     console.log("The larger integer is " + " " + integer2 );
// }
//  if( integer1 = integer2 && integer1 > 0 && integer2 > 0 ){
//     console.log( "both integer are equal");
// }

// Q 3
// var number = +prompt("Enter a number");
// if(number < 0){
//     console.log("the number is negative");
// }
// else if(number > 0){
//     console.log("the number is possitive");
// }
// else if (number === 0){
//     console.log("the number is zero");
// }
 
// Q 4

// var variable = prompt("enter a variable" );
// if(variable === "i"  ){
//     console.log("false");
// }
// else {
//     console.log("True");
// }


// Q 5
// var password = prompt("Enter your password");
// if(password === "helloworld321"){
//     console.log("Correct!");
// }
// else{
//     console.log("Incorrect password try again!");
// }

// Q 6 
// var hour = prompt("enter number");
// var greeting;
// if (hour === 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// Q 6
// var greeting;
// var hour = prompt("enter number");
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);


// Q7 
// var time = +prompt("Enter value");
// if(time > 0000 && time < 1000){
//     document.write("Good Morning");
// }
// else if (time > 1000 && time < 1500){
//     document.write("Good Afternoon!");
// }
// else if (time > 1500 && time <= 1900){
//     document.write("Good Evening!...")
// }