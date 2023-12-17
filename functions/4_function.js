// Immediately Invoked Function Expressions (IIFE)

//global scope ke pollution ko rokne ke liye

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//semicolon ka dhyan rkhna agar 2 iffe function likh rhe hai to


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// console.log('kya haal chal');