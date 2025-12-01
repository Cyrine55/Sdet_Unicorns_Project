// src/support/world.ts
import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

export class CustomWorld extends World {
  public browser!: Browser;
  public context!: BrowserContext;
  public page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    console.log("🚀 init() starting...");
    this.browser = await chromium.launch({ headless: false, slowMo: 50 });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    console.log("✅ page created:", !!this.page);
  }

  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

// Enregistre le World
setWorldConstructor(CustomWorld);

console.log("⚡ World.ts is loaded");
