import {  Locator, Page } from '@playwright/test';
import { add_remove_actions } from '../operations/add_remove-operations';
export class AddRemoveElements implements add_remove_actions{
    readonly page: Page;
    readonly url: string;
    readonly headingLocator: Locator;
    readonly subHeadingLocator: Locator;
    readonly addElementLocator: Locator;
    readonly addedElementsLocator: Locator;
    /**
     *
     */
    constructor(page : Page) {
        this.page = page;
        this.url = "https://the-internet.herokuapp.com/add_remove_elements/"; 
        this.headingLocator = this.page.getByRole("heading").first();
        this.subHeadingLocator = this.page.getByRole("heading").last();
        this.addElementLocator = this.page.getByRole("button", {name:'Add Element'});
        this.addedElementsLocator = this.page.getByRole("button", {name:'Delete'});
        
    }
    async removeElement(position?: number | undefined) {
        await this.page.waitForURL(this.url);

        if (position) {
            (await this.addedElementsLocator.all()).at(position)?.click();
        }
        else{
            await this.addedElementsLocator.click();
        }
    };
    async addElement(){
        await this.addElementLocator.click();
    };
    
    async getAddedElements(){
        await this.page.waitForURL(this.page.url());
        const examples = await this.addedElementsLocator.allTextContents();
        console.table(examples);
        return examples;
        
    };
<<<<<<< HEAD

    async selectDropdown(){

    };
    
=======
>>>>>>> c666585 (update with suresh changes)
}