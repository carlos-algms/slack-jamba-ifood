const LoginPage = require('../pages/LoginPage');
//const ChooseDishPage = require('../pages/ChooseDishPage');

describe('Try to Login', () => {
  it('Enter the username and password', () => {
    browser.get(LoginPage.url);

    waitElementVisible(LoginPage.fields.email);

    LoginPage.fields.email.sendKeys(browser.params.login.user);
    LoginPage.fields.password.sendKeys(browser.params.login.password);

    LoginPage.buttons.login.click();

    expect(LoginPage.profilePicture.isPresent()).toBeTruthy();
  });
});

fdescribe('Test Function', () => {
  it('Function created in order to do protractor related tests', () => {

    /*if(ChooseDishPage.dish.sideDish !== null)
      console.log('eh nulo');
    else
      console.log('sideDish: ' + ChooseDishPage.dish.sideDish);

    var pedido = '@silviao pede ai mini mini de Bobó de frango com Chuchu refogado e Alface com comentario e ai silviao';
    var pattern = '@silviao pede ai (mini mini|mini|todas as saladas) de [a-zA-Z]+ e [a-zA-Z]+ com comentario e ai silviao';

    var str1 = '@silviao pede ai mini mini, Bobó de frango, Chuchu refogado, Alface, comentario e ai silviao';
    var str2 = '@silviao pede ai mini mini, Bobó de frango';
    var str3 = '@silviao pede ai mini mini, Bobó de frango, comentario e ai silviao, salada Alface';
    var pat = '^@silviao pede ai (mini mini|mini|todas as saladas), ([\\D\\s]+)(, (guarnicao|salada|comentario) [\\D\\s]+)*$';*/

    //console.log(pedido.match(pattern));
    /*str1.match(pat).forEach(function (element, index){
      if(element != null)
        console.log(index + ': ' + element);
    });

    str2.match(pat).forEach(function (element, index){
      if(element != null)
        console.log(index + ': ' + element);
    });
    str3.match(pat).forEach(function (element, index){
      if(element != null)
        console.log(index + ': ' + element);
    });*/

    /*if(ChooseDishPage.dish.size == 'MINI MINI' || ChooseDishPage.dish.size == 'MINI')
      console.log('mini mini ou mini');
    else if(ChooseDishPage.dish.size == 'TODAS AS SALADAS')
      console.log('todas as saladas');
    else if(ChooseDishPage.dish.size == 'FEIJOADA')
      console.log('feijoada');*/
    
    var spawn = require('child_process').spawn;
    var ls  = spawn('ls', ['-l']);
    ls.stdout.on('data', function (data) {
        console.log(data + 'rf');
    });
    
    var ls2  = spawn('ls', ['-l', '--author']);
    ls2.stdout.on('data', function (data) {
        console.log(data + 'rf');
    });

  });
});

//@silviao pede ai [mini? mini|mini|todas as saladas|feijoada] de [Bobó de frango] com [Chuchu refogado] e [Alface] com comentario [e ai silviao] 