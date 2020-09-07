// "start": "start npm run watch && nodemon out/models/index.js",
// "start": "node out/models/index.js",
// "dev": "npm run watch & nodemon out/models/index.js",
//"dev": "start npm run watch && nodemon out/app-server.js",


// const productInfo = require("./productInfo.js");
// const products = require("./medicineInfo.js");
// const products = require("./medicineInfo.js");

// const readline = require('readline');
// const rl = readline.createInterface({
//   input : process.stdin, 
//   output : process.stdout
// });


// let PL001730050 = {name: 'Ibugel gel', dose: '10mg', Substance: 'Ibuprofen', url:'https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca'}
// let PL001655013 = {name: 'Anadin Extra', dose: '5mg', Substance: 'Paracetamol', url:'https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970'}
// let PL136060206 = {name: 'Tadalafil 10mg film-coated tablets', dose: '10mg', Substance: 'Tadafil', url:'https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077'}
// let PL252980158 = {name: 'Nabilone 1mg capsules', dose: '1mg', Substance: 'Nabilone', url:'https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4'}
// let PL201170079 = {name: 'Ramipril 2.5mg tablets', dose: '2.5mg', Substance: 'Ramipril', url:'https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039'}
// let products = {
//   "PL001730050": PL001730050,
//   "PL001655013": PL001655013,
//   "PL136060206": PL136060206,
//   "PL252980158": PL252980158,
//   "PL201170079": PL201170079
// }

// function inputHandler(answer) {
//   let result = products[answer]
//   if (result) {
//     for(const property in result) {
//       console.log(`${property}: ${result[property]}`);
//   }
//     console.log("You Product has been found", answer)
//     rl.question("Press S to search again or Q to  quit: ", (nextMove)=>{ 
//       if (nextMove === "Q") {
//         rl.close()
//       } else {
//         rl.question("Input your medical licence number: ", inputHandler)
//       }
//       rl.close
//     })
//     return true;
//   } else {-
//     rl.write("The Medical licence number was not found :(\n")
//     rl.question("Input your medical licence number: ", inputHandler)
//   }
// }
// rl.question("Input your medical licence number: ", inputHandler)

// module.exports = inputHandler
// -----------------------------------------------------------------------------------




// const readline = require('readline');
// const rl = readline.createInterface({
//   input : process.stdin, 
//   output : process.stdout
// });

// let PL001730050 = {name: 'Ibugel gel', dose: '10mg', Substance: 'Ibuprofen', url:'https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca'}
// let PL001655013 = {name: 'Anadin Extra', dose: '5mg', Substance: 'Paracetamol', url:'https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970'}
// let PL136060206 = {name: 'Tadalafil 10mg film-coated tablets', dose: '10mg', Substance: 'Tadafil', url:'https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077'}
// let PL252980158 = {name: 'Nabilone 1mg capsules', dose: '1mg', Substance: 'Nabilone', url:'https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4'}
// let PL201170079 = {name: 'Ramipril 2.5mg tablets', dose: '2.5mg', Substance: 'Ramipril', url:'https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039'}
// let products = {
//   "PL001730050": PL001730050,
//   "PL001655013": PL001655013,
//   "PL136060206": PL136060206,
//   "PL252980158": PL252980158,
//   "PL201170079": PL201170079
// }


// function inputHandler(answer) {
//   let result = products[answer]
//   if (result) {
//     for(const property in result) {
//       console.log(`${property}: ${result[property]}`);
//   }
//     console.log("You Product has been found", answer)
//     rl.question("Press S to search again or Q to  quit: ", (nextMove)=>{ 
//       if (nextMove === "Q") {
//         rl.close()
//       } else {
//         rl.question("Input your medical licence number: ", inputHandler)
//       }
//       rl.close
//     })
//     return true
//   } else {
//     rl.write("The Medical licence number was not found :(\n")
//     rl.question("Input your medical licence number: ", inputHandler)
//   }
// }
// rl.question("Input your medical licence number: ", inputHandler)

// let readline = require("readline");
// const Product = require("models/product.js")
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let correctAswers = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]



// function inputHandler(answer) {
//   let result = correctAswers.includes(answer)
//   if (result) {
//     console.log("You Product has been found", answer)
//     rl.close()
//     return true
//   } else {
//     rl.write("The Medical licence number was not found :(\n")
//     rl.question("Input your medical licence number: ", inputHandler)
//   }
// }

// rl.question("Input your medical licence number: ", inputHandler)

// exports.inputHandler = inputHandler

// function inputHandler(answer) {
//   let result = products[answer]
//   if (result) {
//     for(const property in result) {
//       console.log(`${property}: ${result[property]}`);
//   }
//     console.log("You Product has been found", answer)
//     rl.question("Press S to search again or Q to  quit: ", (nextMove)=>{
//       if(nextMove == "S"){
//         rl.question("Input your medical licence number: ", inputHandler)
//       }else if (nextMove == "Q"){
//         rl.close()
//       }else{
//         rl.question("Input your medical licence number: ", inputHandler)
//       }
//       rl.close
//     })
//     // rl.close()
//     return true
//   } else {
//     rl.write("The Medical licence number was not found :(\n")
//     rl.question("Input your medical licence number: ", inputHandler)
//   }
// }
// rl.question("Input your medical licence number: ", inputHandler)

// let result = correctAswers.includes(answer)
// console.log(Object.values(result))
    // console.log(Object.getOwnPropertyNames(result))
    // console.log(result);
    // console.log(Object.entries(result));
    // var myString = JSON.stringify(result, null, 2);
    // console.log(myString);
    // console.log(Object.values(result))

// function car(brand, color, year, price) {
//   this.brand = brand;
//   this.color = color;
//   this.year = year;
//   this.price = price;
// }

// var my = new Array();
// my.push(new car("Ford", "Black", 2017, 15000));
// my.push(new car("Hyundai", "Red", 2017, 17000));

// function searchEngine(){
//   let result = correctAswers.includes(PL201170079)
//   if (result){
//   }
// }
// searchEngine();
// console.log(correctAswers[1]);

// const readline = require('readline');
// const { rawListeners } = require('process');
// const rl = readline.createInterface({
//   input : process.stdin, 
//   output : process.stdout
// });


// let num1 = Math.floor((Math.random() *10) + 1);
// let num2 = Math.floor((Math.random() *10) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}?\n`,
// (userInput)=>{
//   if(userInput.trim() == answer){
//     rl.close();
//   }
//   else{
//     rl.setPrompt("Incorrect response please try again\n");
//     rl.prompt();
//     rl.on("line",(userInput)=>{
//       if(userInput.trim() == answer)
//       rl.close();
//       else{
//         rl.setPrompt(`Your answer of ${userInput} is incorrct\n`)
//         rl.prompt();
//       }
//     })
//   }
//   console.log(userInput);
// });

// rl.on("close",()=>{
//   console.log("correct answer")
// });


// function inputValiidation(result){
//   if (result){
//     console.log("You Product has  been found", answer)
//     rl.close();
//   }
//   else{
//     rl.setPrompt("The Medical licence number was not found :(\n");
//     console.log(correctAswers);
//     // console.log("Please input The Medical licence number: ")
//     rl.prompt();
//     rl.on("line",(answer)=>{
//       let result = correctAswers.includes(answer)
//       if(result){
//         console.log("You Product has  been found", answer)
//       rl.close();
//       }   
//       else{
//         rl.setPrompt("The Medical licence number was not found :(\n");
//         console.log(correctAswers);
//         rl.prompt();
//       }
//     })
//   }
// }

// //Ah - sort of! Try just adding the bit you’re repeating into the function, i.e. - the part about checking the result and returning true or false. 
// //You could then wrap that part in a while (resultNotFound) loop so that you don’t need to keep repeating the same code
// function inputHandler(answer) {
//   let result = correctAswers.includes(answer)
//   if(result){
//     console.log("You Product has been found", answer)
//   }
//   else{
//     inputValiidation();
//   }
//   // return result;
// }


// rl.question("Input your medical licence number: ", inputHandler)
// rl.on("close",()=>{
//   console.log("Your search as been successfully found the Medical licence number")
// });

// exports.inputHandler = inputHandler




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







