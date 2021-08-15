const container = document.querySelector('.container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');

left.addEventListener('mouseenter', function(){
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', function(){
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', function(){
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', function(){
    container.classList.remove('hover-right');
})