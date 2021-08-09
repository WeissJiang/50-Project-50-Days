## flex概念
flex: 1;
每个元素占一个单位，单位比例相同.
### 主轴和次轴的对齐
justify-cotent (默认主轴或者横轴居中)
align-items (默认次轴或者竖轴居中)

## CSS property概念
### height
vh: 视口的初始包含块的高度的 1%。   
vw: 视口的初始包含块的宽度的 1%。
### background-size
auto: 以背景图片的比例缩放背景图片。   
cover: 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。   
contain: 缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。 
### position
子绝父相  
要使h3的定位是相对于panel，则需要在.panel()中，设置position: relative, 否则h3则会相对于html绝对定位。
### :nth-of-type
:nth-of-type(n) 这个 CSS 伪类是针对具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置。  
例如：
    
    <div>
    <div>这段不参与计数。</div>
    <p>这是第一段。</p>
    <p>这是第二段。</p>
    <div>这段不参与计数。</div>
    <p>这是第三段。</p>
    <p>这是第四段。</p>
    </div>
    在每组兄弟元素中选择第四个 <p> 元素
    p:nth-of-type(4n) {
        color: red;
    }

## Animation动画
### transform (https://www.jianshu.com/p/22fe04eaa4ee)
#### Definition: The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
#### Property value:
1. rotate	旋转	0~360 deg
2. translate	移动	number px
3. scale	改变大小	数值n < 0~1(缩小), n>1(放大),n可以为负值.表示反向缩放幅度
4. skew	倾斜	0~360 deg
5. perspective	透视	number + px
6. matirx	矩阵变换	(n,n,n,n,n,n) n为数值

### transition (https://www.jianshu.com/p/28ae9fb59c9b)
#### Definition: Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.
#### transition:  all          .5d            ease-in-out         1s
all: selected property  
.5s:animation duration  
ease-in-out: animation type  
1s: animation delay  

1. ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)；
2. linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)；
3. ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)；
4. ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0)；
5. ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)；
6. cubic-bezier：（该值允许你去自定义一个时间曲线）， 特定的cubic-bezier曲线。 (x1, y1, x2, y2)四个值特定于曲线上点P1和点P2。所有值需在[0, 1]区域内，否则无效。


## JavaScript 概念
.querySelectorAll()返回的是一个数组。  
.forEach()对每个数组的每个元素执行一次给定的函数。   
