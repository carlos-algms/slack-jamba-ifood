xdescribe('Try to Login', () => {
  it('Enter the username and password', () => {
    browser.get('https://www.ifood.com.br/entrar');

    waitElementVisible($('#email_login'));

    $('#email_login').sendKeys('fiaobot@gmail.com');
    $('#password_login').sendKeys('Fi@o1234');
    $('input[type="submit"][value="Entrar"]').click();

    expect($('img[title="Foto Perfil"]').isPresent()).toBeTruthy();

  });
});
