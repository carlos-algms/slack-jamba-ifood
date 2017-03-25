/* global element, By, browser, waitElementVisible */

const ChooseDishPage = require('../pages/ChooseDishPage');

xdescribe('Choose Dish', () => {
  it('Select the dish according to the user parameters', () => {
    browser.get(ChooseDishPage.url);

    waitElementVisible(ChooseDishPage.dishSizes.minimini).then(e => e.click());

    waitElementVisible(ChooseDishPage.buttons.nextButton);

    element(By.cssContainingText('strong.description', 'Ovos fritos')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    element(By.cssContainingText('strong.description', 'Sem guarnição')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    element(By.cssContainingText('strong.description', 'Sem salada')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    // element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    // element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    waitElementVisible($('div[title*="MINI MINI"'));
  });
});

describe('Choose Dish (China in Box)', () => {
  it('Select the dish according to the user parameters', () => {
    const dish = 'SALADA CIB CAMARÃO';

    browser.get('https://www.ifood.com.br/delivery/campinas-sp/china-in-box---cambui-cambui');

    waitElementVisible($('.verify[title*=' + dish + ']'));

    $('.verify[title*="SALADA CIB CAMARÃO"]').click();

    waitElementVisible($('#garnish'));

    element(By.cssContainingText('strong.description', 'SEM MOLHO')).click();

    $('#btn_0').click();

    waitElementVisible($('div[title*="SALADA CIB CAMARÃO"'));
  });
});
