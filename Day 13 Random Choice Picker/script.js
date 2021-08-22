const textarea = document.getElementById('textarea');
const tagsDiv = document.getElementById('tags');

textarea.focus();

textarea.addEventListener('keyup', function(e){
    console.log(e.target.value);
    createTags(e.target.value);

    if(e.key == 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10); //  清空了输入框里的内容

        randomSelect();
    }
})

function createTags(input){
    // 用function()时需要加上返回值return
    // 直接用箭头函数会简单很多
    console.log(
        input
        .split(',')
        .filter(function(tag){
            return tag.trim() !== '';
        })
        .map(function(tag){
            return tag.trim();
        })
    );

    /* split() 
     * split()方法将一个字符串分割成一个有序的子字符串列表，将这些子字符串放入一个数组Array，并返回数组。
     * filter()
     * filter()方法创建一个新的数组，其中包含所有通过所提供函数function实现的测试的元素。
     */
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsDiv.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsDiv.appendChild(tagElement);
    })
}

function randomSelect(){
    // 现在开始随机选择， 200ms是随机选的时间，100ms是闪的时间
    const selecting = setInterval(() => {  // 重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。
        // 先随机选一个tag
        const randomTag = pickARandomTag();

        // 只要有tag存在，对选出来的tag进行操作
        if(randomTag !== undefined){
            // 先在选出来的tag增加highlight的效果
            randomTag.classList.add('highlight');

            // 100ms之后，移除该tag的highlight的效果
            setTimeout(() => {
                randomTag.classList.remove('highlight');
            }, 100);
        }
    }, 200); // selecting()每200ms重复一次，重复(随机选tag，对选出来的tag添加highlight，100ms之后移除highlight)的操作

    // 现在需要停下随机选择
    setTimeout(() => {
        clearInterval(selecting);

        setTimeout(() => {
            const determiningTag = pickARandomTag();

            determiningTag.classList.add('highlight');
        }, 100) // 这100ms是，在30*200ms之后启动外面的setTimeout()之后，启动后的100ms之后启动它自己的的setTimeout()。
    }, 30 * 200) // 30*200ms的意思是， selecting()每200ms随机选择一次，那么在选择30次之后setTimeout()启动，停下随机选择
}

function pickARandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}