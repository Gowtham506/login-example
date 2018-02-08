import { LoginSamplePage } from './app.po';

describe('login-sample App', () => {
  let page: LoginSamplePage;

  beforeEach(() => {
    page = new LoginSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
