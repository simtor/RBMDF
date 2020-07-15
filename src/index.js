let readline = require("readline");
const Product = require("models/product.js")
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]



function inputHandler(answer) {
  let result = correctAswers.includes(answer)
  if (result) {
    console.log("You Product has been found", answer)
    rl.close()
    return true
  } else {
    rl.write("The Medical licence number was not found :(\n")
    rl.question("Input your medical licence number: ", inputHandler)
  }
}

rl.question("Input your medical licence number: ", inputHandler)

exports.inputHandler = inputHandler







