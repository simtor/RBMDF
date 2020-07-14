const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]
 
function inputValiidation(result){
  if (result){
    console.log("You Product has  been found", answer)
    rl.close();
  }
  else{
    rl.setPrompt("The Medical licence number was not found :(\n");
    console.log(correctAswers);
    // console.log("Please input The Medical licence number: ")
    rl.prompt();
    rl.on("line",(answer)=>{
      let result = correctAswers.includes(answer)
      if(result){
        console.log("You Product has  been found", answer)
      rl.close();
      }   
      else{
        rl.setPrompt("The Medical licence number was not found :(\n");
        console.log(correctAswers);
        rl.prompt();
      }
    })
  }
}

//Ah - sort of! Try just adding the bit you’re repeating into the function, i.e. - the part about checking the result and returning true or false. 
//You could then wrap that part in a while (resultNotFound) loop so that you don’t need to keep repeating the same code
function inputHandler(answer) {
  let result = correctAswers.includes(answer)
  if(result){
    console.log("You Product has been found", answer)
  }
  else{
    inputValiidation();
  }
  // return result;
}


rl.question("Input your medical licence number: ", inputHandler)
rl.on("close",()=>{
  console.log("Your search as been successfully found the Medical licence number")
});

exports.inputHandler = inputHandler




// rl.question("Please Input the product that your looking for: ", async (answer) => {
//     var correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
//     var result  = correctAswers.includes(answer);
//     if (result){
//         console.log("You Product has  been found", answer)
//         rl.close();
//     }else{
//       console.log("You Product has not  been found", answer)
//       rl.setPrompt("Please input product number again: ");
//       console.log(correctAswers);
//       rl.prompt();
//       rl.on('line',(answer)=>{
//         var result  = correctAswers.includes(answer);
//         if(result){
//           console.log("You Product has  been found", answer)
//           rl.close();
//         }
//       })
//     }
//   });




// else{
//     console.log("You Product has not  been found", answer)
//     rl.setPrompt("Please input product number again: ");
//     console.log(correctAswers);
//     rl.prompt();
//     rl.on('line',(answer)=>{
//       var result  = correctAswers.includes(answer);
//       if(result){
//         console.log("You Product has  been found", answer)
//         rl.close();
//       }else{
//         rl.setPrompt(`Your answer of ${answer} is incorrect\n`)
//         rl.prompt();
//       }
//     })
//   }





