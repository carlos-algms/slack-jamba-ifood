module.exports = {
  url: 'https://www.ifood.com.br/delivery/campinas-sp/jambalaya-refeicoes-jardim-flamboyant',
  dishSizes: {
    minimini: $('.verify[title*="MINI MINI"]'),
    mini: $('#stub'),
    saladas: $('#stub'),
    feijoada: $('#stub')
  },
  buttons: {
    nextButton: $('div.tabPane[style*="block"] .btn.btn_next'),
            addComment: $('a.ico-comments.popup-link[title*="MINI MINI"]'),
    submitComment: $('div.popup-obs a.btn.addObs[title="Adicionar"]')
  },
  fields: {
    commentArea: $('div.popup-shell.popup-obs textarea#obs')
  } 
  dish: {
    comment: browser.params.dishComment,
    size: browser.params.dishSize,
    option: browser.params.dishOption,
    sideDish: browser.params.dishSideDish,
    salada: browser.params.dishSalad
  }
};
