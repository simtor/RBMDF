const inputHandler = require("./index.js")

test("Test function works", ()=>{
    expect(inputHandler("PL001730050").toBe(
        'name: Ibugel gel',
        'dose: 10mg',
        'Substance: Ibuprofen',
        'url: https://mhraproductsproduction.blob.core.windows.net/docs/54454db7a69e9153ab7302232cdb8ee9230579ca',
        'You Product has been found PL001730050',
    ))
})

// describe("Input handler", () => {
//     test("returns true when product exists", () => {
//       expect(inputHandler("PL001730050")).toBe(true)
//     }),
//       test("returns false when product doesn't exist", () => {
//         expect(inputHandler("PL001730050")).toBe(false)
//       })
//   })