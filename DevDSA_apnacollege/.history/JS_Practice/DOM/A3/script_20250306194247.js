let heading = document.createElement('h2');
let inpt = document.createElement('input');

heading.textContent = 'You name appears here';
 
inpt.setAttribute('placeholder', "enter your name");

document.querySelector('body').append(heading);
document.querySelector('body').append(inpt);

inpt.addEventListener('input', function (){

    let filtervalue = inpt.value.replace(/[^a-zA-Z]/g, '');

    if (filtervalue !== inpt.value){
        inpt.value = filtervalue;
    }

    heading.textContent = filtervalue;

});



