import { test } from "../base/pomFixture";


test.describe("Page object test demo", async () => {

    test("Test_Scenario_2", async ({page,baseURL,spsliderpage})=>
    {
    
        await page.goto(`${baseURL}`)
        await spsliderpage.clickDDSlider();
        await spsliderpage.dragAndDropValidator();
    

    });


})