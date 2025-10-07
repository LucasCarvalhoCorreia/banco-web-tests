describe('login', () => {
  it('Login com dados validos deve permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click()
    cy.get('#username').type('julio.lima')
    cy.get('#senha').click()
    cy.get('#senha').type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})