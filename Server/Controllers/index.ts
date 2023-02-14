import express from 'express';

export function DisplayHomePage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}


export function DisplayAboutPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'About me', page: 'about' });
}



export function DisplayprojectPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'My projects', page: 'projects' });
}

export function DisplayservicePage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'My Services', page: 'services' });
}

export function DisplaycontactPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Contact me', page: 'contact' });
}



//Temporary

import Movie from '../Models/movie';

export function DisplayMovieList(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if (err)
        {
            console.error(err);
        }
        res.render('index', {title: 'Movie List', Page: 'movie-list', movies: moviesCollection});
    });
}