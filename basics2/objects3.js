//deStructuring of object

const course ={
    coursename:'js in hindi',
    price :'999',
    courseInstructor: 'hitesh'
}

// const {courseInstructor}=course
// console.log(courseInstructor);

const {courseInstructor:Instructor}=course
console.log(Instructor);


// helpful in react

// const navbar=({company})=>{

// }

//helpful in api

//json is ojbect 

// {
//     name:"akash",
//     "coursename":'js in hindi',
//     "price":'free'
// }

// randomuser.me
// json formatter

