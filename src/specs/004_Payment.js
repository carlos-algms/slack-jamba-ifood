describe('Payment Method', () => {
  it('Select the payment method and confirm the order', () => {

    $('.btn[title*="pagamento"]').click();

    waitElementVisible($('a[title="Vale Refeição"]')).then(e => e.click());

    waitElementVisible($('img[title*="SODEXO"]')).then(e => e.click());

    console.log('\nenvprod: ' + browser.params.envprod);

  });
});
