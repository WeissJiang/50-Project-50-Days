const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '';

    function updateCounter(){
        const target =+ counter.getAttribute('data-target');
        // console.log(counter.innerText);
        const c =+ counter.innerText;
        // console.log(c);
        const increment = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1); // 利用setTimeout()来不断循环if的判断
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})