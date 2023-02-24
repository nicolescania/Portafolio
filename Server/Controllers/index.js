"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: ' ' });
}
exports.DisplayHomePage = DisplayHomePage;
//# sourceMappingURL=index.js.map