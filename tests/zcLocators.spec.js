const {test,expect} = require('@playwright/test')

test("Has Title",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // Find Single element 

    let singleElement= await page.$('h2[name="contactme"]')
    expect(singleElement).not.toBeNull()

    let singleElement2= await page.locator('h2[name="contactme"]')

    // Find the Multiple element

    let MultipleElement = await page.$$('input[type="text"]')
    expect(MultipleElement.length).toBe(3)

    // find element By className

    let MultipleElementbyclassName = await page.$$('.text-center')
    expect(MultipleElementbyclassName.length).toBe(2)

    // find Element BY ID

    //#contact_Form

    let elementbyId = await page.$('#contact_form')
    expect(elementbyId).not.toBeNull()

    //Find the Element by css Selector
    //tagName[Attrubute="Value"]
    let elementByCssSelector= await page.$('input[name="first_name"]')
    expect(elementByCssSelector).not.toBeNull()


    //find the element by Tag Name

    let text = await page.locator('h2').innerText()
    expect(text).toEqual('CONTACT US')

      //find the element by linkText


      //find the element by name


    })