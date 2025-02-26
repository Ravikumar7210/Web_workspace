function car(){
    console.log("This is a Car");
}

function dice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

function avg (a,b,c){
    let sum = a + b + c;
    return sum/3;
}

console.log(avg(4,6,8));
car();
dice();