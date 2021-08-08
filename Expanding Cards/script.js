const panels = document.querySelectorAll('.panel');

// panels.forEach(function(panel){
//      panel.addEventListener('click', function(){
//          panels.forEach(function(e){
//              e.classList.remove('active');
//          })
//          panel.classList.add('active');
//      })
//  })

panels.forEach(function(panel){
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(function(e){
        e.classList.remove('active');
    })
}