const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        const audio = document.getElementById(btn.innerText);
        stop();
        audio.play();
    })
})

function stop(){
    btns.forEach(function(btn){
        const audio = document.getElementById(btn.innerText);

        audio.pause();
        audio.currentTime = 0;
    })
}