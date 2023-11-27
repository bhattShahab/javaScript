// const marvel_heroes=["ironman","thor","spiderman"]
// const dc_heroes=["superman","batman","flash"]

// marvel_heroes.push(dc_heroes) //array inside array ,not a good technique
// console.log(marvel_heroes);  

// const all_heroes=marvel_heroes.concat(dc_heroes); //splits the array first
// console.log(all_heroes);

// const all_heroes=[...marvel_heroes,...dc_heroes]; //spread operator
// console.log(all_heroes);

// const anotherArray=[1,2,3,[4,5,6,7],[6,7,[4,5]]];

// //flats each and every array inside the array and flatten that
// const usableAnotherArray=anotherArray.flat(Infinity);
// console.log(usableAnotherArray);

// console.log(Array.isArray("Akash")); //check if passed argument
                                        //is an array or not
                   
                       //from
// Creates an array from an array-like object.

// console.log(Array.from("Akash"));

// console.log(Array.from({name:"AkashBhatt"})) // Interesting
//We need to mention about key or value with which we would create out array

                       //of

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));


