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
			"format" : "HD"
		},
		{
			"title" : "The Hobbit - An Unexpected Journey",
			"languages" : ["en"],
			"length" : 183,
			"imdb" : "http://www.imdb.com/title/tt0903624/",
			"format" : "HD"
		},		
		{
			"title" : "Jurassic Park",
			"languages" : ["en"],
			"length" : 127,
			"imdb" : "http://www.imdb.com/title/tt0107290/",
			"format" : "SD"
		},
		{
			"title" : "Ted",
			"languages" : ["en"],
			"length" : 106,
			"imdb" : "http://www.imdb.com/title/tt1637725/",
			"format" : "SD"
		}		
	];
})();