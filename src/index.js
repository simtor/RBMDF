const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



  //https://www.youtube.com/watch?v=vU6OTnhj3wM


let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]
 

function inputHandler(answer) {
  let result = correctAswers.includes(answer)
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

rl.question("Input your medical licence number: ", inputHandler)
rl.on("close",()=>{
  console.log("Your search as been successfully found the Medical licence number")
});




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









