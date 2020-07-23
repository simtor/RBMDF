const readline = require('readline');
const productInfo = require("./productInfo.js")
const products = require("./medicineInfo")
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});


function inputHandler(answer) {
  if (answer === "Q") {
    rl.close()
    return null
  }
  let result = products[answer]
  if (result) {
    productInfo();
    console.log("You Product has been found", answer)
    rl.question("Input your medical licence number or Q to quit: ", inputHandler)
    return true
  } else {
    rl.write("The Medical licence number was not found :(\n")
    rl.question("Input your medical licence number or Q to quit: ", inputHandler)
  }
}
rl.question("Input your medical licence number or Q to quit: ", inputHandler)



module.exports = inputHandler

