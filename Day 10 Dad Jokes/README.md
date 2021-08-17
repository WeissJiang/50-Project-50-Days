## fetch()
Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。   

Fetch API (opens new window)已经成为前端应用中获取资源的原生方式。  

在这篇文章中，我将展示如何用 async/await 语法使用 Fetch API 的常见场景。目的是让你对如何获取数据、处理获取错误、取消获取请求等有信心。   

Fetch API 通过网络访问资源。通过创建 HTTP 请求（GET，POST），下载和上传文件。

开始请求时，执行规范函数 fetch()：
````
const response = await fetch(resource[, options]);
````   

该函数接收两个参数：
* resource：一个 URL 字符串，或者一个 Request (opens new window)对象；
* options：一个配置对象，对象包含 method（'GET''，'POST''），headers，body，credentials 等等属性，更多属性参数 (opens new window)。

执行 fetch() 启动一个请求并返回一个承诺。当请求完成后，用 Response (opens new window)解决承诺。如果由于一些网络问题导致请求失败，则拒绝该承诺。

async/await 语法非常适合 fetch()，因为它简化了对承诺的工作。   

fetch() 返回的 Response 对象是多种数据格式的通用占位符。  
````
async function fetchMoviesJSON() {
  const response = await fetch('/movies');
  const movies = await response.json();
  return movies;
}
fetchMoviesJSON().then((movies) => {
  movies; // fetched movies
});
````
response.json() 是 Response 对象上的一个方法，让你从响应中提取 JSON 对象。该方法返回一个 promise，所以你必须等待 JSON 结果返回：await response.json()。  
response 对象提供了很多有用的方法：  
* response.json() 返回一个解析为 JSON 对象的 promise；
* response.text() 返回一个解析为文本内容的 promise；
* response.formData 返回一个解析为 FormData (opens new window)对象的 promise；
* response.blob() 返回一个解析为 Blog (opens new window)的 promise；
* response.arrayBuffer() 返回一个解析为 ArrayBuffer (opens new window)的 promise。