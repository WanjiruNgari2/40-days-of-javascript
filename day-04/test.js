// ## 1. What will be the output of this code snippet and why?
//  ```js
//  let day = "Monday";

// switch (day) {
//     case "monday":
//         console.log("It's the start of the week.");
//         break;
//     default:
//         console.log("It's a normal day.");
// }
// shall output : It's a normal day bcs the first case doesnt meet the condition where monday !== Monday
// ```

// ## 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. 
// Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

        // let withdraw = 210
        // if (withdraw % 100 === 0){
        //     console.log("Withdrawal successful.");
        // }else{
        //     console.log("Invalid amount")
        // }

// ## 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers.
//  Print the output on the console.
        // let a=100;
        // let b= 10;
        // let operator =  "*";

        // switch (operator) {
        //     case "+" :
        //         result = a + b;
        //         console.log(result);
        //         break;
        //         case "-" :
        //         result = a - b;
        //         console.log(result);
        //         break;
        //     case "/" :
        //         result = a / b;
        //         console.log(result);
        //         break;
        //     case "%" :
        //         result = a % b;
        //         console.log(result);
        //         break;
        //     default:
        //         console.log("invalid operator")
        //         break;
        // }

// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.
            // let age = 333;
            // if (age<18){
            //     console.log("your ticket is $3")
            // } else if (age>=18 && age <= 60) {
            //     console.log("your ticket is $10")
            // } else{
            //     console.log("your ticket is $8")
            // }

// ## 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. 
// Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
            // let month = "August";
            // switch (month){
            //     case "March":
            //     case "April":
            //         console.log("Your zodiac sign is Aries");
            //         break;
            //     case "May":
            //     case "June":
            //         console.log("Your zodiac sign is Taurus");
            //         break;
            //     case "August":
            //     case "September":
            //         console.log("Your zodiac sign is Gemini");
            //         break;
            //     case "October":
            //     case "November":
            //     case "December":
            //         console.log("Your zodiac sign is Scorpio");
            //         break;
            //     default:
            //         console.log("Your zodiac sign is Unknown!");
            // }

// ## 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
// - All sides equal is called, `Equilateral Triangle`.
// - Two sides equal is called, `Isosceles Triangle`. 
// - All sides different is called, `Scalene Triangle`.

// Take the sides of a triangle as input and write a program to determine the triangle type. 
// Change the inputs everytime manually to see if the output changes correctly.
            // let sideA = 210;
            // let sideB = 20;
            // let sideC = 210;

            // if (sideA === sideB && sideA === sideC && sideB === sideC){
            //     console.log("Equilateral Triangle")
            // } else if(sideA === sideB || sideA === sideC || sideB === sideC) {
            //     console.log("Isosceles Triangle")
            // } else{
            //     console.log('Scalene Triangle')
            // }
