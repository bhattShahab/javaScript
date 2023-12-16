var accountPassword="751289102345" //THERE WAS A BLOCK SCOPE AND FUNCTIONAL SCOPE, PROBLEM SO BETTER TO USE LET ONLY FOR VARIABLES
accountCity="Delhi" // THIS IS NEVER ADVISED TO DO

const accountId="2234234234"
let accountEmail="akash@gmail.com"

let akash //undefined if not initialized

console.table([accountId,accountEmail,accountPassword,accountCity,akash])

// Why not var 

// var was there from very beginning

// ecma 2017  -->let works for all faults present with var

//let cannot be redeclared

var a=10
var a=13

let b=10
// let b=13//error

//let ---->block scope , var ----->functional scope.  //memory consumption more with var


// --->could not make the changes with var because a lot of websites had already been designed using var keyword that could had trouble with those sites



