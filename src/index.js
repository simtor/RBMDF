const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout
});

let PL001730050 = {name: 'Ibugel gel', dose: '10mg', Substance: 'Ibuprofen', url:'https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca'}
let PL001655013 = {name: 'Anadin Extra', dose: '5mg', Substance: 'Paracetamol', url:'https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970'}
let PL136060206 = {name: 'Tadalafil 10mg film-coated tablets', dose: '10mg', Substance: 'Tadafil', url:'https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077'}
let PL252980158 = {name: 'Nabilone 1mg capsules', dose: '1mg', Substance: 'Nabilone', url:'https://mhraproductsproduction.blob.core.windows.net/docs/b68e1e028e44806a00a65d016aec4f1c90436ac4'}
let PL201170079 = {name: 'Ramipril 2.5mg tablets', dose: '2.5mg', Substance: 'Ramipril', url:'https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039'}
let products = {
  "PL001730050": PL001730050,
  "PL001655013": PL001655013,
  "PL136060206": PL136060206,
  "PL252980158": PL252980158,
  "PL201170079": PL201170079
}

function productInfo(result){
  for(const property in result) {
   console.log(`${property}: ${result[property]}`);
}
return true
}

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
    return true;
  } else {
    rl.write("The Medical licence number was not found :(\n")
    rl.question("Input your medical licence number: ", inputHandler)
  }
}
rl.question("Input your medical licence number or Q to quit: ", inputHandler)

module.exports = inputHandler
module.exports = productInfo
