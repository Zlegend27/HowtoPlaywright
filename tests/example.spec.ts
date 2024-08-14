import {expect, test} from "../fixtures/pom_fixture" // Can also import after typing 'test' below

test.describe('Home Page', () => {
  // Any hooks go here

    test('Header validation', async({homePage}) => {
      await expect(homePage.header).toHaveText('Playwright enables reliable end-to-end testing for modern web apps.')
    })
})
