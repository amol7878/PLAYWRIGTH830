const base = require('@playwright/test')

exports.customText = base.test.extend(
    {

        testDataForContactUs: {
            FirstName: "Mahesh",
            LastName: "Aher",
            Email: "mahesh@gmail.com",
            Msg: "I Am Learning Playwright"

        }

    }
)