//Ans1

let button = document.createElement('button');
let inpt = document.createElement('input');
button.innerText = "Click me";

document.querySelector('body').append(button);
document.querySelector('body').append(inpt);


// Ans2 

button.setAttribute("id", 'btn');
inpt.setAttribute("placeholder", 'username');

//Ans 3 

let btn = document.querySelector('#btn');
btn.classList.add('btn1');

//Ans 4

let heading = document.createElement('h1');
heading.innerText = 'DOM Practice'
document.querySelector('body').append(heading);

heading.classList.add("heading1")

//Ans 5 

let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector('body').append(para);



