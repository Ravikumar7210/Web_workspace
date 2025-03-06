let heading = document.createElement('h2');
let inpt = document.createElement('input');

heading.innerText = 'Please Enter your name';
 
inpt.setAttribute('placeholder', "enter your name");

document.querySelector('body').append(heading);
document.querySelector('body').append(inpt);


