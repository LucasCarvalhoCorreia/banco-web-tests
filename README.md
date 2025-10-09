# Banco Web - Testes Automatizados (Cypress)

Projeto demonstrativo usado na Mentoria 2.0 para mostrar como automatizar testes end-to-end com Cypress + JavaScript, organizando o código com custom commands e gerando relatórios com o `cypress-mochawesome-reporter`.

Objetivo
- Criar uma automação de testes end-to-end usando Cypress, com organização por comandos personalizados (custom commands) e geração de relatórios HTML.

Componentes do projeto
- Configuração do Cypress: [cypress.config.js](cypress.config.js)
- Dependências: [package.json](package.json)
- Specs / testes:
  - [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
  - [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js)
- Comandos personalizados:
  - Login: [`Cypress.Commands.add('fazerLoginComCredenciaisValidas')`](cypress/support/commands/login.js) e [`Cypress.Commands.add('fazerLoginComCredenciaisInvalidas')`](cypress/support/commands/login.js) — [cypress/support/commands/login.js](cypress/support/commands/login.js)
  - Transferência: [`Cypress.Commands.add('realizarTransferencia')`](cypress/support/commands/transferencia.js) — [cypress/support/commands/transferencia.js](cypress/support/commands/transferencia.js)
  - Comuns: [`Cypress.Commands.add('verificarMensagemDoToast')`](cypress/support/commands/common.js) e [`Cypress.Commands.add('selecionarOpcaoNaComboBox')`](cypress/support/commands/common.js) — [cypress/support/commands/common.js](cypress/support/commands/common.js)
- Arquivos de suporte:
  - Import dos comandos: [cypress/support/commands.js](cypress/support/commands.js)
  - Arquivo de suporte carregado antes dos testes: [cypress/support/e2e.js](cypress/support/e2e.js)
- Fixtures:
  - Credenciais de teste: [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json)
- Relatórios e artefatos:
  - Relatório HTML gerado: [cypress/reports/html/index.html](cypress/reports/html/index.html)
  - Screenshots: [cypress/screenshots/](cypress/screenshots/)
  - Vídeos: [cypress/videos/](cypress/videos/)

Requisitos
- Node.js + npm instalados.
- As aplicações dependentes devem estar em execução:
  - API: banco-api
  - Aplicação web: banco-web  
  Os testes usam `baseUrl` configurado em [cypress.config.js](cypress.config.js) como `http://localhost:4000`.

Instalação
1. Instalar dependências:
   ```sh
   npm install
   ```
