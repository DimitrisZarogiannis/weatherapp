"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
var CrudController_1 = require("./CrudController");
var WeatherController = /** @class */ (function (_super) {
    __extends(WeatherController, _super);
    function WeatherController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherController.prototype.create = function (req, res) {
        throw new Error("Method not implemented.");
    };
    WeatherController.prototype.read = function (req, res) {
        res.json({ message: 'GET /user request received' });
    };
    WeatherController.prototype.update = function (req, res) {
        throw new Error("Method not implemented.");
    };
    WeatherController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return WeatherController;
}(CrudController_1.CrudController));
exports.WeatherController = WeatherController;
