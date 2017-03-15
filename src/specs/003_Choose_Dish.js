describe('Choose Dish', () => {
  it('Select the dish according to the user parameters', () => {
    browser.get('https://www.ifood.com.br/delivery/campinas-sp/jambalaya-refeicoes-jardim-flamboyant');

    waitElementVisible($('#item-137740'));

    //$('#item-137740').click();
    
    $('.btn-add.cboxElement[title*="MINI MINI"]').click();
   
    waitElementVisible('#garnish-tab-0');
    
    $('li.li-garnish-137742').click();
    
    //element(By.cssContainingText('strong.description', 'Panqueca de frango')).click();
    //var marker = $('[name="descriptionGarnishItem"][value="Panqueca de frango"]').getWebElement();
    //marker.getDriver().findElement(by.css('[type="radio"]')).click();
    //$(".description:contains('Panqueca de Frango')").click();

  });
});
