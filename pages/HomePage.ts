import { Locator, Page } from "@playwright/test"



export class HomePage{
    // Type Setting/Decleration (This is only for TypeScript)
    readonly page: Page             // This Typing helps to give the page its own unique context when used in the constructor
                                            // (meaning it will be able to reference only itself)
    readonly header: Locator        // Basic webpage element of your choice; 


    // Constructor / Variable - Locator Assignment 
    constructor(page: Page){        // This is where you give the page its own unique context
        this.header = page.locator('.hero__title')    // This is where you tell playwright how to locate the chosen element
    }

    // Methods (if used)
    
}