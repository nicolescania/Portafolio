import express from 'express';

// need passport functionality
import passport from 'passport';



// Need to include the user model for authentication functions

import User from '../Models/user'

// Display functions

export function DisplayLoginPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: ''});
}

//Processing Functions

export function ProcessLoginPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    passport.authenticate('local', function(err, user, info)
    
    {
        // server errors
        if(err)
        {
            console.error(err)
        }

        // login errors
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        // no problems - we have a good username and password
        req.logIn(user, function(err)
       
        {
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/movie-list');
        });
    }) (req, res, next)




}

export function ProcessRegisterPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{

}
export function ProcessLogoutPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
  
}

//Temporary


