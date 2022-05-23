console.log('hello world');
let name = 'Jmeno';
console.log(name);
let firstName = 'Jmeno';
let lastName = 'Prijmeni';

const interestRate = 0.3;
console.log(interestRate);

let age=17;
let isApproved = true;

firstName = undefined;
lastName = null;

let person = {
    name: 'Michal',
    age: 17

}
console.log(person);
person.name = 'Honza';
console.log(person.name);
person['name'] = 'Kuba';
console.log(person.name);
let sellection = 'name';
person[sellection] = 'Radim';
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors[2]);
console.log(selectedColors.length);


function greet(name, lastName) {
    console.log('Hello '+name+' '+lastName);
}
greet('John', 'Terry');


function square(number) {
    return number * number;
}
console.log(square(2));





