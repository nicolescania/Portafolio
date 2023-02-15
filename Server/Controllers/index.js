"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = exports.DisplayHomePage = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayMovieList(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
        }
        res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection });
    });
}
exports.DisplayMovieList = DisplayMovieList;
//# sourceMappingURL=index.js.map