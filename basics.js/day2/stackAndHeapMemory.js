//stack --->>used for all primitive data types

//Heap ---->used for Non-Primitive data types

let myName="AkashBhatt"

let anotherBhatt=myName

anotherName="Enrique"

console.log(anotherName); //Enriuqe 
console.log(myName);     //AkashBhatt  ->>>>>>value didnt chang here

let user1={
    name:"Akash",
    surname:"Bhatt"
}

let user2=user1

user2.name="Abhay"

console.log(user2.name) //Abhay 
console.log(user1.name) //Abhay //value get changed in the original
//one as weel because passed by reference


