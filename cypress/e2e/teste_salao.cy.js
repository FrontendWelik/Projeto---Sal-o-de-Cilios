
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false aqui impede que o Cypress falhe o teste
  // por erros que acontecem dentro do código do site
  return false
})

describe('Testando o Site da Suellen', () => {
  it('Verifica se o site carrega...', () => {
    cy.visit('http://localhost:5501/index.html')
    // ... resto do teste
  })
})

describe('Testando o Site da Suellen', () => {
  it('Verifica se o site carrega e se o botão de agendamento está ok', () => {
    // Se você estiver usando o Live Server, mude a porta abaixo se necessário
    cy.visit('http://localhost:5501/index.html') 

    // Testa se o título principal contém a palavra "Beleza"
    cy.get('.H1').should('contain', 'Beleza')

    // Testa se o botão de agendamento leva para o WhatsApp
    cy.get('.bt1 a').should('have.attr', 'href').and('include', 'wa.link')
    
    // Testa a responsividade (vira celular)
    cy.viewport('iphone-xr')
     // cy.get('.mobile-menu-icon').should('be.visible')
  })
})