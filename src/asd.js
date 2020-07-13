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