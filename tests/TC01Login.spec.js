const { test, expect } = require('@playwright/test')

test('Verify th eLogin functionality with valid Credentials',async({page})=>{
    // STEP 1 Navigate To The URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // STEP 2 Enter The User Name
    await page.locator('input[name="username"]').fill('Admin')
    //<input id="one" class="user">UserName</input>
    //tagname[att="Value"]
    //input[id="one"]
    // STEP 3 Enter The Password
    await page.locator('input[name="password"]').fill('admin123')
    // STEP 4 CLICK ON LOGIN BUTOON
    await page.locator('button[type="submit"]').click()
    // STEP 5 VALIDATION
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
    await page.pause()

})

test.only('Verify The Login Functionality With Invalid Credentials',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('Admin1234')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    await page.pause()
})