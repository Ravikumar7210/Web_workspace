let btn = document.createElement('button');
btn.innerText = "Click me";

document.querySelector('body').append(btn);


btn.addEventListener('click', function() {

btn.style.color = 'green';
});