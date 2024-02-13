import { homepage_actions } from "../operations/heroku_home_page_operations";
import { add_remove_actions } from "../operations/add_remove-operations";
import { heroku_home_page } from "../pw-impl/heroku_home_page";
import { test, expect } from '@playwright/test';
<<<<<<< HEAD
import { HerokuAppPages } from "../operations/heroku_app_type";
=======
>>>>>>> 922fa11 (update all scenarios)

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

<<<<<<< HEAD
test.skip("Home Page Title", async ({page}) => {
=======
test.only("Home Page Title", async ({page}) => {
>>>>>>> 922fa11 (update all scenarios)
       
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

test.skip("44 Examples on Home Page Check", async ({page})=>{
    const expected = 44;
    const actual = (await homePage.getExamples()).length;
    expect(actual).toEqual(expected);
});

<<<<<<< HEAD
test.skip("Adding new elements work", async ({page})=>{
    const expected = 1; // Arrange
    const appPage = (await homePage.goToExample(HerokuAppPages.add_remove)) as add_remove_actions;
    await appPage.addElement(); // Action
    // Assert
    const actual = (await appPage.getAddedElements()).length;
    expect(actual).toEqual(expected);
});


test.only("Removing elements work" , async ({page})=>{
    /// AAA
    const expected = 0;
    const appPage = (await homePage.goToExample(HerokuAppPages.add_remove)) as add_remove_actions
    await appPage.addElement(); // There will be 1 element in our page
    // Actions
    await appPage.removeElement();

    // Assertion
    const actual = (await appPage.getAddedElements()).length;
    expect(actual).toEqual(expected);
});


test("Check Removing items work",()=>{

    //homePage.goToExample(HerokuAppPages.context_menu) as context_page_action
});

test("Check drop down operation", ()=>{
    await page.getByRole('link', { name: 'Completed' }).click();

});



=======
>>>>>>> 922fa11 (update all scenarios)
