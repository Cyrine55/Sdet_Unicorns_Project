// src/support/world.ts
import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";

export class CustomWorld extends World {
    public page!: Page;
    public browser!: Browser;

    constructor(options: IWorldOptions) {
        super(options);
    }

    // Initialisation du navigateur et de la page
    async init() {
        this.browser = await chromium.launch({
            headless: false,  // false pour voir le navigateur
            slowMo: 50,       // ralentit un peu les actions pour le debug
            args: ['--start-maximized']
        });
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        // tu peux ajouter ici d'autres configurations si nécessaire
    }

    // Fermeture du navigateur
    async close() {
        await this.page.close();
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
