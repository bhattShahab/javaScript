//literal or construtor

//singleton--->constructor
// Object.create();

//object literal

const jsUser={
    name:"AkashBhatt", 
    age:21,
    location:"Delhi",
    isLoggedIn:false,
    "surname":"Bhatt"
}

//access elements of objects
// console.log(jsUser.name);
// console.log(jsUser["surname"]);//this is useful if the entity name is given string itself e.g. surname

// const mySym=Symbol("key1")
// for using symbol in this we have to use it as[mySym]

// Object.freeze(jsUser) after this changes do not reflext not giving any error though


// jsUser.greeting=function(){
    // console.log(`Hello ${this.name} ji ki haal chaal`);//use of this
// }
// console.log(jsUser.greeting())