var app = angular.module('App',[]);


app.controller('Controller',function($scope){
$scope.hello = {};
$scope.hello.title = "World!"
$scope.hello.animal = ['dog','cat','dog and cat','neither']
})

app.controller('Controller2',function($scope) {
$scope.hello = {};
$scope.hello.title = "World!"
$scope.hello.pi =14159265
$scope.hello.showTip = [10,15,20]
$scope.hello.anotherTip=[]

})

app.controller('Controller3',function($scope) {
	$scope.libs = {};

})

app.controller('Controller4',function($scope) {
	$scope.password = {};
	
})



