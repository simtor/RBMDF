"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var syrupsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
}, { timestamp: true });
var Syrup = mongoose_1.default.model("Syrup", syrupsSchema);
exports.default = Syrup;
//# sourceMappingURL=syrups.js.map