
import express from 'express';
const router = express.Router();
// import controller module

import {DisplayHomePage} from "../Controllers/index";



/* GET home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/index', DisplayHomePage);
/*
router.get('/about', DisplayAboutPage);
router.get('/projects', DisplayprojectPage);
router.get('/services', DisplayservicePage);
router.get('/contact', DisplaycontactPage);
*/



export default router;



//Temporary

//router.get('/movie-list', DisplayMovieList)