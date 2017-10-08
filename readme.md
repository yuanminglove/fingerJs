# fingerJs

无任何三方依赖的js工具集。


不依赖任何第三方库。


目前包含：

* http 模块，给予fetch、promise封装

````js

finger.http.get(url,data).then((result) => {
  ...
})

````

使用http模块的get/post/httpDelete方法，参数为url和数据对象。也可以使用http.createHttpPromise方法自定义请求方法
注意http模块主要用于rest风格。

* client 浏览器检测模块

````js
if(finger.client.Chrome){
  alert('你使用的浏览器是chrome')
}
````

* handler 事件帮助模块

````js

var btn = document.getElementById('click')
finger.handler.addHandler(btn,'click',function(){
  alert('ok')
})

````