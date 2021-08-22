const toggles = document.querySelectorAll('.toggle');

toggles.forEach(function(toggle){
    
    toggle.addEventListener('click', function(){
        toggles.forEach(function(item){
            item.parentNode.classList.remove('active');
        })
        toggle.parentNode.classList.toggle('active');
        // 这样把激活点击限制于按钮区域
        console.log(toggle.parentNode);
    })
})
