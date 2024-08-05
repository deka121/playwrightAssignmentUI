import { Page,expect} from "@playwright/test";
export default class SPHomePage {


    constructor(public page: Page) { 
    }
    
    async InputForms() 
    {
            await this.page.locator('li.pt-10 > a[href*="simple-form-demo"]').click();
        
    }

    
    async urlValidator()
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
        await this.page.waitForTimeout(3000);
        await this.page.locator('#showInput').click();
        const displayedMessageElement = await this.page.waitForSelector('#message', { timeout: 10000 }); 
        const displayedMessage = displayedMessageElement ? await displayedMessageElement.textContent() : null;

        if (displayedMessage && displayedMessage.includes(messageText)) {
               console.log('Message validation passed');
               expect(displayedMessage).toEqual(messageText);
   
           } else {
               console.error('Message validation failed');
           }
   
       }

}