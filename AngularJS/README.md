## As a beinner there are many question as following:
> createdTime:2018-03-27 14:05:00

 Locaction: Riyadh

###  Question 1:
some code as below:
``` 
var app = angular.module('App',['parameter1','parameter2','parameter3'])
```
so,how to deleviry the 3 parameter to the 'app';

### Question 2:
attention:
at the version 1.2.13 declare a controller like 

**error**

"<html ng-app>"

```
<!DOCTYPE html>
<html ng-app>
    <head>
        <title>Data Binding</title>
        <script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
        
    </head>
    <body>
        <input ng-model="name" type="text" placeholder="Your name">
        <h1>Hello {{ name }}</h1>
        <div ng-controller="MyController">
            <h2>下面时间每个一秒刷新一次：</h2>
            <h3>{{ clock }}</h3>
        </div>
    </body>
    <script type="text/javascript">
        //declare a controller
        function MyController($scope, $timeout){
            var updateClock = function(){
                $scope.clock = new Date();
                $timeout(function(){
                    updateClock();
                },1000);
            };
            updateClock();
        }
    </script>
    <script src="app.js"></script>
</html>
```

if the code like above,when I run the file there will occured an error!

**right**

"<html ng-app="MyApp">"

```
<!DOCTYPE html>
<html ng-app="MyApp">
    <head>
        <title>Data Binding</title>
        <script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>
        
    </head>
    <body>
        <input ng-model="name" type="text" placeholder="Your name">
        <h1>Hello {{ name }}</h1>
        <div ng-controller="MyController">
            <h2>下面时间每个一秒刷新一次：</h2>
            <h3>{{ clock }}</h3>
        </div>
    </body>
    <script type="text/javascript">
        var app = angular.module("MyApp",[]);
        app.controller("MyController",function($scope, $timeout){
            var updateClock = function(){
                $scope.clock = new Date();
                $timeout(function(){
                    updateClock();
                },1000);
            };
            updateClock();
        });
    </script>
</html>

```
###  module
how to create a module? and how to use a module?
- create
- - use "angular.module()" to declare a module,and this function receice tow parameters.
- - the first is module name, the second is dependency list
- - "angular.module("moduleName",[])"
- - **requires**requires包含了字符串变量组成的列表，每个元素都是一个模块名称，本模块依赖于这些模块，**依赖需要在本模块加载之前由注入器进行预加载**

### $scope
在angularJS启动并执行的时候，会将ng-app元素与$rootScope进行绑定。$rootScope是所有哦$scope的最上层。

### {{ }}
- 值绑定，模板语法{{ }}可以将表达式绑定到视图上。
- 过滤器：在{{ }}可以使用过滤器函数，用来将数据进行格式化
- eg:{{name | uppercase}} uppercase函数讲name的值全部变成大写字母

### 两种定义控制器Controller的方法
- 方法1：   

```
function FirstController($scope){
    $scope.name = "hello";
}
```

- 方法2：   

```
//先定义一个模块
var app = angular.module("Myapp",[]);
app.controller("FirstController",[]){
    $scope.name = "hello";
}
```

- **总结：**显而易见，我们应该选择第二种方法，因为方法1在全局作用域中创建的，这样做不合适，因为会污染全局命名空间。但是方法2就显得更可取了，现创建一个模块，然后在模块中创建控制器。

