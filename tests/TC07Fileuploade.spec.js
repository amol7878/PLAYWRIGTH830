const { test, expect } = require('@playwright/test')

test('Verify the Single fileUplade in Playwrifght', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadeFiles/FileUploade1.docx')
    page.on('dialog', async SimpleAlert => {
        await expect(SimpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(SimpleAlert.type()).toContain('alert')
        await SimpleAlert.accept()
    })

    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUploade1.docx')
})

test.only('Verify Multiple fileUploade in playwright', async ({ page }) => {
    const file1 = 'tests/UploadeFiles/FileUploade1.docx'
    const file2 = 'tests/UploadeFiles/FileUploade2.docx'
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    // await page.locator('#filesToUpload').setInputFiles(['tests\UploadeFiles\FileUploade1.docx', 'tests\UploadeFiles\FileUploade2.docx'])
    await page.locator('#filesToUpload').setInputFiles([file1, file2])
    await expect(page.locator('#fileList >li').first()).toHaveText('FileUploade1.docx')
    await expect(page.locator('#fileList >li').nth(1)).toHaveText('FileUploade2.docx')

})    