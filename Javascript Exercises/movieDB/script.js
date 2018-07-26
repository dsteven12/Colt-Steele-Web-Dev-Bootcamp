// Built 2 variations on an iterator to search through movies and output a string to console.

var movies = [
	{
		title: "The Matrix",
		rating: "4.5",
		hasWatched: true,
	},
	{
		title: "Thor: Ragnarok",
		rating: "5",
		hasWatched: true,
	},
	{
		title: "Mamma Mia",
		rating: " ",
		hasWatched: false,
	},
	{
		title: "Hereditary",
		rating: " ",
		hasWatched: false,
	},
];

var moviesSeen = {
	buildString: function(movie) {
		var result = "You have ";
		if(movie.hasWatched) {
			result += "watched ";
		} else {
			result += "not seen ";
			movie.rating = 0;
		}
		console.log(`${result}\"${movie.title}\" - ${movie.rating} stars.`);
	},	
	moviesWatched: function(movies) {
		movies.forEach(function(movie) {
			this.buildString(movie);
		});
	},
	moviesWatchedV2: function(movies) {
		for(var i = 0; i < movies.length; i++) {
			this.buildString(movies[i]);
		}
	}
}

moviesSeen.moviesWatchedV2(movies);

		
