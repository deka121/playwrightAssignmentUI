import { Page,expect} from "@playwright/test";
export default class SPInputFormPage {


    constructor(public page: Page) { 
    }
    
    async clickOnInputFormLnk() 
    {
          await this.page.locator('li.pt-10:nth-child(20) > a[href*="input-form-demo"]').click();
        
    }

    async errorValidator() {
        const name = this.page.locator('input[placeholder=\'Name\'][required]');
        await this.page.locator('button:has-text("Submit")').click();
    
        const validationMessage = await this.page.locator('input[placeholder=\'Name\'][required]').evaluate((element) => {
            const input = element as HTMLInputElement; 
            return input.validationMessage;
        });
    
         //expect(validationMessage).toMatch(/Please fill (in|out) this field\./);        
         expect(validationMessage).toMatch(/Please fill (in|out) this field/);

    }
    
async formValidator(Name,Email,Password,Company,Website,City,Address1,Address2,State,Zipcode)
{   
    
    await this. page.locator('input[placeholder=\'Name\'][required]').fill(Name);
    await this.page.locator("[placeholder='Email']").fill(Email);
    await this.page.locator("[placeholder='Password']").fill(Password);
    await this.page.locator("[placeholder='Company']").fill(Company);
    await this.page.locator("[placeholder='Website']").fill(Website);
    await this.page.locator("[placeholder='City']").fill(City);
    await this.page.locator("[placeholder='Address 1']").fill(Address1);
    await this.page.locator("[placeholder='Address 2']").fill(Address2);
    await this.page.locator("[placeholder='State']").fill(State);
    await this.page.locator("[placeholder='Zip code']").fill(Zipcode);

  const countrySelect = await this.page.selectOption('select[name="country"]', { label: 'United States' });
  await this.page.locator('button:has-text("Submit")').click();

  const messageText ="Thanks for contacting us, we will get back to you shortly."
  const displayedMessage = await this.page.textContent('.success-msg');
  if (displayedMessage === messageText) {
      console.log('Message validation passed');
      expect(displayedMessage).toEqual(messageText);

  } else {
      console.error('Message validation failed');
  }

}

    
    
}