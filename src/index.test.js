const inputHandler = require("./index.js")

test("Test function works", ()=>{
    expect(inputHandler("PL001730050").toBe(3
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