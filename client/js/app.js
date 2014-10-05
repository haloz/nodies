(function(){	
	var app = angular.module('movieDatabase', []);
	app.controller('MovieController', function() {
		this.movies = moviesData;
	});

	var moviesData = [
		{
			"title" : "A Clockwerk Orange",
			"languages" : ["de","en"],
			"length" : 136,
			"imdb" : "http://www.imdb.com/title/tt0066921/",
			"format" : "SD"
		},
		{
			"title" : "Gravity",
			"languages" : ["en"],
			"length" : 91,
			"imdb" : "http://www.imdb.com/title/tt1454468/",
			"foramat" : "HD"
		}
	];
})();