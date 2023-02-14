

import express from 'express';
const router = express.Router();
// import controller module

import {DisplayHomePage, DisplayAboutPage, DisplayprojectPage, DisplayservicePage, DisplaycontactPage} from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/about', DisplayHomePage);
router.get('/projects', DisplayprojectPage);
router.get('/services', DisplayservicePage);
router.get('/contact', DisplaycontactPage);


export default router;



//Temporary

//router.get('/movie-list', DisplayMovieList);

