import { homepage_actions } from "../operations/heroku_home_page_operations";
import { add_remove_actions } from "../operations/add_remove-operations";
import { heroku_home_page } from "../pw-impl/heroku_home_page";
import { test, expect } from '@playwright/test';

function getLanguageString()
{
    // check the language setting
    // read the test data csv
    //return the correct language strung
    return "Welcome to the-internet";
}
let homePage: homepage_actions;
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    //await page.goto('https://my.start.url/');
    homePage = new heroku_home_page(page);
  });

test.skip("Home Page Title", async ({page}) => {
       
       /// AAA
       //const homePage: homepage_actions = new heroku_home_page(page);
       //const homePage: homepage_actions = new android_home_page();
       const expected = "Welcome to the-internet";
       const actual = await homePage.getTitle();
       expect(actual).toEqual(expected);

});

test.skip("Home Page Subtitle check",async ({page})=>{
    //const homePage: homepage_actions = new heroku_home_page(page);
       //const homePage: homepage_actions = new android_home_page();
       const expected = "Available Examples";
       const actual = await homePage.getSubTitle();
       expect(actual).toEqual(expected);
});

test.only("44 Examples on Home Page Check", async ({page})=>{
    const expected = 44;
    const actual = (await homePage.getExamples()).length;
    expect(actual).toEqual(expected);
});

