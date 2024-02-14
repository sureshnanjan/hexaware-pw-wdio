import { test, expect } from '@playwright/test';
// Request context is reused by all tests in the file.
let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: 'https://restful-booker.herokuapp.com'
  });
});

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});

test('Authentication Token is obtained', async ({ }) => {
  const authToken = await apiContext.post('/auth', {
    data: {
        "username" : "admin",
        "password" : "password123"
    }
  });
  expect(authToken.ok()).toBeTruthy();
  expect(await authToken.json()).toContainEqual(expect.objectContaining({
    token: ""
  }));
});