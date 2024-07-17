const myNums=[1,2,3,4,5,6,7,8,9,10]
//  const newNums= myNums.map( (num)=>(num+10))
const newNums=myNums.filter( (num)=>(num<5) )
 console.log(newNums);


 /*
   map() will return a new array as per the conditions applied.
   forEach() will not return anything. forEach() returns undefined.
   filter() method will return an array of matching elements else will return an empty array if no matching happens.
 */