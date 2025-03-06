let btn = document.createElement('button');
btn.innerText = "Click me";

document.querySelector('body').append(btn);


btn.addEventListener(onclick, function() {

btn.style.color = 'green';
});