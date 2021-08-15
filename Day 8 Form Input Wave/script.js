const labels = document.querySelectorAll('.form-control label');
labels.forEach(function(label){

    console.log(label.innerText.split('').map(function(letter, index){
        return `<span style="transition-delay:${index*50}ms">${letter}</span>`}).join(''));
  
    label.innerHTML = label.innerText
    .split('')
    .map(function(letter, index){
        return `<span style="transition-delay:${index*50}ms">${letter}</span>`})
    .join('');
})