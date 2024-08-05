import { Page,expect} from "@playwright/test";
export default class SPHomePage {


    constructor(public page: Page) { 
    }
    
    async InputForms() //Click “Simple Form Demo” under Input Forms
    {
            await this.page.locator('li.pt-10 > a[href*="simple-form-demo"]').click();
        
    }

    
    async urlValidator() //Click “Simple Form Demo” under Input Forms
    {
        const currentUrl = this.page.url();
        if (currentUrl.includes('simple-form-demo')) {
          console.log('URL validation passed');
           expect(currentUrl).toMatch('simple-form-demo');
        } else {
          console.error('URL validation failed');
        }

    }

    async InputBoxValidator() {
        const messageText = 'Welcome to LambdaTest';
        await this.page.locator('[placeholder="Please enter your Message"]').fill(messageText);  
        await this.page.locator('#showInput').click();
        const displayedMessage = await this.page.textContent('#message');
           if (displayedMessage === messageText) {
               console.log('Message validation passed');
               expect(displayedMessage).toEqual(messageText);
   
           } else {
               console.error('Message validation failed');
           }
   
       }

}