 const myArray=[1,2,3,4,5,6]
//  console.log(myArray.length);
 myArray.unshift(0)
//  console.log(myArray);
 myArray.shift()
//  console.log(myArray);
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(4));


const newArr=myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


const myn1=myArray.slice(1,4)
console.log(myn1);
console.log(myArray);



const myn2=myArray.splice(1,4)
console.log(myn2);
console.log(myArray);