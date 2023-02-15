

import express from 'express';
const router = express.Router();
// import controller module

import {DisplayHomePage, DisplayMovieList} from "../Controllers/index";



/* GET home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
/*
router.get('/about', DisplayAboutPage);
router.get('/projects', DisplayprojectPage);
router.get('/services', DisplayservicePage);
router.get('/contact', DisplaycontactPage);
*/
router.get('/movie-list', DisplayMovieList);


export default router;



//Temporary

//router.get('/movie-list', DisplayMovieList);

