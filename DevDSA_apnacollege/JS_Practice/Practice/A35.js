let start = 300;
let end = 100;

function randomNumGet (start,end){
    let range = start- end;
    let randomnum = Math.floor(Math.random()*range)+end;
    return randomnum;
}

console.log(randomNumGet(start,end));