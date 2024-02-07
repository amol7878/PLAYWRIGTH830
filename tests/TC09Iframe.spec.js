const { test, expect } = require('@playwright/test')

// 1 st Way By .frameLocator

test('Handling the Iframe Using Playwright', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    //await page.locator('input[placeholder="Enter name"]').fill('Amol')
    const UserNameField = await page.frameLocator('#firstFr').locator('input[placeholder="Enter name"]')
    await UserNameField.fill('Amol')
    await expect(UserNameField).toBeVisible()
    await page.waitForTimeout(4000)

})

// 2nd  Way by .frame by name attribute

test('2nd Way handling the Iframe By Playwright', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    const frame = await page.frame('firstFr')
    await frame.locator('input[placeholder="Enter name"]').fill('Minskole')
    await expect(frame.locator('input[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

// 3rd way by .frame by url

test.only('3rd Way handling the Iframe By Playwright', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    const frame = await page.frame({ url: "https://letcode.in/frameUI" })
    await frame.locator('input[placeholder="Enter name"]').fill('Minskole')
    await expect(frame.locator('input[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(2000)

})