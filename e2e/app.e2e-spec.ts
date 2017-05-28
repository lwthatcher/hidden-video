import { VatVideoPage } from './app.po';

describe('vat-video App', () => {
  let page: VatVideoPage;

  beforeEach(() => {
    page = new VatVideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
