import { PopupglobePage } from './app.po';

describe('popupglobe App', () => {
  let page: PopupglobePage;

  beforeEach(() => {
    page = new PopupglobePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
