const {expect} = require('@playwright/test')
//const data = require('../tests/TestData/ContactUsData.json')
const{customText} =require('../tests/TestData/Data')


// data.forEach(element=>{

//     test(`Verify contact us functionality with multiple dataset for ${element.FirstName}`,async({page})=>{
//         await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
//         await page.locator('input[placeholder="First Name"]').fill(element.FirstName)
//         await page.locator('input[placeholder="Last Name"]').fill(element.LastName)
//         await page.locator('input[placeholder="Email Address"]').fill(element.Email)
//         await page.locator('textarea[placeholder="Comments"]').fill(element.Msg)
//         await page.locator('input[type="submit"]').click()
//         await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
      
//       })


// })


customText.only('Verify contact uS fuctionality with Multiple dataset for',async({page,testDataForContactUs})=>{
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
  await page.locator('input[placeholder="First Name"]').fill(testDataForContactUs.FirstName)
  await page.locator('input[placeholder="Last Name"]').fill(testDataForContactUs.LastName)
  await page.locator('input[placeholder="Email Address"]').fill(testDataForContactUs.Email)
  await page.locator('textarea[placeholder="Comments"]').fill(testDataForContactUs.Msg)
  await page.locator('input[type="submit"]').click()
  await expect(page.locator('h1')).toHaveText('Thank You for your Message!')

  
})

// let info={
//     FirstName:"Amol",
//     LastName:"Shinde",
//     email:"amol@gmail.com",
//     Msg:"I am Learning Playwright"
// }

// console.log(info.msg)