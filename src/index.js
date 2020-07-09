const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



  //https://www.youtube.com/watch?v=vU6OTnhj3wM


let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]

// TODO: add validation

function inputHandler(answer) {
  let result = correctAswers.includes(answer)
  if (result){
        console.log("You Product has  been found", answer)
        rl.close();
    }else{
      console.log("You Product has not  been found", answer)
      rl.setPrompt("Please input product number again: ");
      console.log(correctAswers);
      rl.prompt();
      rl.on('line',(answer)=>{
        var result  = correctAswers.includes(answer);
        if(result){
          console.log("You Product has  been found", answer)
          rl.close();
        }
      })
    }
}

rl.question("Input your medical licence number: ", inputHandler)




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