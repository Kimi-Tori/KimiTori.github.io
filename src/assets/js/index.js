import '../scss/style.scss';

let burgerOpen = document.getElementById("burgerOpen");
let burgerClose = document.getElementById("burgerClose");
let burgerBlock = document.getElementById("burgerBlock");
let burgerNavFirst = document.getElementById("burgerNavFirst");
let burgerNavTwo = document.getElementById("burgerNavTwo");
let burgerMainFirst = document.getElementById("burgerMainFirst");
let burgerMainTwo = document.getElementById("burgerMainTwo");

burgerOpen.onclick = () => {
    burgerBlock.classList.toggle("block-opened");
}

burgerNavFirst.onclick = () => {
    burgerMainFirst.classList.toggle("block-opened");
}
burgerNavTwo.onclick = () => {
    burgerMainTwo.classList.toggle("block-opened");
}