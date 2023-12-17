function printer(name){
   console.log(`Hello ${name}`);
}
// printer() if not passed anything then undefined

function printer2(name="akash"){
   console.log(`Hello ${name}`);
}

// printer2(); //if not passed anything then akash would be printed

printer //not here we are not calling the funciton just passing its reference

// console.log(printer); //reference of function

console.log(printer()) //since printer is not returning anthing so this console log would print undefined



