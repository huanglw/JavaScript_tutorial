//app.js contain all controllers
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