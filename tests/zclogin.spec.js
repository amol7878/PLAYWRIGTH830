const { test, expect } = require('@playwright/test');

test("Verify login function with valid credentials",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/index.html")
    await  page.locator("input[id ='user-name']").fill('standard_user')
    await  page.locator("input[id ='password']").fill('secret_sauce')
    await page.locator('#login-button').click()

})