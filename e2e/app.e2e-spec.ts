import { AngularLunchLearnIntroPage } from './app.po';

describe('angular-lunch-learn-intro App', () => {
  let page: AngularLunchLearnIntroPage;

  beforeEach(() => {
    page = new AngularLunchLearnIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
