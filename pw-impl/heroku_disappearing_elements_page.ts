import { homepage_actions } from "../operations/heroku_home_page_operations";
import { expect, Locator, Page } from '@playwright/test';
import { ConfigFactory } from "../utilities/config_factory";
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
        this.exampleLocator = this.page.getByRole("link");
        this.goToHomePage();
    }

    private async goToHomePage(){
        await this.page.goto(this.url);
    }
    goToExample: (name: string) => Promise<void>;
    
    async getTitle(){ 
        return this.headingLocator.textContent();
        
    }
    async getSubTitle(){
        return this.subHeadingLocator.textContent();
    }
    async getExamples() {

        console.log(this.page.title);
        console.log(await this.getSubTitle())
        //await this.page.waitForSelector("#content > ul > li:nth-child(1) > a");
        const examples =  await this.exampleLocator.allInnerTexts();
        await this.page.waitForSelector("a");
        //const examples = await this.page.locator("a").allInnerTexts();
        console.table(examples);
        //return await exampleLinks.allInnerTexts();
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