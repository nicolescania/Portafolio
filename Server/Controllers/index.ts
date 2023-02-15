import express from 'express';
import Movie from '../Models/movie';

export function DisplayHomePage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', });
}



//Temporary



export function DisplayMovieList(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if (err)
        {
            console.error(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection});
    });
}