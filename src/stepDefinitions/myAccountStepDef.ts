  import { Given, When, Then , setDefaultTimeout} from '@cucumber/cucumber';
import { myAccountPage } from '../pages/myAccountPage';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';

let accountPage: myAccountPage;
setDefaultTimeout(60 * 1000);
         Given('launch the application', async function (this: CustomWorld) {
           accountPage= new myAccountPage(this.page);
           await accountPage.openUrl();
                 });



         When('Click on My account menu', async function (this: CustomWorld) {
           
         });

         When('Enter username {string}', async function (this: CustomWorld,string) {
           
         });

         When('Enter emailAdress {string}',async function (this: CustomWorld,string) {
           
         });


         When('Enter a strong password {string}', async function (this: CustomWorld,string) {
           
         });

 
         When('Click on register',async  function (this: CustomWorld) {
           
         });

   

         Then('un message descriptif affiché avec {string} link', async function (this: CustomWorld,string) {
           
         });