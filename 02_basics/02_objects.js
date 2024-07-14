
const mysym= Symbol("key1")
const myObj={
    name:"aparna",
    "city":"bhopal",
    [mysym]:"key1",
    email:"aparna@gmail.com"
}

// console.log(myObj.name);
// console.log(myObj["city"]);
// console.log(myObj[mysym]);
// console.log(myObj.email);
// Object.freeze(myObj)
// myObj.email="aparna@change.com"
// console.log(myObj);


myObj.greeting=function () {
    console.log("hello js user");
}
myObj.greetingTwo=function () {
    console.log(`hello js user, ${this.name}`);
}
// console.log(myObj.greeting());
// console.log(myObj.greetingTwo());




// ##Objects part-2

//const tinderUser = new Object()    =>singleton object
const tinderUser={}                 //=>non singleton object


tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aparna",
            lastname:"goswami"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}       =>wrong
const obj3=Object.assign(obj1,obj2)       //obj1 m assign hori h values
const obj4=Object.assign({},obj1,obj2)    //empty object m assign hongi , obj1 m koi change nhi aaega
//console.log(obj3);
const obj5={...obj1, ...obj2}
//console.log(obj5);


const user=[
    {
        name:"aparna",
        email:"a@gmail.com"
    },
    {
        name:"aparna",
        email:"a@gmail.com"
    },
    {
        name:"aparna",
        email:"a@gmail.com"
    },
    {
        name:"aparna",
        email:"a@gmail.com"
    },
] 

// console.log(user[1].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"js tutorial",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
const {courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);


