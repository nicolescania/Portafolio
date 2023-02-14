"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', index_1.DisplayHomePage);
router.get('/projects', index_1.DisplayprojectPage);
router.get('/services', index_1.DisplayservicePage);
router.get('/contact', index_1.DisplaycontactPage);
exports.default = router;
//# sourceMappingURL=index.js.map