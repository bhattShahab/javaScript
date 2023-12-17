var x=10
{
    var x=100
    console.log(`inside blog printing x : ${x}`);
}

// console.log(x);

console.log(`outside blog printing x : ${x}`);

//here the x is redeclared so value would change
//var has functional scope

// let x=10;
// {
//     let x=100
//     console.log(`inside blog printing x : ${x}`);
// }
// console.log(`outside blog printing x : ${x}`);
// let has block scope only so it x inside block would not affect 
// the global x

