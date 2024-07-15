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

// addTwo(3,4)
// console.log(subTwo(4,3))

function login(username = "xyz"){
    return `${username} just logged in`
}

// console.log(login("aparna"));
// console.log(login(""));



function cartPrice(...num1){
    return num1;
}
//console.log(cartPrice(200,300,400));

function cartPrice1(val1,val2,...num1) {
    return num1;
}
//console.log(cartPrice1(100,200,300,400,500));

const user={
    name:"aparna",
    price:599
}
function handleObj(obj) {
    console.log(`Username is ${obj.name} and price is ${obj.price}`);
}
//handleObj(user)

const arr=[200,400,600];
function return2val(getArr) {
    return getArr[1];
}
console.log(return2val(arr));
