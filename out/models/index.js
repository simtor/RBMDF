"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline');
var productInfo_1 = require("../services/productInfo");
var medicineInfo_1 = require("../repositories/medicineInfo");
// const products = require("../repositories/medicineInfo")
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function inputHandler(answer) {
    if (answer === "Q") {
        rl.close();
        return null;
    }
    var result = medicineInfo_1.default[answer];
    if (result) {
        productInfo_1.default(result);
        console.log("You Product has been found", answer);
        rl.question("Input your medical licence number or Q to quit: ", inputHandler);
        return result;
    }
    else {
        rl.write("The Medical licence number was not found :(\n");
        rl.question("Input your medical licence number or Q to quit: ", inputHandler);
    }
}
exports.default = inputHandler;
rl.question("Input your medical licence number or Q to quit: ", inputHandler);
// export default inputHandler;
//# sourceMappingURL=index.js.map