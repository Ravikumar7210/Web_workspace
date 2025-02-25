let num1 = 3243;
let num2 = 6578;

let numStr1 = num1.toString();
let strsplt1 = numStr1.slice(3, 4);
console.log(strsplt1);

let numStr2 = num2.toString();
let strsplt2 = numStr2.slice(3, 4);
console.log(strsplt2);

if (strsplt1 == strsplt2) {
    console.log("True");
}

else{
    console.log("False");
}