import { Page, Locator } from 'playwright';

/**
 * Classe d'actions réutilisables, indépendante de BasePage
 * Utilisation via composition dans les pages concrètes
 */
export class Actions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitFor(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async click(locator: string) {
    await this.waitFor(locator);
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.waitFor(locator);
    await this.page.locator(locator).fill(value);
  }

  async getText(locator: string) {
    await this.waitFor(locator);
    return await this.page.locator(locator).innerText();
  }

  async hover(locator: string) {
    await this.waitFor(locator);
    await this.page.locator(locator).hover();
  }

  async waitElementVisible(locator: string) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }
}
