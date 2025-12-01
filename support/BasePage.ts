import { Page } from 'playwright';


/**
 * Classe de base : contient seulement le Page et la navigation globale
 */
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
