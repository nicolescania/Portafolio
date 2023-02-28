import express from 'express';

// require passport functionality
import passport from 'passport';

// require User Model
import User from '../Models/user';

import { UserDisplayName } from '../../Util';

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

export function ProcessRegisterPage(req: express.Request, res:express.Response, next:express.NextFunction)
{

    // instantiate a new user object

    let newUser = new User
    ({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName

    });


    User.register(newUser, req.body.password, function(err)
    {
        if (err)
        {
            if (err.name == "UserExistsError")
            {
                console.log('Error: User Already Exist!');
                req.flash('registerMessage', 'Registration Error');
            }
            else
            {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error');
            }
            
            return res.redirect('/register');
        }

        // everything is okey- user has been register
        // automatically login the user

        return passport.authenticate('local') (req, res, function()
        {

            return res.redirect('/movie-list');
        })
    })


}
export function ProcessLogoutPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    req.logout( (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
 
}

//Temporary


