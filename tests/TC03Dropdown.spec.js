// Static Dropdown
const {test} = require('@playwright/test')

test('Verify The Static Dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await page.locator('#superheros').selectOption('ta')
    await page.locator('#lang').selectOption('swift')
    await page.pause()
})


// Dynamic Dropdown / Auto Suggetion dropdown

test.only('Verify The Dynamic Dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    const optionCount =await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    for(let i=0;i<optionCount;i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'Nashik Phata'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    //let text = await page.locator('.placeHolderMainText').allTextContents()
    //console.log(text)
    
    await page.pause()
})
