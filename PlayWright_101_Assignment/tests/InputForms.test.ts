import { test } from "../base/pomFixture";


test.describe("Page object test demo", async () => {

    test("Test_Scenario_1", async ({page,baseURL,sphomePage})=>
    {
    
        await page.goto(`${baseURL}`)
        await sphomePage.InputForms();
        await sphomePage.urlValidator();
        await sphomePage.InputBoxValidator();
    

    });

})