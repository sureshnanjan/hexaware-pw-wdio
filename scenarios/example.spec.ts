import { test, expect } from '@playwright/test';
import { BrowserstackHomePage } from '../pw-impl/homepage';


test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Some Operation", async ({page})=>{
  const url = "https://www.browserstack.com/";
  const browserstackLogo = page.locator('#logo');
  const productsMenu = page.locator('#products-dd-toggle');
  const productmenudropdown = page.locator('#product-menu-dropdown >div > ul >li >a >div[class="dropdown-link-heading"]');
  await page.goto(url);  
  await productsMenu.waitFor({state:"visible"});
  await productsMenu.click();
});

test("Another Operation", async ({page})=>{
  const bsPage = new BrowserstackHomePage(page);
  bsPage.goto();
  bsPage.clickOnProducts();
  // AAA
  // DRY - Dont Repeat Yourself
  // SOLID - Princples Single Repsonsi
  // Arrange 
  // Act
  // Assert - Only one things in a test - Single Responsibility Principle

});

test("Frok Me shows proper status", async () =>{
  // launch the Home Page
  // Click on Form me


});
test("Frok Me updates status report database", async () =>{
  // launch the Home Page
  // Click on Form me


});
test("Checking WDIO integration", async () =>{
  
// launch the Home Page
  // Click on Form me

});

test('Visual Validation with Paywright', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});



