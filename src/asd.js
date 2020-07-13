const readline = require('readline');
const { rawListeners } = require('process');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});


let num1 = Math.floor((Math.random() *10) + 1);
let num2 = Math.floor((Math.random() *10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`,
(userInput)=>{
  if(userInput.trim() == answer){
    rl.close();
  }
  else{
    rl.setPrompt("Incorrect response please try again\n");
    rl.prompt();
    rl.on("line",(userInput)=>{
      if(userInput.trim() == answer)
      rl.close();
      else{
        rl.setPrompt(`Your answer of ${userInput} is incorrct\n`)
        rl.prompt();
      }
    })
  }
  console.log(userInput);
});

rl.on("close",()=>{
  console.log("correct answer")
});

// const readline = require("readline");
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]
 

// function inputHandler(answer) {
//   let result = correctAswers.includes(answer)
//   if (result){
//         console.log("You Product has  been found", answer)
//         rl.close();
//     }
//     else{
//       rl.setPrompt("The Medical licence number was not found :(\n");
//       console.log(correctAswers);
//       // console.log("Please input The Medical licence number: ")
//       rl.prompt();
//       rl.on("line",(answer)=>{
//         let result = correctAswers.includes(answer)
//         if(result){
//           console.log("You Product has  been found", answer)
//         rl.close();
//         }   
//         else{
//           rl.setPrompt("The Medical licence number was not found :(\n");
//           console.log(correctAswers);
//           rl.prompt();
//         }
//       })
//     }
// }

// rl.question("Input your medical licence number: ", inputHandler)
// rl.on("close",()=>{
//   console.log("Your search as been successfully found the Medical licence number")
// });
