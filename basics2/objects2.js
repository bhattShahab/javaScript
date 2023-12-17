//object.keys(obj)
//object.values(obj)
//object.entries(obj)
//object.assign({},obj1,obj2)
//object.hasOwnProperty(key)
//object inside object


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"akash",
            lastname:'bhatt'
        }
    }
}
// console.log(regularUser["fullname"]["userfullname"]);

//optional chaining ??

const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:'c',
    4:'d'
}

const obj3={...obj1,...obj2}
// console.log(obj3);


//using assign

const obj4=Object.assign({},obj1,obj2)

//We pass {} as first argument so it will not affect ojb1  
//otherwise it would also concatenate with obj1

// console.log(obj1);

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// console.log(regularUser.hasOwnProperty('fullname'));