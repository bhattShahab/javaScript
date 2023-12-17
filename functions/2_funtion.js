function calculateCartPrice(...num1){
    return num1
} 

// console.log(calculateCartPrice(1,2,3));//return a list made by rest operator

// output : [1,2,3]

// here ... is rest operator

function calculateCartPrice1(val1,val2,...val3){
    return val3
}

console.log(calculateCartPrice1(1,2,3,4,5));

// output: [3,4,5]


// We can also pass objects and array to as an argument to the function 
