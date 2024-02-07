const { test, expect } = require('@playwright/test')

test('Handling Keyboard Actions Using Playwright', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')
    await page.keyboard.down('PageDown')
    await page.locator('textarea[name="text1"]').fill('I am Learning Playwright')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    //F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, Equal, Backslash, Backspace, 
    //Tab, Delete, Escape, ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight, ArrowUp
    //await page.locator('[name="text1"]').click()
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(4000)
})