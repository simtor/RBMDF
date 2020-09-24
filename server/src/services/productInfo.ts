// const inputHandler = require("./index.js")
export default function productInfo(result){
    for(const property in result) {
     console.log(`${property}: ${result[property]}`);
  }
  return true
  }
  
//   export default productInfo;
