const insert = document.getElementById('insert');

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
        <div class="key">${e.key}<small>event.key</small></div>
        <div class="key">${e.keyCode}<small>event.keyCode</small></div>
        <div class="key">${e.code}<small>event.Code</small></div>
    `;
})