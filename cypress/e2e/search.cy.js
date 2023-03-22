it(`searching for "javascript" on ${Cypress.env('ENVIRONMENT')} environment returns ${Cypress.env('MAX_RESULTS')} results`, () => {
  cy.log(`Running against ${Cypress.env('ENVIRONMENT')} environment`)

  cy.intercept('GET', '**/search**').as('getStories')
  cy.visit('/')
  cy.wait('@getStories')

  cy.search('javascript')

  cy.get('div span a')
    .its('length')
    .should('be.equal', Cypress.env('MAX_RESULTS'))
})
