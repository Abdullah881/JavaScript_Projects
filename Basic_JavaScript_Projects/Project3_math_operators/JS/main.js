// Function to perform addition
function Add_Function(){
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

// Function to perform subtraction
function Sub_Function(){
    var subtract = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtract;
}

// Function to perform multiplication
function Multiply_Function(){
    var SimpleMath = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + SimpleMath;
}

// Function to perform division
function Divide_Function(){
    var SimpleMath = 42/7;
    document.getElementById("Math").innerHTML = "42/7 = " + SimpleMath;
}

// Function to perform a more complex mathematical expression
function Math_Function(){
    var SimpleMath = (1 + 2 ) * 10/2 - 5;
    document.getElementById("Math").innerHTML = "(1 + 2 ) * 10/2 - 5 = " + SimpleMath;
}

// Function to calculate the remainder (modulus)
function Mod_Function(){
    var SimpleMath = 10 % 3;
    document.getElementById("Math").innerHTML = "Remainder is " + SimpleMath;
}

// Function to demonstrate a unary negative operation
function Un_Function(){
    var SimpleMath = -5;
    document.getElementById("Math").innerHTML = "Negative of 5 is " + SimpleMath;
}

// Variables for demonstration
var A = 5 ;
var B = 11;

// Increment and decrement examples
A++;
B--;

// Displaying variables and random number
document.write("<br>");
document.write(A);
document.write("<br>");
document.write(B);
document.write("<br>");
document.write("Random Number = " + (Math.random() * 10));
document.write("<br>");
document.write("<br>");
document.write("<br>");
