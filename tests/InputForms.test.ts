import { test } from "../base/customFixture.ts";


test.describe("Page object test demo", async () => {

    test("Test_Scenario_1", async ({page,baseURL,sphomePage})=>
    {
    
        await page.goto(`${baseURL}`)
        //await page.pause(); 
        await sphomePage.InputForms();
        await sphomePage.urlValidator();
        await sphomePage.InputBoxValidator();
    
    });

})