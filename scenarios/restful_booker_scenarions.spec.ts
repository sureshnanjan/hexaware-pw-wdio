import { test, expect } from '@playwright/test';
import exp from 'constants';
// Request context is reused by all tests in the file.
let apiContext;
let token;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: 'https://restful-booker.herokuapp.com'
  });
  const response = await apiContext.post('/auth', {
    data: {
        "username" : "admin",
        "password" : "password123"
    }
  })
  const responseBody = await response.json();
  token = responseBody.token;
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
  expect(await authToken.json()).toContain("token");
  });

  test("Get all Bookings", async ()=>{
    const allbookings = await apiContext.get("/booking")
    console.table(await allbookings.body())
  })

  test("Get Booking by Name",async ()=>{
    const allbookings = await apiContext.get("/booking",
    {
      params: {
        'firstname': 'sally',
        'lastname': 'brown',
      }
    }
    )
   console.table(await allbookings.body())
   console.log(`Authentication Token is: ${token}`)

  })

  test("Delete 91 Booking for Sally Brown", async ()=>{
    const response = await apiContext.delete("/booking/111",{
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`
    }
    });
    console.log(await response.text())
    console.log(response.status())
    console.log(response.statusText())
    expect(response.ok()).toBeTruthy();
  });


