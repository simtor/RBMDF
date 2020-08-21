const readline = require('readline');
import  productInfo from "../services/productInfo"
import products from "../repositories/medicineInfo"
// const products = require("../repositories/medicineInfo")
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});

export default function inputHandler(answer:string) {
  if (answer === "Q") {
    rl.close()
    return null
  }
  let result:string = products[answer]
  // console.log(result)
  if (result) {
    productInfo(result);
    console.log("You Product has been found", answer)
    rl.question("Input your medical licence number or Q to quit: ", inputHandler)
    return result
  } else {
    rl.write("The Medical licence number was not found :(\n")
    rl.question("Input your medical licence number or Q to quit: ", inputHandler)
  }
}
rl.question("Input your medical licence number or Q to quit: ", inputHandler)


// export default inputHandler;

