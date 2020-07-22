const inputHandler = require("./index.js")
const productInfo = require("./productInfo.js")
// test("Test function works", ()=>{
    
// })

test("PL001730050", ()=>{
    expect(productInfo("PL001730050")).toBe(true)
    // expect(inputHandler("PL001730050")).toMatchSnapshot();
})

// test("PL001655013", ()=>{
//     expect(inputHandler("PL001655013")).toBe(true);
//     // expect(inputHandler("PL001655013")).toMatchSnapshot();
// })

// test("PL136060206", ()=>{
//     expect(inputHandler("PL136060206")).toBe(true);
//     // expect(inputHandler("PL136060206")).toMatchSnapshot();
// })


// test("PL252980158", ()=>{
//     expect(inputHandler("PL252980158")).toBe(true);
//     // expect(inputHandler("PL252980158")).toMatchSnapshot();
// })

// test("PL201170079", ()=>{
//     expect(inputHandler("PL201170079")).toBe(true);
//     // expect(inputHandler("PL201170079")).toMatchSnapshot();
// })

// test("Medical data test", ()=>{
//     expect(inputHandler("PL001730050")).toBe(true)
//     except(inputHandler(property)).toEqual([
//         'Ibugel gel'
//     ]);
// });


//   "PL201170079": PL201170079
// test("Test Output 3", ()=>{
//     expect(inputHandler(result)).toBe(
//         'name: Ibugel gel',
//         'dose: 10mg',
//         'Substance: Ibuprofen',
//         'url: https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca',
//         'You Product has been found PL001730050'
//     );
// })


// test("Test Output", ()=>{
//     expect(inputHandler("PL001730050")).toEqual(
//         'name: Ibugel gel',
//         'dose: 10mg',
//         'Substance: Ibuprofen',
//         'url: https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca',
//         'You Product has been found PL001730050'
//     )
// })

// describe("Input handler", () => {
//     test("returns true when product exists", () => {
//       expect(inputHandler("PL001730050")).toBe(true)
//     }),
//       test("returns false when product doesn't exist", () => {
//         expect(inputHandler("PL001730050")).toBe(false)
//       })
//   })