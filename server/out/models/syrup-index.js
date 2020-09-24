"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
var mongoose_1 = require("mongoose");
var syrups_1 = require("./syrups");
var connectDb = function () {
    return mongoose_1.default.connect("mongodb://localhost:127.0.0.1:27017/Syrups", { useNewUrlParser: true, useUnifiedTopology: true, });
};
exports.connectDb = connectDb;
var models = { Syrup: syrups_1.default };
exports.default = models;
//# sourceMappingURL=syrup-index.js.map