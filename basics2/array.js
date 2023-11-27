// const myArr=[1,2,3,4,5,2,3,2]

//js arrays are resizable
//elements can be of different datatype
//zero based indexing
//array-copy operations is shallow copy(sharing same reference )

// const myHeroes=["shaktiman","naagraj"]
// const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2);

//Array also has prototype access

//Methods

// myArr.push(1)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

              //unshift

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(myArr.unshift(1,2,3));//add 1 in starting and shift it by 1 towards right
// console.log(myArr);

              //shift

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// console.log(myArr.shift());
// console.log(myArr);

//Note shift and unshift changes the this value and hence affects the original value

                //includes
// return true or false for a value exist or not 
// console.log(myArr2.includes(4));
                //indexOf ->returns index of first occurenct
// console.log(myArr.indexOf(4));

                //lastIndexOf ->returns last index of first occurenct
// console.log(myArr.lastIndexOf(2));

                //join
// Adds all the elements of an array into a string, separated
//  by the specified separator string.

// const newArr=myArr.join(' ');
// console.log(newArr);
// console.log(typeof newArr); //string

// *********** slice vs splice *************************

//slice contains [firstIndex,lastIndex)
// const myn1=myArr.slice(2,3)
// console.log(`myn1 : ${myn1}`);
// console.log(`myArr After slicing : ${myArr}`);

// //splice contains firstIndex,deleteCount
// const myn2=myArr.splice(2,3)
// console.log(`myn2 : ${myn2}`);
// console.log(`myArr After splicing : ${myArr}`);

//slice doesnot affect the original one but splice cuts some portion
//from the original array
