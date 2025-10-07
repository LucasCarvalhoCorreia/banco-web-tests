describe('login', () => {
  it('Login com dados validos deve permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click()
    cy.get('#username').type('julio.lima')
    cy.get('#senha').click()
    cy.get('#senha').type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})