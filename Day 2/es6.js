//var, let & const

var age = 19;
console.log(age);
var age = 20;        // var variables can be redeclared and reassigned
console.log(age);

let Age;
console.log(Age); //let variables can be declared once and reassigned
Age =19;
console.log(Age);
Age = 88 ;
console.log(Age);

const personAge = 19;
console.log(personAge);

//const variables cannot be redecalred and reassigned

let car={
    brand: "BMW",
    model: "X5",
    manufacture :"India",
    year: 2020,
    amount: 5000000
};
console.log(car);
carBrand= car.brand;
console.log(carBrand);
carModel= car.model;
console.log(carModel);
console.log("\n");

let even= [ 2, 4, 6, 8, 10]; //Array
console.log(even);
console.log(even[2]);
console.log("\n");

//Array methods: push,pop

even.push(12);
console.log(even);

even.pop();
console.log(even);
console.log("\n");

//Functions in JS are also called as Methods

function sum(a,b){
    return a+b;
}

console.log("The sum of the values are:");
console.log(sum(20,30));
console.log(sum(52,80));
console.log(sum(200,966));
console.log("\n");


const add = (a,b)=> a+b;
console.log("THe sum of values using FAt Arrow Functio (=>):");
console.log(add(15,25));
console.log(add(166,865));
console.log(add(69,87));
console.log("\n");

const cube= (a) => a*a*a;
console.log("The cube of the value is:");
console.log(cube(3));
console.log(cube(8));
console.log(cube(250));
console.log("\n");

const greet = (person) => ("Hello" +person);
console.log(greet("Vaish"));
console.log("\n");
console.log(greet("Nikki"));
console.log("\n");


// Map method
const numbers= [1,2,3,4,5,6,7,8,9];
const squared =numbers.map(num=>num*num);
console.log(squared);
console.log("\n");

//Filter Method

const num= [3,6,9,12,15,18,21,24];
const multiplesof2= num.filter(num=>num%2==0);
console.log("Multiples of 2 are:" +multiplesof2);
console.log("\n");


//Reduce Method

const digits =[1,3,4,7,9];
const sumofdigits=digits.reduce((temp,present)=> temp+present,0);
console.log("Sum of the numbers are:" +sumofdigits);