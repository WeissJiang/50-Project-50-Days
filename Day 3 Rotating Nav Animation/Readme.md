## Flexbox
flexbox之所以能迅速吸引开发者的注意，其中一个原因就是它首次为网页样式居中提供了合适的方案。得益于它提供的合适的垂直居中能力，我们可以很轻松地把一个盒子居中。   
为了使我们的盒子居中，通过align-items属性，可以将交叉轴上的item对齐，此时使用的是垂直方向的块轴。而使用justify-content则可以对齐主轴上的项目，主轴是水平方向的。   
* 主轴: Main Axis   
* 次轴: Cross Axis   
![image 1](https://mdn.mozillademos.org/files/15627/align1.png)   

### 控制对齐的属性
#### 首先元素要有{display: flex;}才能进行对齐操作。
本指南中的属性如下。   
* justify-content - 控制主轴（横轴）上所有 flex 项目的对齐。
* align-items - 控制交叉轴（纵轴）上所有 flex 项目的对齐。
* align-self - 控制交叉轴（纵轴）上的单个 flex 项目的对齐。
* align-content - 控制“多条主轴”的 flex 项目在交叉轴的对齐。