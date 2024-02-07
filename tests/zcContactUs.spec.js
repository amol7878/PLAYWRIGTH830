const { test, expect } = require('@playwright/test')

//Action

test("Verify The ContactUs form With Valid data", async ({ page }) => {
    //Arrangment
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //Action

    await page.locator('input[name="first_name"]').fill("Amol")
    await page.locator('input[name="last_name"]').fill("Shinde")
    await page.locator('input[name="email"]').fill("amol@gmail.com")
    await page.locator('textarea[name="message"]').fill('I am Learning Js')
    await page.locator('input[type="submit"]').click()

    //Assertion

    await page.waitForTimeout(2000)
    let avail = await page.locator('h1').isVisible()
    expect(avail).toBeTruthy()

})


test("Verify The ContactUs form With Valid data and reset form", async ({ page }) => {
    //Arrangment
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //Action

    await page.locator('input[name="first_name"]').fill("Amol")
    await page.locator('input[name="last_name"]').fill("Shinde")
    await page.locator('input[name="email"]').fill("amol@gmail.com")
    await page.locator('textarea[name="message"]').fill('I am Learning Js')
    await page.locator('input[type="reset"]').click()

    //Assertion
    let text = await page.locator('input[name="first_name"]').innerText()
    expect(text).toBe("")


})

test.only("Verify The ContactUs form With Valid data and email wrong  form", async ({ page }) => {
    //Arrangment
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //Action

    await page.locator('input[name="first_name"]').fill("Amol")
    await page.locator('input[name="last_name"]').fill("Shinde")
    await page.locator('input[name="email"]').fill("amolgmail.com")
    await page.locator('textarea[name="message"]').fill('I am Learning Js')
    await page.locator('input[type="submit"]').click()

    //Assertion
    let text1 = await page.locator('body').innerText()
    expect(text1).toContain("Error: Invalid email address")




})



