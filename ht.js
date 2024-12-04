function flip() {
    const heads = document.querySelector(".heads");
    const tails = document.querySelector(".tails");
    const desc=document.querySelector(".desc");
    // Hide both images initially
    heads.style.display = 'none';
    tails.style.display = 'none';
    // Randomize the outcome
    const random = Math.floor(Math.random() * 2);

    // Display heads or tails based on random outcome
    if (random === 1) {
        desc.innerText = "Heads!";
        heads.style.display = 'block';
        heads.classList.add('spin');
        setTimeout(() => {
           heads.classList.remove('spin')
        }, 1100);
    } else {
        desc.innerText = "Tails!";
        tails.style.display = 'block';
        tails.classList.add('spin');
        setTimeout(() => {
            tails.classList.remove('spin')
         }, 1100);
    }
}
