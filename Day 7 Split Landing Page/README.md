### CSS Pseudo-elements
A CSS pseudo-element is used to style specified parts of an element.  
**For example**, it can be used to:  
* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element
````
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
````

### CSS Pseudo-classes
A pseudo-class is used to define a special state of an element.  
For example, it can be used to:  
* Style an element when a user mouses over it
* Style visited and unvisited links differently
* Style an element when it gets focus
````
HTML
<p>This paragraph contains a link:
  <a href="#">This link will turn red while you click on it.</a>
  The paragraph will get a gray background while you click on it or the link.
</p>

CSS
a:link { color: blue; }          /* 未访问链接 */
a:visited { color: purple; }     /* 已访问链接 */
a:hover { background: yellow; }  /* 用户鼠标悬停 */
a:active { color: red; }         /* 激活链接 */

p:active { background: #eee; }   /* 激活段落 */
````