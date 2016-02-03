
var app = angular.module('App',['ngRoute','ngAnimate'])

app.config(function($routeProvider,$locationProvider) {
$routeProvider
		.when('/', {
		templateUrl:'partials/main.html',
		controller:"ControllerTwo"

	}).when('/info', {
		templateUrl:'partials/info.html',
		controller:"ControllerTwo"

	}).otherwise({
		redirectTo:'/'

	})

	// $locationProvider.html5Mode(true);
})