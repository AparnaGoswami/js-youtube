
const mysym= Symbol("key1")
const myObj={
    name:"aparna",
    "city":"bhopal",
    [mysym]:"key1",
    email:"aparna@gmail.com"
}

console.log(myObj.name);
console.log(myObj["city"]);
console.log(myObj[mysym]);
console.log(myObj.email);
Object.freeze(myObj)
myObj.email="aparna@change.com"
console.log(myObj);