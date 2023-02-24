import express from 'express';

// need passport functionality
import passport from 'passport';



// Need to include the user model for authentication functions

import User from '../Models/user'

// Display functions

export function DisplayLoginPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), distplayName: ''});
}

export function DisplayRegisterPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), distplayName: ''});
}

//Processing Functions

export function ProcessLoginPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{

}

export function ProcessRegisterPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{

}
export function ProcessLogoutPage(req: Express.Request, res:express.Response, next:express.NextFunction)
{
  
}

//Temporary


