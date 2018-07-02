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

// function moviesWatched(movies) {
// 	movies.forEach(function(movie) {
// 		buildString(movie);
// 	});

// 	function buildString(movie) {
// 		var result = "You have ";
// 		if(movie.hasWatched) {
// 			result += "watched ";
// 		} else {
// 			result += "not seen ";
// 			movie.rating = 0;
// 		}
// 		console.log(`${result}\"${movie.title}\" - ${movie.rating} stars.`);
// 	}	
// } 

function moviesWatchedV2(movies) {
	for(var i = 0; i < movies.length; i++) {
		buildString(movies[i]);
	}

	function buildString(movie) {
		var result = "You have ";
		if(movies[i].hasWatched) {
			result += "watched ";
		} else {
			result += "not seen ";
			movies[i].rating = 0;
		}
		console.log(`${result}\"${movies[i].title}\" - ${movies[i].rating} stars.`);
	}	
}

moviesWatchedV2(movies);

		
