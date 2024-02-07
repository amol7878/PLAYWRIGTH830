const { test, expect } = require('@playwright/test')

test('Handle Js Simple Alert With PlayWright', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()

        //  await console.log(simpleAlert.message())
        //  await console.log(simpleAlert.type())
    })

    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(5000)
})

test("Handle Confirm Alert With Playwright", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert => {
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        //await confirmAlert.accept()
        await confirmAlert.dismiss()
        // await console.log(confirmAlert.message())
        // await console.log(confirmAlert.type())
    })
    await page.locator('button[onclick="jsConfirm()"]').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

})

test.only('Handle Prompt Alert with Playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async PromptAlert => {
        await expect(PromptAlert.message()).toContain('I am a JS prompt')
        await expect(PromptAlert.type()).toContain('prompt')
        //await PromptAlert.accept('Amol')
        await PromptAlert.dismiss()
        //   console.log(PromptAlert.message());
        //   console.log(PromptAlert.type())
    })
    await page.locator('button[onclick="jsPrompt()"]').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Amol')
    await expect(page.locator('#result')).toHaveText('You entered: null')
})