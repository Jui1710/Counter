let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let display = document.querySelector('#count');

let count = 0;

increase.addEventListener("click", () => {
    count++;
    display.innerHTML = count;
});

decrease.addEventListener("click", () => {
    count--;
    display.innerHTML = count;
});

reset.addEventListener("click", () => {
    count = 0;
    display.innerHTML = count;
});



