module.exports = {
  url: 'https://www.ifood.com.br/delivery/campinas-sp/jambalaya-refeicoes-jardim-flamboyant',
  buttons: {
    nextButton: $('div.tabPane[style*="block"] .btn.btn_next'),
    addComment: $(`a.ico-comments.popup-link[title*="${browser.params.dishSize}"]`),
    submitComment: $('div.popup-obs a.btn.addObs[title="Adicionar"]')
  },
  fields: {
    commentArea: $('div.popup-shell.popup-obs textarea#obs')
  },
  dish: {
    comment: browser.params.dishComment,
    size: browser.params.dishSize,
    option: browser.params.dishOption,
    sideDish: browser.params.dishSideDish,
    salada: browser.params.dishSalad
  }
};
