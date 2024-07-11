const myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getHours());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

let newDate= new Date(2004,4,6)
// console.log(newDate.toDateString());

let ts=Date.now()
console.log(ts);
console.log(Math.floor(Date.now()/1000));
console.log(myDate.toLocaleString('default',{
    weekday:"short"
}))
