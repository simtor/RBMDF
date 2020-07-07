const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question("Please Input the product that your looking for: ", async (answer) => {
    var correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"];
    var result  = correctAswers.includes(answer);
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
  });