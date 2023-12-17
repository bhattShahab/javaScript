//this --> current context

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); in node or other environment this is empty
//but for window it is not empty,it has window object in this


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //it has some stuffs with this
//.    but we cannot excess username with this
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//same as above function
// }

//in Es6 arrow function was introduced

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     console.log(this); //empty
//     return num1 + num2
// }

// addTwo()
// implicit return happens when there is no curly braces
// with curley braces we have to explicitly say return 

// const addTwo = (num1, num2) =>  num1 + num2


// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>a+b)