
let button = document.getElementsByClassName('btn')[0];
let title = document.getElementsByClassName('title')[0];
let input = document.getElementsByClassName('input')[0];
let container=document.getElementsByClassName('container');

button.addEventListener('click', (event) => {
    event.preventDefault();
    title.innerText = (input.value**2)*3.14;
    button.style.display = "none";
    container.a

});