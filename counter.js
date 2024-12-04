let value = document.getElementsByClassName('value');
let minus = document.getElementsByClassName('minus');
let plus = document.getElementsByClassName('plus');
let b = 0;

function score(a) {
    if (a == 0) {
        b -= 1;
    } else {
        b += 1;
    }
    return b;
}

minus[0].addEventListener('click', (event) => {
    event.preventDefault();
    value[0].innerText = score(0);
});

plus[0].addEventListener('click', (event) => {
    event.preventDefault();
    value[0].innerText = score(1);
});
