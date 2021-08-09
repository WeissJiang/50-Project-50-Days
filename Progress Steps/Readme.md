## HTML tag
### button
A disabled button:    
````
<button type="button" disabled>Can not be clicked</button>
````

## CSS变量教程
The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.
#### 1. 变量的声明  
声明变量的时候，变量名前面要加两根连词线（--）。  
````
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
}
````   
上面代码中，body选择器里面声明了两个变量：--foo和--bar。  
它们与color、font-size等正式属性没有什么不同，只是没有默认含义。所以 CSS 变量（CSS variable）又叫做"CSS 自定义属性"（CSS custom properties）。因为变量与自定义的 CSS 属性其实是一回事。  
各种值都可以放入 CSS 变量。  
````
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
````   
变量名大小写敏感，--header-color和--Header-Color是两个不同变量。  
#### 2. var()函数
var()函数用于读取变量。  
````  
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
````  
_注意，变量值只能用作属性值，不能用作属性名。_  

## CSS概念
### :root selector
The :root selector matches the document's root element.   
In HTML, the root element is always the html element.
### 先设置 {display: flex;} 才能设置居中
#### 1. text align
The text-align property specifies the **horizontal** alignment of text in an element.
#### 2. ustify-content
It specifies the **horizontal** alignment 
#### 3. align-items
It specifies the **vertical** alignment 
#### 4. ::before
The ::before selector inserts something before the content of each selected element(s).  
Use the content property to specify the content to insert.  
Use the ::after selector to insert something after the content.  
* “伪空”概念
在这个案例中，可以用来画线条
````  
/* draw a line
 * <div class="progress" id="progress"></div>
 * 这个<div>中没有任何值，所以1不是第一位，而是这个空值所占的位置在第一位
 * 因为是空值，所以它的高度和颜色都是<div>所占的背景，所以看起来像是一条线
 */
.progress-container::before{
    content: "";
    background: var(--line-border-empty);
    height: 4px;
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -2px;
    z-index: -1;
}
````  
#### 5. :active
The :active selector is used to select and style the active link.  
A link becomes active when you click on it.  
* Tip: The :active selector can be used on all elements, not only links.  
* It refers to the active pseudo css class which is automatically set by the browser. 
#### 6. .active
* It refers to a simple css class that you (or your program) need to apply to the element.
* 它跟 **:active** 的区别是, **.active**需要自己去设定
#### 7. :focus
The :focus selector is used to select the element that has focus, such as input box.  
* Tip: The :focus selector is allowed on elements that accept keyboard events or other user inputs.  
