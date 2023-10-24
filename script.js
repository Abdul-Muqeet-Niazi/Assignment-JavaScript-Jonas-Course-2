'use strict';
// The work of strict mode is basiclly that, sometimes javascript keep silent in some errors and it gaves no output 
// and also not showing any error and by this mode it can't be silent in any purpose and there is a chance to remove bugs.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // BY USING STRICT MODE IT SIMPLY CONSOLE THAT YOU HAVE MISSING 'S' IN DRIVINGLICENSE 🤦‍♂️.
// if (hasDriversLicense) console.log (`I can Drive 😊`);

// Function 
// It is the statement in which block of multiple opertions(block of codes) done instead of writing again and again
// Simply write the function variable(means wrote on right side of function ex 'logger ↓') and that opertion will be done.

function logger() {
    console.log (`My name is Abdul Muqeet`);
}
// if i have to write or call or run or invoke these 3 times simply type:

logger();
logger();
// logger(); Does not write console.log many times
// And now you have understand that console.log is functon 😊.

// Basically the purpose of function is to return a value(add ingredients + cook food + result: Maggie):

function appleMangoJuice (apple , mango) {        // appleMangoJuice is variable where in brackets are parameters (for simply gave values)
    console.log(apple , mango);
    const juice = `This juice is made with ${apple} apples and ${mango} mangoes.`;
    return juice;
}

// And the function never returns the value either you console(call ex is below ↓) it. It only returns the value when you store in variable
appleMangoJuice(2,4); // This will only show parameters value like 2,4 bcz we have console it in function.

const shake = appleMangoJuice(2,2); // Now this is again showing parameters i again say that it was console it in the function.
console.log(shake);

// Not all the functions need to return values and need parameters

// ------------------------------------------------------------------------------------------------------------------- //
// There are 2 types of functions: Function Declaration and Function Expression

// Function Declaration:

function calcAge1(birthYear) {
    // const age = 2023 - birthYear;
    // return age;      OR
    return 2023 - birthYear;
}
const age = calcAge1(2006);
console.log(age);

// Function Expression:

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(2006);
console.log(age2);

// The difference b\w these functions is that, In Function Expression(if console is placed above the variable of calcAge2
// then it will not console or print it) while in the function declaration it can be done as opposite(means it can console or print either it is above or below).

// Arrow Function:
// This is a type of function that comes in ES6 and it is more easy but may be compilcated in some times, and it is one line of code 
 
const calcAge3 = birthYear => 2023 - birthYear ; // Functon Arrow;
const age3 = calcAge3 (2006);
console.log(age3);

// Now with Two or more lines of code function;
const age4 = birthYear => {
    const calcAge4 = 2023 - birthYear;
    const userRetirement = 65 - calcAge4;
    return(`You have ${userRetirement} Years left for Retirement`);
}
const age5 = age4(2006);
console.log(age5);

// Now with Parmeters;
const age6 = (birthYear, Name) => {
    const calcAge5 = 2023 - birthYear;
    const userRetirement2 = 65 - calcAge5;
    return(`${Name} have ${userRetirement2} Years left for Retirement`);
}
const age7 = age6(2006 , "Abdul Muqeet");
console.log(age7);

// In the End, I simply say that it is a litte bit hard so try to use the basic Function declaration as many developer use.

// Calling a Function into another Function:

function fruitPieces(fruit) {
    return fruit * 4; // One more thing about Return is that it immediately execute the function and doesn't go to another line of code so anything after return will be omitted.
    // console.log(`Example, To see what happen then uncommit it and go to console`)
}

function juiceProcessor(Banana, Mango) {
    const bananaPieces = fruitPieces(Banana);
    const mangoPieces = fruitPieces(Mango);
    return (`This shake is made with ${bananaPieces} pieces of Banana and ${mangoPieces} pieces of Mango.`)
}
console.log(juiceProcessor(2,2));

// Challenge No. 1:

const calcAvg = (a , b , c) =>  (a + b + c) / 3;
console.log(calcAvg(2,4,5));

const avgDolphins = 23 + 34 + 30 / 3 ;
const avgKoalas = 85 + 55 + 45 / 3 ;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else {
        console.log(`No one wins the match`);
    }
}

const winner = checkWinner(avgDolphins , avgKoalas);

// Arrays :
// Before starting we have to know about Mutable and Immutable : Mutability refers to data types that can be accessed and 
// changed after they've been created and stored in memory. Immutability, on the other hand, refers to data types that you
// can't change after creating them – but that you can still access in the memory.

// Primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the object.
// Where Primitive data types are not mutable. The ‘object’ is a non-primitive data type in JavaScript. Arrays and 
// Functions in JavaScript belong to the ‘object’ data type.

// This all definition belongs to Const.

