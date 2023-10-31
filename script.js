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
    console.log(`My name is Abdul Muqeet`);
}
// if i have to write or call or run or invoke these 3 times simply type:

logger();
logger();
// logger(); Does not write console.log many times
// And now you have understand that console.log is functon 😊.

// Basically the purpose of function is to return a value(add ingredients + cook food + result: Maggie):

function appleMangoJuice(apple, mango) {        // appleMangoJuice is variable where in brackets are parameters (for simply gave values)
    console.log(apple, mango);
    const juice = `This juice is made with ${apple} apples and ${mango} mangoes.`;
    return juice;
}

// And the function never returns the value either you console(call ex is below ↓) it. It only returns the value when you store in variable
appleMangoJuice(2, 4); // This will only show parameters value like 2,4 bcz we have console it in function.

const shake = appleMangoJuice(2, 2); // Now this is again showing parameters i again say that it was console it in the function.
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

const calcAge3 = birthYear => 2023 - birthYear; // Functon Arrow;
const age3 = calcAge3(2006);
console.log(age3);

// Now with Two or more lines of code function;
const age4 = birthYear => {
    const calcAge4 = 2023 - birthYear;
    const userRetirement = 65 - calcAge4;
    return (`You have ${userRetirement} Years left for Retirement`);
}
const age5 = age4(2006);
console.log(age5);

// Now with Parmeters;
const age6 = (birthYear, Name) => {
    const calcAge5 = 2023 - birthYear;
    const userRetirement2 = 65 - calcAge5;
    return (`${Name} have ${userRetirement2} Years left for Retirement`);
}
const age7 = age6(2006, "Abdul Muqeet");
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
console.log(juiceProcessor(2, 2));

// Challenge No. 1:

const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(2, 4, 5));

const avgDolphins = 23 + 34 + 30 / 3;
const avgKoalas = 85 + 55 + 45 / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else {
        console.log(`No one wins the match`);
    }
}

const winner = checkWinner(avgDolphins, avgKoalas);

// Arrays :
// Before starting we have to know about Mutable and Immutable : Mutability refers to data types that can be accessed and 
// changed after they've been created and stored in memory. Immutability, on the other hand, refers to data types that you
// can't change after creating them – but that you can still access in the memory.

// Primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the object.
// Where Primitive data types are not mutable. The ‘object’ is a non-primitive data type in JavaScript. Arrays and 
// Functions in JavaScript belong to the ‘object’ data type.

// This all definition belongs to Const.
// We use array to store more values rather than making as variable for every one just like that ↙
const friend1 = 'Khalid bin Waleed';
const friend2 = 'Salah Uddin Ayubi';

// Now for this purpose we use Array :
const friends = ['Khalid bin Waleed', 'Salah Uddin Ayubi', 'Momin']; // Index starts from 0 & length starts from 1.
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]); // OR  console.log(friends(friends.length - 1));

friends[0] = 'Aqib'; // Now you might thinking that const cant be changed but how thats possible, My friend it can be 
//changed as primitive bcz values is string, but you cant change the whole array just like next example on next line ↓;
// friends = ["anyone", "somebody"];  For check this example uncomment it!

console.log(friends);

// You can also write array in another array, and do operation(only expression operation not statement operation like if/else etc):
const arr = ['someone', 'no-one', 200 - 131, Array = [5646, 5979], 'kick-start'];
console.log(arr);

// Using a variable into an array:
const firstName = "Abdul Muqeet";
const array = [firstName, "Creative", "Hard-Worker", "Need-Worker"];
console.log(array.length); // Defines length
console.log(array[array.length - 1]); // define "Need-Worker"
console.log(array);

// Basic Array Operation Method :

// Adding :
// Push: It adds the element in the end !
const friendz = ['Michael', 'John', 'Smith'];
friendz.push('Fernandez');
console.log(friendz);

// Unshift: It adds the elements from the start !
friendz.unshift('Jacqueline');
console.log(friendz);

// Removing:
// Pop: Removing end of the element !
friendz.pop(); //  Remove Fernandez.
const popped = friendz.pop(); //  Remove Smith.
console.log(popped); // Showing the remove of last element stored in popped.
console.log(friendz);

// Shift : Removing start of the element !
friendz.shift();
console.log(friendz); // Remove Jacqueline.

// indexof : showing index of an element !
const index = friendz.indexOf('John'); // Returns value 1 bcz it is placed on index of 1
const index2 = friendz.indexOf('Smith'); // Returns as value -1 which means false as indeed we have no index of Smith as it removes by pop.
console.log(index);
console.log(index2);

// includes : Showing boolean values(True and False) as it available or not : (Release in ES6)
const index3 = friendz.includes("John"); // return true, bcz it is available in array.
const index4 = friendz.includes("Fernandez"); // return False, bcz it is not available in array.
console.log(index3);
console.log(index4);
const num = [23];
const index5 = num.includes("23"); // return False, bcz it uses strict equality and does not do type coercion where 23 is string 😉.
console.log(index5);

// Coding Challenge No. 2

function calcTip(billvalue) {
    if (billvalue >= 50 && billvalue <= 300) {
        return billvalue * 0.15;
    } else {
        return billvalue * 0.2;
    }
}

const billvalue = [125, 555, 44,];
const tip = [calcTip(billvalue[0]), calcTip(billvalue[1]), calcTip(billvalue[2])];
const total_Bill_Value_With_Tip = [billvalue[0] + tip[0], billvalue[1] + tip[1], billvalue[2] + tip[2]];
console.log(billvalue, tip);
console.log(total_Bill_Value_With_Tip);

// Objects :
// Now, the big difference between objects and arrays, is that in objects, the order of these values, does not matter at all when we want to retrieve them.
// So in arrays, the order in which we specify the elements matters a lot because that's how we access these elements, right?
// So we can only access array elements using their order number. (which is index as [0,1,2,3 etc])

// Left hand side define as (Key) and right hand side define as (value):

const obj = {                     // Object Sign is: Starts from Curly Brackets
    Name: "Abdul Muqeet",
    Course: "Programming",
    Duration: "9 Months",
    Age: 2023 - 2006,              // Also can do mathematical operation in value. Where (Age) is key.
    Desire: ["Become as Khalid Bin Waleed"] // You can also write array data into it. Sign of Array is Square Bracket [] .
}  // The whole bracket is called properties.

console.log(obj);

// Object Dot vs Bracket Notations :

const valuez = obj.Name; // Dot value retrieve the data from obj in console.
console.log(valuez);

const anotherValue = obj['Name']; // Bracket value also retrieve the data from obj but in string otherwise gave error.
console.log(anotherValue);
// OR
const anotherTrick = 'ation';
console.log(obj['Dur' + anotherTrick]); // JavaScript is so smart it also retrieve data in order with concating a word then send the data.
// This trick is failed in dot expression.

// Then What we choose to retrieve data ?

const questionAboutMe = prompt(`What do you know about Abdul-Muqeet, Choose your answer in Name, Course, Duration, Age, Desire`);
// console.log(questionAboutMe); // Now it only prints the key not value.
// console.log(obj.questionAboutMe); // Now here it gives you undefined bcz of it search for the property in (obj) as there is no property as name of questionAboutMe.
// so now here we use bracket notation instead of dot notation.
console.log(obj[questionAboutMe]);

if (obj[questionAboutMe]) {
    console.log(obj[questionAboutMe]);
} else {
    console.log(`Wrong request! , Choose your answer in Name, Course, Duration, Age, Desire`);
}

// You can also insert or produce value in the obj as separate;
obj.location = 'Karachi, Sindh, Pakistan';
obj['Facebook'] = 'Abdul-Muqeet';
console.log(obj);

// Challenge Live on Video;
const friendzz = {
    Name: 'Jonas',
    BirthYear: '2006',
    Friends: ['Michael', 'Simron', 'Elizabeth'],
    NoOfFriends: 3,
}
console.log(friendzz);
console.log(friendzz.Friends[0]);

// (this) Property : "it is the property, which is equal to the Object calling Method means 'This' is calling by Method(Function) to access the information(BirthYear) in present Object".
const Friendz = {
    Name: 'Jonas',
    BirthYear: 2006,
    Friends: ['Michael', 'Simron', 'Elizabeth'],
    NoOfFriends: 3,

    // Any functoin that is attached to a function is called "METHOD".
    // Calculator: function (BirthYear) {   
    //     return 2023 - BirthYear;        
    // }

    Calculator: function () {       // Using This property we will get rid from writing multiple times as BirthYear.
        return 2023 - this.BirthYear;
    }
}
// console.log(Friendz.Calculator(2006)); // Instead of writing multiple times in console as birth year we simply use "This" property.
console.log(Friendz.Calculator()); // By using THIS we will get rid of writing birth year.

// Now here we call the age multiple times, which violate the rules of DRY(Dont Repeat Yourself).Just like this ↙
console.log(Friendz.Calculator());
console.log(Friendz.Calculator());
console.log(Friendz.Calculator());
// It works the same but you know Violate the rules. Now here we use another trick;

const Friend = {
    Name: 'Jonas',
    BirthYear: 2006,
    Friends: ['Michael', 'Simron', 'Elizabeth'],
    NoOfFriends: 3,

    Calculator: function () {       // Using This property we will get rid from writing multiple times as BirthYear.
        this.anotherAge = 2023 - this.BirthYear;
        return this.anotherAge;
    }
}

Friend.Calculator(); // Without this ← You cannot log the value of written below so it is must to print it; 
console.log(Friend.anotherAge);

// Challenge On a Live Video;

const Test = {
    Name: "Mickel",
    BirthYear: 1998,
    HasDriverLicense: false,

    Condition: function () {
        return `${this.Name} is ${2023 - this.BirthYear} years old teacher, and he has ${this.HasDriverLicense ? 'a' : 'no'} Driver License`
    }
}
console.log(Test.Condition());

// Challenge No. 3:

const Mark = {
    Name: "Mark Miller",
    Mass: 78,
    Height: 1.69,

    calcBMI: function () {
        const BMI = this.Mass / this.Height ** 2;
        return BMI;
    }
}

const John = {
    Name: "John Smith",
    Mass: 92,
    Height: 1.95,

    calcBMI: function () {
        const BMI = this.Mass / (this.Height * this.Height);
        return BMI;
    }
}

if (John.calcBMI() > Mark.calcBMI()) {
    console.log(`${John.Name} BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})!`);
}
else {
    console.log(`${Mark.Name} BMI (${Mark.calcBMI()}) is higher than Mark's (${John.calcBMI()})!`);
}

// FOR LOOP:


const loopArray = ["Abdul-Muqeet", 17, 2006, "Karachi"];
const emptyArray = [];

console.log("------------------ Array Loop ------------------");

for (let i = 0; i < array.length; i++) {
    // Reading The Array:
    console.log(loopArray[i]);

    // Filling The Array:
    // emptyArray[i] = typeof loopArray[i]; // OR
    emptyArray.push(typeof loopArray[i]);   // This is a perfect statement for filling the loop
}
console.log(emptyArray);

// Exercise:
const Year = [1990, 2005, 2007, 2010];
const ageCalculator = [];

for (let index = 0; index < array.length; index++) {
    ageCalculator.push(2023 - Year[index]);
}
console.log(ageCalculator);

// Continue And Break in the FOR LOOP:

for (let index = 0; index < array.length; index++) { 
    if (typeof loopArray[index] !== 'string') continue;     //  Continue doesn't terminate the next iterations; it resumes with the successive iterations.
        console.log(loopArray[index], typeof loopArray[index]);
}

for (let index = 0; index < array.length; index++) {
    if (typeof Year[index] === 'string') break;       // Break statement stops the entire process of the loop when it recieve the true property. 
    console.log(Year[index], typeof Year[index]);        
}
     
// Backward FOR LOOP:

console.log("--------------- Backward Loop ---------------");

for (let index = loopArray.length - 1; index >= 0; index--) {
    console.log(index, loopArray[index]);
}

// For Loop Inside Another For Loop:

console.log("--------------- Loop Inside Another Loop ---------------");

for (let i = 0; i < 5; i++) {
    console.log(`Lifting Weight Repetition ${i}`);
    
    for (let i = 0; i < 4; i++) {
        console.log(`Another Lifting Weight Repetition ${i}`); 
    }
}

// While Loop: 
// Where While loop only required Condition.
// It's suitable when you want to repeat an action based on a condition and you're not sure how many times it needs to be repeated in advance.

console.log("--------------- While Loop ---------------");

let i = 1; 
while (i <= 6) {
    console.log(`Yeah you have found the number!`);
    i++;
}

// ====================================================================================================== //

let loopWhile = Math.trunc(Math.random() * 6) + 1;
// What is going on the above Statement ?

// Math.random() generates a random decimal (like 0.539471085089558) between 0 and 1.
// Multiplying by 6 (Math.random() * 6) changes the range to a random decimal number between 0 and 6 (for example, 3.254782320537848).
// Math.trunc() removes the decimal part, leaving you with a whole number (e.g., 3).
// Adding 1 to this result (Math.trunc(Math.random() * 6) + 1) shifts the range to be between 1 and 6 (for example, 3 becomes 4, 0 becomes 1, and 5 becomes 6). 

while (loopWhile !== 6) {
    console.log(`You have roll the dice of ${loopWhile}`);
    loopWhile = Math.trunc(Math.random() * 6) + 1;
    if (loopWhile === 6 ) {
        console.log(`Yeh! you reached again at 6, Now loop will END!`);
    }
}

// Differnce between While and For loop ?
// => While loops are more flexible, ideal when the number of iterations is unknown and based on a condition.
// => For loops are useful when the number of iterations is definite and you know the start, end, and increment logic beforehand.

// Challenge NO. 04:

const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15;
    } else {
        return bills * 0.2;
    }
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]); 
}
console.log(bills);
console.log(tips);
console.log(totals);

// ================================================================================================= //

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

// =========================================== JavaScript Fundamental Part 2 Complete ====================================================== //