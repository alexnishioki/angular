
app.factory('pages',function() {
	var pages = []
	var pagesServiceInstance = {}

	pagesServiceInstance.add = function(page) {
		pages=page
	}

	pagesServiceInstance.list = function() {
		return pages
	}

	return pagesServiceInstance
})

app.controller('ControllerOne', function($scope,$http,$location,$window,pages){
	$scope.list = pages.list
	$scope.add = pages.add
	$scope.pageClass = 'main'
$scope.findTitle = function() { $http.get('http://www.omdbapi.com/?s='+$scope.title)
	.then(function(result){
		
			pages.add(result.data.Search)
			var test = $scope.list
			console.log(test())
			$window.location='#/main'
		})
	}

})


app.controller('ControllerTwo',function($scope,$http,$location,$window,pages) {
	$scope.list = pages.list
	$scope.add = pages.add
$scope.findDescription = function(info,Poster) {
	$http.get('http://www.omdbapi.com/?i='+ info +'&type=movie&r=json')
	.then(function(result){
		pages.add(result.data)
			var test = $scope.list
			console.log(test())
			$window.location='#/info'
		
		})

	}
})

// app.controller('ControllerTwo',function($scope,$http,$location,$window,pages) {
// 	$scope.list = pages.list
// 	$scope.add = pages.add
// $scope.findDescription = function(info,Poster) {
// 	$http.get('http://www.omdbapi.com/?i='+ info +'&type=movie&r=json')
// 	.then(function(result){
// 		pages.add(result.data)
// 			var test = $scope.list
// 			console.log(test())
// 			$window.location='#/info'
		
// 		})

// 	}
// })

