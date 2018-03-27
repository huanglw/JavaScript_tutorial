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

<html ng-app>

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

<html ng-app="MyApp">

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