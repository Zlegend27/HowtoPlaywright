import {test as base} from '@playwright/test'         // This must be typed
import { HomePage } from '../pages/HomePage'          // This line should appear automatically


// POM Type-Setting 
type pageObjectModels = {
    homePage: HomePage
}


export const test = base.extend<pageObjectModels>({
    homePage: async({page}, use) => {
        const homePage = new HomePage(page)
        // Anything put here will be executed like it is a before each hook
        await page.goto('')
        // The following line is where the test executes 
        await use(homePage)
        // Anything put here will be executed like it is an after each hook

    }
})

export {expect} from '@playwright/test'                // This must be typed