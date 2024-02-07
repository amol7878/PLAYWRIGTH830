const { test, expect } = require('@playwright/test')

test("Verify dynamic dropdown", async ({ page }) => {
    await page.goto("https://www.redbus.in/")
    await page.locator('#src').fill('pune', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    // console.log(optionCount)
    for (let i = 0; i < optionCount; i++) {
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)//Pune ,Pune University,Swargate,Sangamwadi
        if (resultText == "Nigdi") {
            await page.locator(".placeHolderMainText").nth(i).click()
            break
        }

    }
    await page.waitForTimeout(5000)

    //destination
    await page.locator('#dest').fill('Mumbai',{delay:1000})
    await page.waitForTimeout(5000)
    await page.waitForSelector('.placeHolderMainText')
    const desOptotionCount =await page.locator('.placeHolderMainText').count()
    console.log(desOptotionCount)
    for(let i=0;i<desOptotionCount;i++){
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        //console.log(resultText)
        if(resultText == 'Navi Mumbai'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }

    }

    await page.pause()
})