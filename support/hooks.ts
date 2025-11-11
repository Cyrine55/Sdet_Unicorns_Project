 import { Before, After, BeforeAll,AfterAll,Status,setDefaultTimeout } from '@cucumber/cucumber';
 import fs from 'fs';
import path from 'path';

import { CustomWorld } from './world';

setDefaultTimeout(120 * 1000); 
Before(async function (this: CustomWorld) {
    await this.init();
});

After(async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === Status.FAILED && this.page) {
       // const screenshotPath = `screenshots/${Date.now()}.png`;
       const screenshotPath = `screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
        fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        const imageBuffer = fs.readFileSync(screenshotPath);
        await this.attach(imageBuffer, 'image/png');
    }

    if (this.page && this.browser) {
        await this.close();
    }
});

 