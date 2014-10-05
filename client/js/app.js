var App = angular.module("App", []);
App.config(function($routeProvider) {
	$routeProvider.when("/frontpage", {
		templateUrl : "partials/frontpage.html",
		controller : "frontpage"
	});
	$routeProvider.otherwise({redirectTo : "/frontpage"});
});

App.controller("frontpage", function($scope) {
	console.log("Hi from the frontpage controller");
	$scope.name = "Paul";
});