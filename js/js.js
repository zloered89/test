
'use strict';


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres: [],
	privat: false
};


for (let i=1; i < 2; i++) {
    
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');
	personalMovieDB.movies[a]=b;
}


    


console.log(numberOfFilms);








