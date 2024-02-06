import { homepage_actions } from "../operations/heroku_home_page_operations";
import { heroku_home_page } from "../pw-impl/heroku_home_page";
import { test, expect } from '@playwright/test';

test("Home Page Title",async ({page}) => {
    // Navigate to 
    let actions:homepage_actions = new heroku_home_page();
    const expectedTitle = ""
    const actualTitle = actions.getTitle();
});