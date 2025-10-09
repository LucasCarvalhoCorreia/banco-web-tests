describe('transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '1000')

        cy.verificarMensagemDoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5000.1')

        cy.verificarMensagemDoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})