let arr = [9,6,5,7,2,1];

let max = 0;

for (let i=0; i<arr.length; i++){
    if (max<arr[i]){
        max = arr[i];
    }
}

console.log(`Maximum number in the array is ${max}`);