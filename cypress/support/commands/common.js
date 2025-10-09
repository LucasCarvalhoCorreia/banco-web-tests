Cypress.Commands.add('verificarMensagemDoToast', (mensagem) => {
    cy.get('.toast').should('be.visible').and('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoNaComboBox', (label, valor) => {
    cy.get(`label[for="${label}"]`).parent().as(`campo-${label}`)
    cy.get(`@campo-${label}`).click()
    cy.get(`@campo-${label}`).contains(valor).click()
})
