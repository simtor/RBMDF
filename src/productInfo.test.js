const productInfo = require("./productInfo.js")
const products = require("./medicineInfo.js")

jest.mock("./medicineInfo.js")


test("PL001730050", ()=>{
    expect(productInfo("PL001730050")).toBe(true)
    expect(productInfo("PL001730050")).toMatchSnapshot();
})

test("PL001655013", ()=>{
    expect(productInfo("PL001655013")).toBe(true);
    expect(productInfo("PL001655013")).toMatchSnapshot();
})

test("PL136060206", ()=>{
    expect(productInfo("PL136060206")).toBe(true);
    expect(productInfo("PL136060206")).toMatchSnapshot();
})


test("PL252980158", ()=>{
    expect(productInfo("PL252980158")).toBe(true);
    expect(productInfo("PL252980158")).toMatchSnapshot();
})

test("PL201170079", ()=>{
    expect(productInfo("PL201170079")).toBe(true);
    expect(productInfo("PL201170079")).toMatchSnapshot();
})
