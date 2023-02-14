import express from 'express';
const router = express.Router();
// import controller module

import {DisplayHomePage} from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);

export default router;
