const { test, expect } = require("@playwright/test")

const assert = require('assert')

test("click on the element ", async ({ page }) => {
   await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
   await page.fill('[name="first_name"]', "AMOL")
   await page.fill('[name="last_name"]', "Shinde")
   await page.fill('[name="email"]', "amol1234@gmial.com")
   await page.fill('[name="message"]', "I am Learning Js")
   await page.click('[type="submit"]')//click()

   await page.waitForSelector('h1')


})

test("Typing into the input element ", async ({ page }) => {
   await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
   await page.fill('[name="first_name"]', "AMOL")
   await page.fill('[name="last_name"]', "Shinde")
   await page.fill('[name="email"]', "amol1234@gmial.com")
   await page.fill('[name="message"]', "I am Learning Js")
   // await page.click('[type="submit"]')//click()
   let r = await page.$('[type="submit"]')
   r.click()
   await page.waitForSelector('h1')


})


test("clearing the input field",async({page})=>{
// await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
// await page.fill('[name="first_name"]','Amol')
// await page.fill('[name="first_name"]','')
await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
await page.fill('[name="first_name"]','Amol')
await page.click('[type="reset"]')
//let text ='' //expected
let expectText =await page.$eval('[name="first_name"]',x=>x.value)
expect(expectText).toBe('')

})

test("Getting the Attriburte Value",async({page})=>{
   // await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
   //getAttribute('id)
   //getAttribute('id)
 })


 test.only("Getting the text value of element",async({page})=>{
  await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
  let textContenVal = await page.$eval('h1',(el)=>el.textContent)
  assert.strictEqual(textContenVal,"Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
   
 })

 test("Verify the element enabled",async({page})=>{
  


 })

 test("Verify element selected",async({page})=>{
  


 })
 
 test("Verify element isDisplayed",async({page})=>{
  


 })

