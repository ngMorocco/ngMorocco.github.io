import { NgMoroccoPage } from './app.po';

describe('ng-morocco App', function() {
  let page: NgMoroccoPage;

  beforeEach(() => {
    page = new NgMoroccoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-morocco works!');
  });
});
