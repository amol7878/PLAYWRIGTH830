const {test,expect} = require ('@playwright/test')
const assert = require ('assert')


test('all children Element',async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let elementCount = await page.$$('.traversal-drinks-list > *')
    expect(elementCount.length).toBe(5)
})

test("Traverse Using children1",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let tottalItemcount = await page.$$eval('.traversal-buttons > input',(items)=>{
        return items.length
    })
    expect(tottalItemcount).toBe(3)
})



test("Traverse Using children",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    //'.traversal-buttons > input ===>css Selector

    let tottalItemcount = await page.$$eval('.traversal-buttons > input',(items)=>{
        return items.length
    })
    expect(tottalItemcount).toBe(3)
})

//first(),last(),eq()
//.btn-group-toggle>button:nth-child(2)  //2nd  child
//.btn-group-toggle>button:first-child
//.btn-group-toggle>button:last-child 


test("Traverse Using first",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let FirstElementtext = await page.$eval('.btn-group-toggle>button:first-child',(firstE)=>{
        return firstE.textContent
    })
    expect(FirstElementtext).toContain('Button-1')
})


test("Traverse Using last",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let LastElementtext = await page.$eval('.btn-group-toggle>button:last-child',(lastE)=>{
        return lastE.textContent
    })
    expect(LastElementtext).toContain('Button-4')
})

test("Traverse Using Second Element",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let SecondElementtext = await page.$eval('.btn-group-toggle>button:nth-child(2)',(secondE)=>{
        return secondE.textContent
    })
    expect(SecondElementtext).toContain('Button-2')
})


test.only("Element By Index",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let ListE = await page.$$eval('.btn-group-toggle>button',(elemnets)=>{
        //Array
        return elemnets.map(function(el){
            return el.textContent
        })
    })
    //
    //['Button-1','Button-2','Button-3','Button-4']
    expect('Button-3').toBe(ListE[ListE.length-2])
})