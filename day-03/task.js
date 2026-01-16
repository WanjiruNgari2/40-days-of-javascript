// ## 1. Odd or Even?
//  - [ ] Take a number and find if the number is an odd or even number.
//  - [ ] Print the number and result in the console.

        let num = [11, 23, 34, 4, 5, 6, 77, 8, 9, 10];
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 !== 0) {
                console.log(`${num[i]}  is an odd number`);
            } else {
                console.log(`${num[i]}  is an even number`);

            }
        }

// ## 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years. 
// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

        let age = 7;
            if(age>= 18){
                console.log(`At age ${age} you are eligible to drive`); 
            } else {
                console.log(`SORRY, At age ${age} you are not eligible to drive`); 
            }

            // age >= 18 ? "eligible" : "not eligible" ;

// ## 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.
// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?


        let annualSalary = 12300 * 12 ;
        console.log(annualSalary); //147600
        let bonus = (20 * annualSalary) / 100;
        console.log(bonus) // 29520
        let annualEarnings = annualSalary + bonus 
        console.log(annualEarnings) // 177120


// ## 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!
// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. 
// The Red color is for STOP and the Green color is for GO.

        let color = ["red", "Green"];
        for (let i = 0; i < color.length; i++) {
            console.log(`what will you choose?:   ${color[i]}`);
            if ("red") {
                console.log("STOP!");
            } else {
                console.log("GO!")
            }
        }
