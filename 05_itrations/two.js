//for in
const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const key in myObj) {
    console.log(`${key} is the key for ${myObj[key]}`);
}


const arr=["js","java","py","cpp"]
for (const key in arr) {
   console.log(key);
}


const arr2=["js","java","py","cpp"]
arr2.forEach( function (item) {
    console.log(item);
} )

arr2.forEach( (item)=>{
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

arr2.forEach(printMe)

arr2.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
    {
        langName:"javascript",
        fileName:"js"
    },
    {
        langName:"java",
        fileName:"java"
    },
    {
        langName:"python",
        fileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.langName);
})