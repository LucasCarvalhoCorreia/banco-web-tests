describe('login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-a-pagina')
  })

  it('Login com dados validos deve permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-no-botao-entrar')

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemDoToast('Erro no login. Tente novamente.')
  })
})