const promise1= new Promise(function(resolve,reject){
    //do an async task
    setTimeout(() => {
        console.log('async task is completed');
        resolve()
    }, 1000);
})
promise1.then(function () {
    console.log("promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})

const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})
promise3.then(function (user) {
    console.log(user);
})

const promise4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error= false;
        if(!error){
            resolve({username:"aparna",pass:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>console.log(username))
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

const promise5=new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username:"javascript",pass:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromise5()


async function getAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
}
getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

promise.all