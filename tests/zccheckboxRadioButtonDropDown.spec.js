const { test, expect } = require('@playwright/test')
const assert = require('assert')

test.only('Drop Down', async ({ page }) => {
    //Arrangment
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //Actions
    await page.selectOption('#dropdowm-menu-1', 'Python')
    //Assertion
    const actualValue = await page.$eval("#dropdowm-menu-1", (el) => el.value)
    assert.strictEqual(actualValue, 'python')

    await page.selectOption('#dropdowm-menu-2', 'Maven')
    const actualValue2 = await page.$eval("#dropdowm-menu-2", (el) => el.value)
    assert.strictEqual(actualValue2, 'maven')

    //<h1>Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)</h1>
    const textcontentVal = await page.$eval('h1',(el)=>el.textContent())
    assert.strictEqual(textcontentVal,'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')

})

test('Check Box',async({page})=>{
  await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
  await page.check('input[value="option-2"]')
  await page.uncheck('input[value="option-3"]')
  const avail = await page.$eval('input[value="option-2"]',(el)=>el.checked)
  const availb= await page.$eval('input[value="option-3"]',(el)=>el.checked)
  assert.strictEqual(avail,true)
  assert.strictEqual(availb,false)
})

test("Radio button",async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
await page.check('input[value="green"]')
let availc= await page.$eval('input[value="green"]',(el)=>el.checked)
assert.strictEqual(availc,true)
let availd= await page.$eval('input[value="blue"]',(el)=>el.checked)
assert.strictEqual(availd,false)
})