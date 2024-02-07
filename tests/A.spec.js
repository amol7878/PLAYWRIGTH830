const {test,expect} = require('@playwright/test')

test('Handle js Simple Alert with playwright',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog',async )
})