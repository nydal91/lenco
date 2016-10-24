import { LencoPage } from './app.po';

describe('lenco App', function() {
  let page: LencoPage;

  beforeEach(() => {
    page = new LencoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
