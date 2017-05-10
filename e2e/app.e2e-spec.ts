import { SynapticonRoboracingPage } from './app.po';

describe('synapticon-roboracing App', () => {
  let page: SynapticonRoboracingPage;

  beforeEach(() => {
    page = new SynapticonRoboracingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
