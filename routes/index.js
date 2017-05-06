var moviesJSON = require('../movies.json');

exports.home = function (req, res) {
    var movies = moviesJSON.movies;
    res.render('home', {
        title: 'Star Wars Movies',
        movies: movies
    });
};

exports.movie_single = function (req, res) {
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;
    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];
        var main_characters = movie.main_characters;
        res.render('movie_single', {
            movies: movies,
            movie: movie,
            title: movie.title,
            main_characters: main_characters
        });
    } else {
        res.render('notfound', {
            movies: movies,
            title: 'Wrong Route'
        });
    }
};

exports.notFound = function (req, res) {
    var movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: "Oops, this page doesn't exist"
    });
};
