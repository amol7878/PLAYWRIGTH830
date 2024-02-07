// beforeEach ===> Runs Before every Test Block
// Aftereach ====> Runs  After Every Test Block
// beforeAll ====> Runs only 1 Time Before All Test Block
// AfterAll ====> Runs only 1 Time Aftere All Test Block

const { test, expect } = require('@playwright/test')
let page

// test.beforeEach(async({browser})=>{
//   page = await browser.newPage()
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//   await page.locator('input[name="username"]').fill('Admin')
//   await page.locator('input[name="password"]').fill('admin123')
//   await page.locator('button[type="submit"]').click()
// })

// test.afterEach(async()=>{
//     await page.locator('p[class="oxd-userdropdown-name"]').click()
//     await page.locator('a[href="/web/index.php/auth/logout"]').click()
//     await page.waitForTimeout(5000)
//     // await console.log('I am from AfterEach')
// })

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('input[name="username"]').fill('Admin')
  await page.locator('input[name="password"]').fill('admin123')
  await page.locator('button[type="submit"]').click()
})

test.afterAll(async ({ browser }) => {
  page = await browser.newPage()
  await page.locator('.oxd-userdropdown-name').click()
  await page.locator('[href="/web/index.php/auth/logout"]').click()
  await page.waitForTimeout(3000)

})

test('Verify the login functionality with valid credentials', async () => {
  await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
  await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
  await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
})

test('Verify the login functionality with invalid credentials', async () => {
  await page.locator('.oxd-alert-content-text').toBeVisible()
  await page.locator('.oxd-alert-content-text').toHaveText('Invalid credentials')
  // await expect(page).toHaveTitle('OrangeHRM')
  // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})