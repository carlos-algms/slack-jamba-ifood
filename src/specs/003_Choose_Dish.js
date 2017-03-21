/*global element By */

describe('Choose Dish', () => {
  it('Select the dish according to the user parameters', () => {
    browser.get('https://www.ifood.com.br/delivery/campinas-sp/jambalaya-refeicoes-jardim-flamboyant');

    waitElementVisible($('.verify[title*="MINI MINI"]'));

    $('.verify[title*="MINI MINI"]').click();

    waitElementVisible('#garnish-tab-0');


    element(By.cssContainingText('strong.description', 'Rolinho de frango crocante')).click();

    $('#btn_0').click();

    element(By.cssContainingText('strong.description', 'Sem guarnição')).click();

    $('#btn_1').click();

    element(By.cssContainingText('strong.description', 'Sem salada')).click();

    $('#btn_2').click();

    // element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible($('#btn_3')).then(e => e.click());

    //element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible($('#btn_4')).then(e => e.click());

    waitElementVisible($('div[title*="MINI MINI"'));

  });
});

xdescribe('Choose Dish (China in Box)', () => {
  it('Select the dish according to the user parameters', () => {
    browser.get('https://www.ifood.com.br/delivery/campinas-sp/china-in-box---cambui-cambui');

    waitElementVisible($('.verify[title*="SALADA CIB CAMARÃO"]'));

    $('.verify[title*="SALADA CIB CAMARÃO"]').click();

    waitElementVisible($('#garnish'));

    element(By.cssContainingText('strong.description', 'SEM MOLHO')).click();

    $('#btn_0').click();

    waitElementVisible($('div[title*="SALADA CIB CAMARÃO"'));

  });
});

