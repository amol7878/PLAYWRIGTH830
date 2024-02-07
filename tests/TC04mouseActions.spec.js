const { test, expect } = require('@playwright/test')

// Mouse Actions
// click()
// dblclick()
// hover ()
// right click()


test("Verify the dblclick Actions", async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await page.pause()

})

test('Verify the mouse right click Action', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons")
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await page.pause()

})

test.only('Verify the mouse hover Action',async({page})=>{
    await page.goto('https://demoqa.com/menu')

    await page.getByText('Main Item 2').hover()
    await page.getByText('SUB SUB LIST »').hover()
    await page.getByText('Sub Sub Item 2').click()
    await expect(page).toHaveURL('https://demoqa.com/menu#')
    await page.pause()
})


