import { test, expect } from "@playwright/test";

test.describe('First test suite', () => {


    test('Refresh, navigate back and forward in Playwright', async ({ page }) => {

        // Navigate to a page
        await page.goto('https://playwright.dev/');

        // Refresh the Page
        await page.reload();

        // Navigate back
        await page.goBack();

        // Navigate forward()
        await page.goForward();
    }); 


    test('Validate page Title', async ({ page }) => {
        await page.goto('https://playwright.dev/')

        const title = await page.title() 

        // 1st way to assert Title
        expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright')

        // 2nd way to assert Title with assertion
        await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
    }) 

    // Youll find a failure on firefox's title it is different then chrome


    test('Validate page URL', async ({ page }) => {
        await page.goto('https://playwright.dev/')

        // way to assert URL 
        await expect(page).toHaveURL('https://playwright.dev/')
    })  

    test('validate search bar', async ({ page }) => {

        await page.goto('https://playwright.dev/')

        const searchBar = page.locator('.DocSearch-Button-Placeholder') 

        await searchBar.click()  

        const searchDocs = page.locator('.DocSearch-Input')

        await expect(searchDocs).toBeVisible()
    })

        test('click on logo', async ({ page }) => {

        await page.goto('https://playwright.dev/')

        // await page.click('.themedComponent_mlkZ') 

        const myLogo = page.locator('.themedComponent_mlkZ') 

       

        await myLogo.click() 

        await expect(myLogo).toBeVisible()
    })
}) 

