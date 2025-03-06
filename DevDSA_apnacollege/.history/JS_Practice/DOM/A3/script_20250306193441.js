let heading = document.createElement('h2');
let inpt = document.createElement('input');

heading.textContent = 'You name appears here';
 
inpt.setAttribute('placeholder', "enter your name");

document.querySelector('body').append(heading);
document.querySelector('body').append(inpt);

inpt.addEventListener('input', function (){

});



