import express from 'express';


export function DisplayLoginPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', });
}



//Temporary


