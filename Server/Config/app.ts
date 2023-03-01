

import createError   from 'http-errors';
import express, { NextFunction }  from 'express';
import path, { dirname }  from 'path';
import cookieParser  from 'cookie-parser';
import logger  from 'morgan';

//  import db package
import mongoose  from 'mongoose';

// import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';


// modules for JWT support
import cors from 'cors';

//define our auth objects
let localStrategy = passportLocal.Strategy;

// Import the user model
import User from '../Models/user'

// import the router data
import indexRouter  from '../Routes/index';
import movieListRouter from '../Routes/movie-list';
import authRouter from '../Routes/auth';




const app = express();

//  DB configuration
import *as DBconfig from './db';
mongoose.connect(DBconfig.RemoteURI);

const db = mongoose.connection; //alias for the mongoose connection

// Listen for connections or Errors
db.on("open", function()
{
  console.log(`Connected to MongoDB at: ${DBconfig.HostName} `);
});

db.on("error", function()
{
  console.error(`Connection Error`);
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors()); //add CORS (cross-origin resource sharing) to the config

// For auth - setup express session

app.use(session({
  secret: DBconfig.Secret,
  saveUninitialized: false,
  resave: false
}));

// Setup Flash
app.use(flash());

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Implement the auth Strategy
passport.use(User.createStrategy());

// Setup serialization and deserialization (encoding and decoding)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use('/', indexRouter);
app.use('/', movieListRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;