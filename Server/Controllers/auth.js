"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayLoginPage = void 0;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', });
}
exports.DisplayLoginPage = DisplayLoginPage;
//# sourceMappingURL=auth.js.map