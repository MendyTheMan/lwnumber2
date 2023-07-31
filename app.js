// alert('hello wrold')

let hamburger = document.querySelector('.hamburger');
let navButtons = document.querySelector('.nav-buttons');
let logo = document.querySelector('.logo');
let navBar = document.querySelector('.navbar');

function openUp() {
    logo.classList.toggle('chicken')
    navButtons.classList.toggle('display-nav-buttons')
    navBar.classList.toggle('expand')
}

hamburger.addEventListener('click', openUp)