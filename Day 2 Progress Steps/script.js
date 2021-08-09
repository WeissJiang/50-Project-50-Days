const lineProgress = document.getElementById('progress');
const circleProgress = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentNumber = 1;

prevBtn.addEventListener('click', function(){
    currentNumber--;
    update();
})

nextBtn.addEventListener('click', function(){
    currentNumber++;
    update();
})

function update(){
    // 更新圆圈
    circleProgress.forEach(function(item, index){
        if(index < currentNumber){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
    //更新线条
    lineProgress.style.width = (currentNumber - 1)/(circleProgress.length - 1) * 100 + '%';
    //更新边界按钮
    if(currentNumber == 1){
        prevBtn.disabled = true;
    }else if(currentNumber == 4){
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
