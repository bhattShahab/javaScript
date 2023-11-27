const name="Akash"
// const repoCount=10

// console.log(name+repoCount +"value")  old way not recommended

// string interpulation ,more preferrable
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//declaration using new keyword

// let nameWithNew=new String("AkashBhatt")
// console.log(nameWithNew);
// let namewithoutNew="BhattShahab"
// console.log(namewithoutNew);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.__proto__);
// console.log(name.charAt(2))
// console.log(name.indexOf('h'))

// const newString=name.substr(0,4) //second argument is not included
// console.log(newString);

// const anotherString=name.slice(-3,-2)
// console.log(anotherString);

// const newStringOne="    Akash\n        "
// console.log(newStringOne);
// console.log(newStringOne.trim());//remove unnecessary white spaces 
//                                 //    and line terminators

// const url="https://akashbhatt.com/bhatt%20Shahab"

// console.log(url.replace('%20','-'));

// console.log(url.includes('abhay'));
const x="akash-bhatt-the-great"
let arr=x.split('-')//splitted based on - {limit(seperator,limit)}
console.log(arr);