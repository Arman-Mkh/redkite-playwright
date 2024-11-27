import {test, expect} from '@playwright/test'
import {AboutUsPage} from '../page-objects/aboutusPage'
import {redkiteHomePage} from '../page-objects/redkitehomePage'
import path from 'path'


test.beforeEach(async({page}) => {
    await page.goto('https://redkite.io/en')
    const navigation = new redkiteHomePage(page)
    await navigation.navigateToTheAboutusPage()
    
})

test('navigateToTheAboutUsPageAndVerifyTheLink', async({page}) => {
    await expect(page).toHaveURL('https://redkite.io/en/about')
    
})

test('fillAllContactFormAndVerifyEnteretDetails', async({page}) => {
    const fillingTheForm = new AboutUsPage(page)
    const details = {
        firstName: 'Test',
        lastName: 'Testikyan',
        contactNumber: '37498000000',
        email: 'testikyan@test.com',
        companyName: 'RedKite',
        checkbox: true,
        

    }
    const filePath = path.join(__dirname, '../test-data/sample.pdf')
    await fillingTheForm.fillContactFormOnAboutUsPage(
        details.firstName,
        details.lastName,
        details.contactNumber,
        details.email,
        details.companyName,
        details.checkbox,
        filePath
    )

    await fillingTheForm.verifyContactFormFields({ ...details, filePath })

  })




