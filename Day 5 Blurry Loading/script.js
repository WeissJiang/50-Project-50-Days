const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;
let timer = setInterval(blurring, 30); // continue calling the blurring() function until clearInterval() is called.

function blurring(){
    load++;
    loadingText.innerHTML = load + '%';
    loadingText.style.opacity = 1 - (load/100);
    // bg.style.opacity = load / 100;
    bg.style.filter = `blur(${20 - load/100 * 30}px)`;
    if(load > 99){
        clearInterval(timer);
    }
}
