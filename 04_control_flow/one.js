// if condition
// if(true){

// }

//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// let month=3

// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("better luck next time");
//         break;
// }



//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0",'false', " ", [], {}, function(){}


// const emptyObj={}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }




//Nullish Coalescing Operator (??): null undefined

let val1;
val1= 5 ?? 10
val1= null ?? 10
val1= undefined ?? 10
val1= 5 ?? 10 ?? 15 

//console.log(val1);



//Ternary Operator
//condition ? true : false

let price=100

price>=80 ? console.log("yes"):console.log("no");