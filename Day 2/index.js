var a="Vaish";
var initial='D';
var age= 15;
var isTrainer = true ;
var college;
var tech =null;

console.log(a);
console.log(initial);
console.log(age);
console.log(isTrainer);
console.log(college);
console.log(tech);

console.log("My name is " + a + " " + initial + ". I am " + age + "years old.");
console.log("\n");


//Single Line Comment//

/* Multi Line Comment
hbjbddjh*/

//operators
var num1= 10, num2= 20;
console.log("Addition");
console.log(num1+num2);
console.log("Subtraction");
console.log(num1-num2);
console.log("Multiplication");
console.log(num1*num2);
console.log("Division");
console.log(num1/num2);
console.log("Modulus");
console.log(num1%num2);
console.log("Exponential");
console.log(num1**8);
console.log("\n");

//Relational Operators

console.log("Greater than");
console.log(num1>num2);
console.log("Less than");
console.log(num1<num2);
console.log("Greater than or equal to");
console.log(num1>=num2);
console.log("Less than or equal to");
console.log(num1<=num2);
console.log("Equal to");
console.log(num1==num2);
console.log("Not Equal to");
console.log(num1!=num2);
console.log("\n");

var num3= "10";
console.log("Equal to");
console.log(num1==num3);
console.log("Strict Equal to");
console.log(num1===num3);
console.log("\n");

//Logical Operators

 var Age = 28;
 var canDrive = true;
 console.log("Outcome for AND operator");
console.log(Age > 18 && canDrive == false);
console.log("Outcome for OR operator");
console.log(Age > 18 || canDrive == false);
console.log("Outcome for NOT operator");
console.log(!canDrive);
console.log("\n");

//Assignment Operators

var num1=10;

console.log("Addition");
console.log(num1+=10);
console.log("Subtraction"); 
console.log(num1-=10);
console.log("Multiplication");
console.log(num1*=10);
console.log("Division");
console.log(num1/=10);
console.log("Modulus");
console.log(num1%=10);
console.log("\n");

//Conditional Operators

var age= 20;
if(age<18){
    console.log("Not Eligible to vote");
} else{
    console.log("Eligible to vote");
}
console.log("\n");

var person = 18;
var isIndian;

if(person>=18 && isIndian==true){
    console.log("Eligible to vote");
} else if(person<18){
    console.log("Not Eligible to vote");
} else{
    console.log("Not an Indian Citizen");
}


var month = 2;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
        break;
}
console.log("\n");

