# RedKite Playwright Task

## 📋 Project Description
This repository contains Playwright-based automated tests for the Redkite website. The tests ensure the functionality of the Contact Form, including:

1.  Navigating to the “About Us” page. 
2. Filling out and verifying the contact form fields.  /_without submitting_
3. Uploading a file as part of the contact form.
4. Checking the checkbox functionality. 

## 🛠 Prerequisites
Before using this repository, ensure you have the following installed on your system:
1. Node.js (version 16 or higher)
2. Playwright installed globally or in your project.

## 🧪 Tests

Test Cases:
1. Navigate to “About Us” Page  •  Verifies the URL is correct after navigation.
2. Fill Contact Form • Fills out all the fields of the contact form, uploads a file, and verifies the entered details.

## 🚀 How to Run the Tests
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:
```bash
npm install
npx playwright install
```
4. Run the following command to execute the tests:
```bash
npx playwright test --headed
```
