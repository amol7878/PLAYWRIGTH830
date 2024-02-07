const {test,expect} = require ('@playwright/test')
const assert = require ('assert')


test("all children element ",async({page})=>{
    //Arrangmnet
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    //Action
    let elementcount= await page.$$('.traversal-drinks-list > *')
    //Assertion
    expect(elementcount.length).toBe(5)

})


test("finding the Previous elemnt Sibling ",async({page})=>{
    //Arrangmnet
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    //Action

    //let elementcount= await page.$('#milk')
    let preEtext=await page.$eval('#milk',(element)=>{
        return element.previousElementSibling.textContent.trim();// Trim()
    })
    //Assertion
    expect(preEtext).toBe('Tea')

})

test("finding the next element Sibling",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let NextText = await page.$eval('#milk',(element)=>{
       return element.nextElementSibling.textContent.trim()
    })
    expect(NextText).toBe('Espresso')

})

test("finding NextAll element sibling",async({page})=>{
 await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
 let NextSibling = await page.$$("#coffee~*")
 expect(NextSibling.length).toBeGreaterThan(2)

})


test.only("finding PreviousAll element sibling",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let allprevious = await page.$$("#sugar ~ *")
    expect(allprevious.length).toBe(4)
   
   })