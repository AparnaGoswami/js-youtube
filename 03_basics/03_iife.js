//Immediately Invoked Function Expressions IIFE
// ()();                semi colon is mendatory to stop it

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("Aparna");