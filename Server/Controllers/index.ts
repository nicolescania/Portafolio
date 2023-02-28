import express from 'express';


export function DisplayHomePage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', displayName: '', hola:"hola"});
}



//Temporary


