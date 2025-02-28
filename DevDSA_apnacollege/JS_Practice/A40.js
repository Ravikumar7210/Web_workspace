// let arr = [33,34,345,33,32,2,4];

// const sum = (arr) => {
// let sum= 0;
// for (let i=0; i<arr.length; i++){
//     sum+=i;
    
// }
// return sum;
// };

// console.log(sum);

// using map and reduce method

let arr = [33,34,345,33,32,2,4];

let square = arr.map((num) => num*num);
console.log(square);

let sum = square.reduce((sum,el)=> sum+el,0);
console.log(sum);

let avg = sum/arr.length;
console.log(avg);