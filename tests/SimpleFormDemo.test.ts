import { test } from "../base/customFixture.ts";
import * as dataset from "../test-data/InputFormTestData.json"

test.describe("Page object test demo", async () => {

    test("Test_Scenario_3", async ({page,baseURL,spinputformpage})=>
    {
    
        await page.goto(`${baseURL}`)
        await spinputformpage.clickOnInputFormLnk();
        //await page.pause();
        await spinputformpage.errorValidator();
        await spinputformpage.formValidator(dataset.Name,dataset.Email,dataset.Password,dataset.Company
          ,dataset.Website,dataset.City,dataset.Address1,dataset.Address2,dataset.State,dataset.Zipcode);
    

    });


})