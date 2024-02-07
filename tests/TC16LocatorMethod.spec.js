const { test, except, expect } = require('@playwright/test');

//getByAltText
//getByLabel
//getByPlaceHolder
//GetByRole
//getByTestId
//getByText
//getByTitle


test('Get element by getByAltText in Playeright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText("letcode")
    await expect(ele).toBeVisible()
})


test('Get element by getByLabel in Playeright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele1 = await page.getByLabel("main navigation")
    await expect(ele1).toBeVisible()
})

test('Get element by getByPlaceHolde in Playeright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder("First Name").fill("Mahesh")

})

test('Get element by getByRole in Playeright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    await page.getByRole("checkbox",{name:' I agree to the '}).check()
    await page.waitForTimeout(4000)

})

test('Get element by getByText in Playeright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    await expect(page.getByText(' Radio & Checkbox')).toBeVisible()
    await page.getByText("Sign up").click()
    await page.waitForTimeout(4000)

})

test('Get element by getByTitle in Playeright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    let ele2 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele2).toBeVisible()
    await expect(ele2).toHaveText(' Koushik Chatterjee ')
    await page.waitForTimeout(4000)

})

test.only('Get element by getByTestId in Playeright', async ({ page }) => {
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await page.waitForTimeout(4000)

})


