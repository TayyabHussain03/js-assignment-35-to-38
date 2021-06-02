// **********QUESTION 1**********

// function date(){
//     var today = new Date()
//     console.log(today)
// }
// date()


// **********QUESTION 2**********

// function xyz(){
//     firstName = prompt("Enter Your First Name")
//     lastName = prompt("Enter Your Last Name")
//     alert("Welcome! " + firstName + " " + lastName)
// }
// xyz()


// **********QUESTION 3**********

// function add(){
//     var num1 = +prompt("Enter First Number Here")
//     var num2 = +prompt("Enter Second Number Here")
//     addition = num1 + num2
//     alert(addition)
// }
// add()


// ********** QUESTION 4 **********

// var num1 = +prompt("Enter First Number Here")
// var num2 = +prompt("Enter Second Number Here")
// var operator = prompt("Select Operator (*, +, -, /")

// function calc() {
//     if (operator === "*") {
//         alert(num1 * num2)
//     }
//     else if (operator === "+") {
//         alert(num1 + num2)
//     }
//     else if (operator === "-") {
//         alert(num1 - num2)
//     }
//     else if (operator === "/") {
//         alert(num1 / num2)
//     }
// }
// calc()


// **********QUESTION 5**********

// function square() {
//     var num = +prompt("Enter any number Here")
//     var squareNumber = num ** 2
//     alert("The Square of " + num + " is " + squareNumber)
// }
// square()


// **********QUESTION 6**********

// var num = +prompt("Enter Factorial Number here")

// function factor() {
//     if (num === 0 || num === 1) {
//         alert("The Factorial of " + num + " is 1")
//     }
//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i
//     }
//     alert(num)
// }
// factor()


// **********QUESTION 7**********

// var num1 = +prompt("What is the Number Where You Want to start Counting")
// var num2 = +prompt("What is the Number Where You Want to end Counting")

// function counting(){
//     for(i = num1 ; i <= num2 ; i++ ){
//         document.write("<h4>" + i + "</h4>")
//     }
// }
// counting()


// **********QUESTION 8**********

// function Hypotenuse() {
//     var massage = alert("Calculate Hypotenuse of Right Angle Triangle")
//     var base = +prompt("Enter Base of Right Angle Triangle Here")
//     var per = +prompt("Enter Perpendicular of Right Angle Triangle Here")
//     var hyp = base ** 2 + per ** 2
//     var hyp = Math.sqrt(hyp)
//     alert("The Hypotenuse of Right Angle Triangle is " + hyp)
// }
// Hypotenuse()


// **********QUESTION 9**********

// function Area() {
//     var width = +prompt("Enter Width of a Rectangle")
//     var height = +prompt("Enter Height of a Rectangle")
//     var area = width * height
//     alert("The Area of Rectangle is " + area)
// }
// Area()


// **********QUESTION 10**********

// var input = prompt("Enter Any Word Here to check it is Palindrome or Not")

// function checkPalindrome(str) {
//     var valuesSplit = input.split('')
//     var reverseValues = valuesSplit.reverse()
//     var reverseString = reverseValues.join('')

//     if (input === reverseString) {
//         alert("This word is Palindrome")
//     }

//     else if (input != reverseString) {
//         alert("It is not Palindrome Word")
//     }

// }

// checkPalindrome(input)


// **********QUESTION 12**********

// function getLongestWord(word) {
//     var longest = "";
//     var split = word.split(" ");
//     for (var i = 0; i < split.length; i++) {
//         if (split[i].length > longest.length) {
//             longest = split[i]
//         }
//     }
//     return longest;

// }

// var result1 = getLongestWord("Web Development Tutorial")
// console.log(result1)
