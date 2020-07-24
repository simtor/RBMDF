const inputHandler = require("./index.js")
const productInfo = require("./productInfo.js")


test("PL001730050", ()=>{
    expect(inputHandler("PL001730050")).toEqual({
        "Substance": "Ibuprofen",
        "dose": "10mg",
        "name": "Ibugel gel",
        "url": "https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca",
          })
})


test("Snapshot input handler", ()=>{
    expect(inputHandler("PL001730050")).toMatchSnapshot();
})


test("PL001655013", ()=>{
    expect(inputHandler("PL001655013")).toEqual({
       "Substance": "Paracetamol",
       "dose": "5mg",
       "name": "Anadin Extra",
       "url": "https://mhraproductsproduction.blob.core.windows.net/docs/10c02830183326751553be62be5e2564fb47e970",
    }) 
})

test("Snapshot input handler", ()=>{
    expect(inputHandler("PL001655013")).toMatchSnapshot();
})


test("PL136060206", ()=>{
    expect(inputHandler("PL136060206")).toEqual({
        "Substance": "Tadafil",
        "dose": "10mg",
        "name": "Tadalafil 10mg film-coated tablets",
        "url": "https://mhraproductsproduction.blob.core.windows.net/docs/a1744b861fbda647f286cc70865d30cf2673c077",
    }) 
})

test("Snapshot input handler", ()=>{
    expect(inputHandler("PL136060206")).toMatchSnapshot();
})


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

// test("Test function works", ()=>{
    
// })



// describe("Input handler", () => {
//     test("returns true when product exists", () => {
//       expect(inputHandler("PL001730050")).toBe(true)
//     }),
//       test("returns false when product doesn't exist", () => {
//         expect(inputHandler("PL001730050")).toBe(false)
//       })
//   })
