/* global element, By, browser, waitElementVisible */

const ChooseDishPage = require('../pages/ChooseDishPage');

describe('Choose Dish', () => {
  it('Select the dish according to the user parameters', () => {
    browser.get(ChooseDishPage.url);
    
    waitElementVisible(ChooseDishPage.buttons.addComment).then(e => e.click());
    //waitElementVisible($('div#garnish a.ico-comments.popup-link[title*="TODAS AS SALADAS"]')).then(e => e.click());
       
    waitElementVisible(ChooseDishPage.buttons.submitComment);
    
    if(ChooseDishPage.dish.comment !== null)
      ChooseDishPage.fields.commentArea.sendKeys(ChooseDishPage.dish.comment);
    
    ChooseDishPage.buttons.submitComment.click();
    
    waitElementVisible($('div#garnish'));

    waitElementVisible(element(By.cssContainingText('div.tabPane[style*="block"] strong.description', ChooseDishPage.dish.option))).then(e => e.click());
    //waitElementVisible($('div.tabPane[style*="block"] strong.description:contains(Ovos fritos)')).then(e => e.click());


    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    if(ChooseDishPage.dish.sideDish !== null)
      waitElementVisible(element(By.cssContainingText('div#cboxLoadedContent strong.description', ChooseDishPage.dish.sideDish))).then(e => e.click());
    else
      waitElementVisible(element(By.cssContainingText('div#cboxLoadedContent strong.description', 'Sem guarnição'))).then(e => e.click());

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    if(ChooseDishPage.dish.salada !== null)
      //waitElementVisible(element(By.cssContainingText('strong.description', ChooseDishPage.dish.salada))).then(e => e.click());
      waitElementVisible(element(By.cssContainingText('div#cboxLoadedContent strong.description', 'Saladas diversas'))).then(e => e.click());
    else    
      waitElementVisible(element(By.cssContainingText('div#cboxLoadedContent strong.description', 'Sem salada'))).then(e => e.click());

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    // element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    // element(By.cssContainingText('strong', 'Não Quero')).click();

    waitElementVisible(ChooseDishPage.buttons.nextButton).then(e => e.click());

    waitElementVisible($('div[title*=\"' + ChooseDishPage.dish.option + '\"'));
    
    browser.sleep(5000);
  });
});

xdescribe('Choose Dish (China in Box)', () => {
  it('Select the dish according to the user parameters', () => {
    const dish = 'SALADA CIB CAMARÃO';

    browser.get('https://www.ifood.com.br/delivery/campinas-sp/china-in-box---cambui-cambui');

    waitElementVisible($('.verify[title*=\"' + dish + '\"]'));
    
    $('.verify[title*="SALADA CIB CAMARÃO"]').click();

    browser.sleep(10000);

    //waitElementVisible($('#garnish'));

    //element(By.cssContainingText('strong.description', 'SEM MOLHO')).click();

    //$('#btn_0').click();

    //waitElementVisible($('div[title*="SALADA CIB CAMARÃO"'));
  });
});
