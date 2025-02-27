
const arrayAverage = (arr) =>{

    let sum =0;
    for (let number of arr){
        sum+=number;
    }
    return sum/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));