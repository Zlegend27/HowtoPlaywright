import { test, chromium } from "@playwright/test"; // only importing chromium for example #4

// #1
// This will trigger the test runner
test('Playwright 101 - Test Case', () => {

    // provide test to be executed
});


// #2
// Test runner will trigger the browser context
// using the { page } fixture
test('Playwright 101 - Test Case 2', ({ page }) => {

    // test to be executed
});


// #3
// Use 'async' to mark your function as Asynchronous
// meaning it might take some time to complete
test('Playwright 101 - Test Case 3', async ({ page }) => {

    // The 'await' keyword pauses function execution until a promise is resolved
    // ensuring code runs only after the Promise is fullfilled or rejected
    await page.goto('https://playwright.dev/');
}); 


// #4
// If your using a different runner with Playwright like Cucumber 
// Then you won't be using test functions or anything from the page fixture
// This means you must manually do set up and teardown for browser contexts 

(async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://playwright.dev/');

    await page.close();
});


test('Playwright 101 | Incognito example with browser fixture - Test Case 5', async ({ browser }) => {

    // Create a new incognito context
    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://playwright.dev/');

    await page.close();
}); 

