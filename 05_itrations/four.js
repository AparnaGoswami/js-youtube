//const myNums=[1,2,3,4,5,6,7,8,9,10]
//  const newNums= myNums.map( (num)=>(num+10))
// const newNums=myNums.filter( (num)=>(num<5) )
//  console.log(newNums);


 /*
   map() will return a new array as per the conditions applied.
   forEach() will not return anything. forEach() returns undefined.
   filter() method will return an array of matching elements else will return an empty array if no matching happens.
 */


// let newSeries= myNums
//                     .map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>=50)

// console.log(newSeries);


//reduce()

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const myTot = myNums.reduce(function(accumulator,currentValue){
//   console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//   return accumulator + currentValue
// },0)

const myTot=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTot);


const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);