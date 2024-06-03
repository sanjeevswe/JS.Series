// premitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

const bigNumber = 2653655975551578458n
//console.log(bigNumber);


//Reference type (Non-Premitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraaj" ,"Krrish"]

let myObj = {
    name: "Sanjeev",
    age: 24,
}

const myFunction = function(){
    //console.log("Hello Programmers");
}


console.log(typeof bigNumber);      //bigint
console.log(typeof outsideTemp);    //object
console.log(typeof scoreValue);     //number
console.log(typeof myObj);          //object
console.log(typeof myFunction);     //function(object function)
console.log(typeof heros);          //object
console.log(typeof anotherId);      //symbol