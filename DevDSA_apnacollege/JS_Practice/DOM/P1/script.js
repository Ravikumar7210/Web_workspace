let para = document.createElement('p');
para.innerText = 'Hello I am Red';
document.querySelector('body').prepend(para);
// para.style.color = 'red';
para.classList.add("red");




let heading = document.createElement('h3');
heading.innerText = "Hello i am blue H3";
document.querySelector('body').prepend(heading);
// heading.style.color = 'blue';
heading.classList.add('blue');


let div1 = document.createElement('div');
let h1 = document.createElement('h1');
let para1 = document.createElement('p');

h1.innerText ="I am in a div";
para1.innerText = "ME TOO!";

div1.append(h1);
div1.append(para1);
div1.classList.add('box')

document.querySelector('body').prepend(div1);