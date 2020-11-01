import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getTextByElement(selector) {
    return element(by.css(selector)).getText()
  }

  clickByElement(selector) {
    element(by.css(selector)).click()
  }

  getElement(selector) {
    return element(by.css(selector))
  }
}
