import { homepage_actions } from "../operations/heroku_home_page_operations";
import {  Locator, Page } from '@playwright/test';
import { ConfigFactory } from "../utilities/config_factory";
import { HerokuAppType , HerokuAppPages} from "../operations/heroku_app_type";
import { AddRemoveElements } from "./add_remove_elements_page";
export class heroku_home_page implements homepage_actions {
    readonly url:string; 
    readonly page: Page;
    readonly headingLocator: Locator;
    readonly subHeadingLocator: Locator;
    readonly repositoryLocator:Locator
    readonly bannerLocator:Locator;
    readonly exampleLocator:Locator;
    constructor(pageParam) {
        this.page = pageParam;
        this.url = new ConfigFactory().getUrl();
        this.headingLocator = this.page.getByRole("heading").first();
        this.subHeadingLocator = this.page.getByRole("heading").last();
        this.bannerLocator = this.page.getByRole("link").filter({ hasText: 'Elemental Selenium' });
        //page.locator('li').filter({ hasText: /^Frames$/ })
        this.repositoryLocator = this.page.getByRole("link",{name:/Fork me on Github/i});
        this.exampleLocator = this.page.getByRole("listitem");
        this.goToHomePage();
    }

    private async goToHomePage(){
        await this.page.goto(this.url);
        await this.page.waitForLoadState('domcontentloaded');
        // this call is needed in order to avoid the error
        // Execution context was destroyed, most likely because of a navigation
        await this.page.waitForURL(this.url);
    }

    async goToExample(name: HerokuAppPages){
        console.log(name)
        await this.page.getByRole("link").and(this.page.getByText(name)).click();
        switch (name) {
            case HerokuAppPages.add_remove:
                return new AddRemoveElements(this.page);
            case HerokuAppPages.ab_testing:
           default:
                return this;
        }
    };
    
    async getTitle(){ 
        return this.headingLocator.textContent();
        
    }
    async getSubTitle(){
        return this.subHeadingLocator.textContent();
    }
    async getExamples() {
        //const examples = await this.page.getByRole('listitem').allTextContents();
        // this call is needed in order to avoid the error
        // Execution context was destroyed, most likely because of a navigation
        await this.page.waitForURL(this.url);
        const examples = await this.exampleLocator.allTextContents();
        console.table(examples);
        return examples;
    }
    async getRepo(){
        //this.page.locator("#content > ul > li:nth-child(1) > a").click();
        return "";};
    async getBanner(){return "";};
    
    private async clickLink(name:string) {
        await this.page.getByRole("link").filter({hasText:`${name}`}).click();
        return this.page.getByRole("heading").textContent;
    }
}