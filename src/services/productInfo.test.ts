const productInfo = require("../services/productInfo.js")
// const productInfo = require("./productInfo.js");
// const products = require("./medicineInfo.js");
// const products = require("./medicineInfo.js");


let mockProduct = {
    name: 'Simtor', 
    dose: '2.5mg', 
    Substance: 'Ramisoum', 
    url:'https://mhraproductsproduction.blob.core.windows.net/docs/bdc8d29cd2957f0ffdd230f6f47a5d9cf5b3f039'
};

let mockProducts = {
    "PL001735050":mockProduct
}

jest.mock("../repositories/medicineInfo", () => (mockProducts));


test("Testing mock function", ()=>{
    expect(productInfo("PL001730050")).toBe(true)
    // expect(productInfo("PL001730050")).toMatchSnapshot();
})


// test("PL001655013", ()=>{
//     expect(productInfo("PL001655013")).toBe(true);
//     expect(productInfo("PL001655013")).toMatchSnapshot();
// })

// test("PL136060206", ()=>{
//     expect(productInfo("PL136060206")).toBe(true);
//     expect(productInfo("PL136060206")).toMatchSnapshot();
// })


// test("PL252980158", ()=>{
//     expect(productInfo("PL252980158")).toBe(true);
//     expect(productInfo("PL252980158")).toMatchSnapshot();
// })

// test("PL201170079", ()=>{
//     expect(productInfo("PL201170079")).toBe(true);
//     expect(productInfo("PL201170079")).toMatchSnapshot();
// })



