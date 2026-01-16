const person = {
    name: "Aileen Shelly",
    age: 34,
    isStudent: true,
    favProgLanguange: "Javascript"
}

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.favProgLanguange);

person.name = "Bob Marley";
console.log(person.name); //Bob Marley

console.log(human) //ReferenceError: Cannot access 'human' before initialization
let human = "Angela";
console.log(human); //Angela

console.log(animal); //undefined
var animal = "Dog";
console.log(animal) //Dog

console.log(array)//ReferenceError: Cannot access 'array' before initialization
let array = [12, true, "May", 198];
console.log(array) //[ 12, true, 'May', 198 ] 
array = "apple";
console.log(array) //apple


let obj = {
    auth: "no",
    rate: 12,
}

obj.value = "setters";
console.log(obj)

