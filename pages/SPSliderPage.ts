import { Page,expect} from "@playwright/test";
export default class SPSliderPage {


    constructor(public page: Page) { 
    }
    
    async clickDDSlider() 
    {
            await this.page.locator('li.pt-10:nth-child(13) > a[href*="drag-drop"]').click();
        
        
    }

    async dragAndDropValidator() 
    {     
    const slider = this.page.locator("#slider3 > div > input");
    const slider_point =this.page.locator("#rangeSuccess");
    let range_max = 95;
    await slider.click();
    
    while (true) {
      const currentRangeValue = await slider_point.innerText();
    
      if (currentRangeValue === range_max.toString()) {
        break;
      }
    
      await slider.press('ArrowRight');
    }
    }
    
    
}