## flex
flex-direction: column;   
此时，主轴为竖轴。
align-items: center; （次轴居中）
因为次轴为横轴， 所以此时横轴居中

## . addEventLister
### event:   
1. click
2. load
3. scroll   

## .getBoundingClientRect()
The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.  
### Example:
````
var box=document.getElementById('box'); // 获取元素

alert(box.getBoundingClientRect().top); // 元素上边距离页面上边的距离

alert(box.getBoundingClientRect().right); // 元素右边距离页面左边的距离

alert(box.getBoundingClientRect().bottom); // 元素下边距离页面上边的距离

alert(box.getBoundingClientRect().left); // 元素左边距离页面左边的距离
````   
