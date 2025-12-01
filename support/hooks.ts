import { Before, After ,Status} from "@cucumber/cucumber";
import { CustomWorld } from "./world";
 import fs from 'fs';
import path from 'path';


Before(async function(this: CustomWorld) {
    console.log("🔥 HOOK EXECUTED (Before)");
    await this.init();
});


After(async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === Status.FAILED && this.page) {
        const screenshotPath = `screenshots/${Date.now()}.png`;
        fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        const imageBuffer = fs.readFileSync(screenshotPath);

        await this.attach(imageBuffer, 'image/png');
    }

    if (this.page && this.browser) {
        await this.close();
    }
});