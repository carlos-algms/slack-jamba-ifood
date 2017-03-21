xdescribe('Change Username', () => {
  it('Replaces the account\'s old name for the current user ', () => {
    browser.get('https://www.ifood.com.br/minha-conta/dados-cadastrais');

    waitElementVisible($('#name'));

    $('#name').clear().sendKeys('Luciano Castro');
    $('#save_data').click();

    waitElementVisible($('#closeModal'));
    expect($('#closeModal').isPresent()).toBeTruthy();
  });
});
