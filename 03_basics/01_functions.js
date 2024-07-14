function sayMyName() {
    console.log("aparna");
}

//sayMyName()

function addTwo(num1,num2) {
    console.log(num1 + num2);
}

function subTwo(num1,num2) {
    return num1-num2
}

addTwo(3,4)
console.log(subTwo(4,3))

function login(username = "xyz"){
    return `${username} just logged in`
}

console.log(login("aparna"));
console.log(login(""));