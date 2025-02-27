const square1 = (n) =>n*n;

console.log(square1(5));

let id= setInterval(() => {
    console.log ("hello world")
},2000);

setTimeout (()=> {
    clearInterval(id);
    console.log("clear interval")
},10000);