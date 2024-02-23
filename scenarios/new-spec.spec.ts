import { test, expect } from '@playwright/test';

test("Checking API context", async ({request})=>{

    const resp = await request.post("https://restful-booker.herokuapp.com/notavailable",
    {
        data: {
            "username" : "notvaid",
            "password" : "password123"
        }
    })

    expect(resp.ok()).toBeTruthy()

});

test("Context from Page", async ({page})=>{

    page.request.post()
});