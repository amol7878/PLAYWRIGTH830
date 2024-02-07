const {test,expect} =require('@playwright/test')

test('Handling The Radio Buttons',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await page.locator('#vfb-7-1').not.toBeChecked()
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await page.pause()
})

test('Handling The Checkbox',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
    await page.pause()
})

test('Handling The Checkbox With Click Method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').click()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
    await page.pause()
})

test.only('Handling The Radio Buttons With Click Method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await page.locator('#vfb-7-1').not.toBeChecked()
    await page.locator('#vfb-7-1').click()
    await expect(page.locator('#vfb-7-1')).toBeChecked
    await page.pause()
})