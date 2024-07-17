//for

// for (let index = 0; index < 10; index++) {
//     const element = index;
// }


//while

// while (condition) {
    
// }


//do-while

// do {
    
// } while (condition);


//for of

// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

// const greets="hello world"
// for (const greet of greets) {
//     console.log(`char is ${greet}`);
// }


//maps
const map = new Map()
map.set('IN',"India") 
map.set('USA',"United States")
map.set('Fr',"France")

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myObj) {
    console.log(key,':-',value);
}