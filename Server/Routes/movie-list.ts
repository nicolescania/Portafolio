import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import { DisplayMovieListPage } from '../Controllers/movie-list';

/* Display Movie List Page */
router.get('/movie-list', AuthGuard, DisplayMovieListPage);

export default router;