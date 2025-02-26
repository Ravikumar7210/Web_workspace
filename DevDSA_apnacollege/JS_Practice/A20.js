let num = 234324;

let sum =0;

while(num>0){
    sum = sum + num%10;
    num = Math.floor(num/10);
}

console.log(sum);