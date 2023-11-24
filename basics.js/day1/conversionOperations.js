let val=33
console.log(typeof val)
let newVal="33" //this is 33 in string and this data is coming to us from different side
console.log(typeof newVal)
//But we want to work with number only
let newNumVal=Number(newVal)

let x="33abc"
let numX=Number(x)
console.log(typeof numX) // number
console.log(numX)        //NaN ->not a number

// "33"=> number
// "33abc" =>NaN
// true=>1 ,false=>0

let isLoggedIn=1;
let boolIsLoggedIn=Boolean(1);
console.log(boolIsLoggedIn)

// 1 ->>>>>>true 
// 0 ->>>>>>false
// "" ->>>>>false
// "akash" ->>>>>true


let num=33
let stringNum=String(33)

console.log(stringNum)        
console.log(typeof stringNum) //string



