"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = exports.DisplaycontactPage = exports.DisplayservicePage = exports.DisplayprojectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayprojectPage(req, res, next) {
    res.render('index', { title: 'My projects', page: 'projects' });
}
exports.DisplayprojectPage = DisplayprojectPage;
function DisplayservicePage(req, res, next) {
    res.render('index', { title: 'My Services', page: 'services' });
}
exports.DisplayservicePage = DisplayservicePage;
function DisplaycontactPage(req, res, next) {
    res.render('index', { title: 'Contact me', page: 'contact' });
}
exports.DisplaycontactPage = DisplaycontactPage;
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayMovieList(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
        }
        res.render('index', { title: 'Movie List', Page: 'movie-list', movies: moviesCollection });
    });
}
exports.DisplayMovieList = DisplayMovieList;
//# sourceMappingURL=index.js.map