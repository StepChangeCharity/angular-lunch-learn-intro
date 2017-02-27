import { browser, element, by } from 'protractor';

export class AngularLunchLearnIntroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar .title')).getText();
  }
}
