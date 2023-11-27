// Primitive : call by value

//7 types : String , Number, Boolean, null, undefined, Symbol,nan, bigInt

// JavaScript is a dynamically typed language, which 
// means that data types of variables are determined b
// y the value they hold at runtime and can change throughout 
// the program as we assign different values to them.

// Symbols

const id=Symbol('123')
const id1=Symbol('123')
console.log(id==id1)  //false

//big Int

const bigNumber=123456789
console.log(typeof bigNumber);
const bigNumber1=123456789n
console.log(typeof bigNumber1);

//Non-Primitive :Reference

//Aray,objects,Functions

const heroes =["shaktiman",'naagraj','doga']

let myObj={
    name:"Akash",
    age:22
}

const myFunction=function (){
    console.log("Hello World")
}

 console.log(typeof myFunction);


