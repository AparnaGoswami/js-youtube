const user={
    name:"aparna",
    email:"a@gmail.com",

    welcomeMsg:function () {
        console.log(`${this.name},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMsg();
// user.name="aanu"
// user.welcomeMsg()

// console.log(this);

// function chai() {
//     let username= "aparna"
//     console.log(this);
//     console.log(this.username);
// }

// const chai=function () {
//     let username= "aparna"
    
//     console.log(this.username);
// }


// const chai= () => {
//     let username= "aparna"
//     console.log(this);
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }


//const addTwo = (num1,num2)=>  num1 + num2;        //implicit return

// const addTwo = (num1,num2)=> ( num1 + num2 );

const addTwo = (num1,num2)=>  ( {username:"Aparna"} )

//console.log(addTwo(3,4));