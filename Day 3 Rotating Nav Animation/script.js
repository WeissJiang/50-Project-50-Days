const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const nav = document.querySelector('nav');

openBtn.addEventListener('click', function(){
    container.classList.add('show-nav');
    circle.classList.add('show-nav');
    nav.classList.add('show-nav');
})

closeBtn.addEventListener('click', function(){
    container.classList.remove('show-nav');
    circle.classList.remove('show-nav');
    nav.classList.remove('show-nav');
})