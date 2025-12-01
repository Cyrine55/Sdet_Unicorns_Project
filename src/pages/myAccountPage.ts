import { Page } from "playwright";
import { BasePage } from "../../support/BasePage";
import { Actions } from "../../support/Actions";
import { URLs } from "../configs/configs";

export class myAccountPage extends BasePage{

    private actions: Actions;

    constructor(page: Page){
        super(page);
        this.actions= new Actions(page);
        
    }



    //locator
    //myAccountMenu=this.page.locator("#menu-item-619");


    async  openUrl(){
        await this.navigateTo(URLs.url);
    }


}
