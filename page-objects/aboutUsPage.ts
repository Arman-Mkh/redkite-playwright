import { Page, expect } from '@playwright/test'

export class AboutUsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async fillContactFormOnAboutUsPage(firstname: string, lastName: string, contactNumber: string, email: string, companyName: string, checkbox: boolean, filePath: string) {
    await this.page.locator('input#firstName').fill(firstname)
    await this.page.locator('input#lastName').fill(lastName)
    await this.page.locator('input#contactNumber').fill(contactNumber)
    await this.page.locator('input#email').fill(email)
    await this.page.locator('input#companyName').fill(companyName)
    if (checkbox) {
        await this.page.locator('label[for="html"]').click()
    }

    await this.page.locator('input[type="file"]').setInputFiles(filePath)
    
  }

  async verifyContactFormFields(details: {
    firstName: string
    lastName: string
    contactNumber: string
    email: string
    companyName: string
    checkbox: boolean
    filePath: string
  }) 

  {
    await expect(this.page.locator('input#firstName')).toHaveValue(details.firstName)
    await expect(this.page.locator('input#lastName')).toHaveValue(details.lastName)
    await expect(this.page.locator('input#contactNumber')).toHaveValue(details.contactNumber)
    await expect(this.page.locator('input#email')).toHaveValue(details.email)
    await expect(this.page.locator('input#companyName')).toHaveValue(details.companyName)

    if (details.checkbox) {
      await expect.poll(async () => {
        return await this.page.locator('input[type="checkbox"]').isChecked()}).toBeTruthy()
    }

    const uploadedFileName = await this.page.locator('.ContactUs_fileName__3tR_G').textContent()
    expect(uploadedFileName?.trim()).toBe('sample.pdf')

  }
  
}  
  
    