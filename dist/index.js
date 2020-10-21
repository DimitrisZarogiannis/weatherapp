"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var path_1 = __importDefault(require("path"));
var STATIC = path_1.default.resolve(__dirname, '../src/client/build');
var INDEX = path_1.default.resolve(STATIC, 'index.html');
var app = express_1.default();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/weather', routes_1.WeatherRouter);
app.use(express_1.default.static(STATIC));
app.get('*', function (req, res) {
    res.sendFile(INDEX);
});
app.listen(constants_1.PORT, function () {
    console.log("Server is listening on port " + constants_1.PORT);
});
