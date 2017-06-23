import { NcwebsitePage } from './app.po';

describe('ncwebsite App', () => {
  let page: NcwebsitePage;

  beforeEach(() => {
    page = new NcwebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
