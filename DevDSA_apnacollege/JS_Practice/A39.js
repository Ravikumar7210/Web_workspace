let arr = [23,334,45,434,33,34];

let ans = arr.every ((el) => el %10 ==0);

console.log(ans)


// find the min in array using reduce 

let nums = [10,20,30,40,5];

let min = nums.reduce((min ,el ) =>{
    if (min<el)
{
    return min;
}
else {
    return el;
}
});

console.log (min);























l