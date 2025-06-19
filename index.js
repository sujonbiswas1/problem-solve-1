// // 1 . Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ;
console.log(carName) //output is Volvo



// // 2 . So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// // 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Deo" //write variable values 
let age = 35; // write variable name and values both 

console.log(firstName + ' ' + ' ' +lastName + ' ' + age); //output is John Deo 35




// //3 . Use the correct assignment operator that will 
// // result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x = x*y; // what will be the value of x ? 
console.log(x) //output is 50





// 4 . Use comments to describe the correct data type of the following variables:

let length = 16; // data type ? 
let lastName1 = "Johnson"; // data type ? 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object ? 

console.log( typeof x)


// 5 . Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}
myFunction()
// call the function and see the output = Hello World!



// 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").


const person = {
     name:'John',
     age:50,
}
alert(person.name +' is ' + person.age) //output is = john is 50





// 7. The <button> element should do something when someone clicks on it. Try to fix it!

function run(){
    const demo = document.getElementById('demo');
    demo.style.color = 'white'
    demo.style.backgroundColor = 'black'
    alert('ok')
}





//  8. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    Brand[0] = 'Ford'
    console.log(Brand)

// 9

// 1. Use the correct Math method to create a random number.

const randomNum = Math.random();
console.log(randomNum)

// // 2. Use the correct Math method to return the largest number of 10 and 20.

const largestNum = Math.max(10,20);
console.log(largestNum)

// // 3. Use the correct Math method to get the square root of 9.
const squareNum = Math.sqrt(9);
console.log(squareNum)




// 


// 10. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert(x>y) // true? 




// //  Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 19;
age<18 ? alert('Too young'):alert('Old enough') //output is = old enough





