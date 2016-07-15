export class NgMoroccoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-morocco-app h1')).getText();
  }
}
