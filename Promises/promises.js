// Q ,bluebird : older metho

//Creating Promise 

const promise1=new Promise(function(resolve,reject){
    // Do async task
    // DB calls,cryptography,netword
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

//Consuming Promise

//then is connected with resolve  ,we have a callback in then
promise1.then()

