const { test, expect } = require('@playwright/test');

test('has Title', async ({ page }) => {
   await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")

   // find the single element

   let singleElement = await page.locator('h2[name="contactme"]')
   await expect(singleElement).not.toBeNull()
   await expect(singleElement).toBeVisible()
   await expect(singleElement).toHaveCount(1)

   // find multiple element

   let multipleElements = await page.$$('input[type="text"]')
   await expect(multipleElements.length).toBe(3);

   let multipleElement = await page.locator('input[type="text"]').count()
   await expect(multipleElement).toEqual(3)
   await expect(multipleElement).toBe(3)


   let multipleElement1 = await page.locator('input[type="text"]')
   await expect(multipleElement1).toHaveCount(3);


   // find element by class name 

   let multipleElementByClassName = await page.locator('.text-center').count()
   await expect(multipleElementByClassName).toBe(2);
   await expect(multipleElementByClassName).toEqual(2);


   let multipleElementByClassName1 = await page.locator('.text-center')
   await expect(multipleElementByClassName1).toHaveCount(2)


   // find element by id 

   //#contact_form

   let elementById = await page.locator('#contact_form')
   await expect(elementById).not.toBeNull()

   let elementById1 = await page.locator('#contact_form')
   await expect(elementById1).toBeVisible()
   await expect(elementById1).toHaveCount(1)

   // find element by css selector
   // tagName[atribute ="value"]

   let elementBycssSelector = await page.$('input[name="first_name"]')
   await expect(elementBycssSelector).not.toBeNull()

   
   let elementBycssSelector1 = await page.locator('input[name="first_name"]')
   await expect(elementBycssSelector).toBeVisible()

   //getByAlttext
   //getByLabel
   //getByPalceholde
   //getByRole
   //getByTestId
   //getByText
   //getByTitle

   










})