describe('Google search', () => {
  it('search for protractor', () => {
    browser.get('https://www.google.com.br/');

    $('#lst-ib').sendKeys('protractor js').sendKeys(protractor.Key.ENTER);
  });
});
