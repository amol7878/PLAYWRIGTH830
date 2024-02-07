const { test, expect } = require('@playwright/test')
test("Verify DatePicker Using Playwright",async({page})=>{
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")
    await page.locator("#datepicker").click()
    const date=new Date()
    //let day = date.getDate()
    //console.log(day)
     date.setDate(date.getDate()+200)
//   let month = date.toLocaleString('default',{month:'short'})
    let day = date.getDate()//Current date
    let monthIndex =date.getMonth() //Index Value Of current Month
    let month = date.toLocaleString('default',{month:'long'})//current Month in String
    let year =date.getFullYear()//current Year
    //console.log(monthIndex)
    //console.log(month)
    console.log(day)
    // console.log(year)
    const daystr=`${day} ${month} ${year}`
    console.log(daystr)
    const my=`${month} ${year}`
    //console.log(my)

    while(true){
        const currentMonthYear =await page.locator('[class="datepicker-switch"]').first().textContent()
        //console.log(currentMonthYear)
        if(currentMonthYear === my){
            break
        }
        await page.locator('[class="next"]').first().click()

    }
    const daycount =await page.locator('[class="day"]').count()
    for(let i=0;i<daycount;i++){
        let text =await page.locator('[class="day"]').nth(i).textContent()
        console.log(text)
        if(text==day){
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }

await page.waitForTimeout(4000)
})