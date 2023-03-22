const env = Cypress.env('ENVIRONMENT')
const maxResults = Cypress.env('MAX_RESULTS')

it(`searching for "javascript" on ${env} environment returns ${maxResults} results`, () => {
  cy.log(`Running against ${env} environment`)

  cy.intercept('GET', '**/search**').as('getStories')
  cy.visit('/')
  cy.wait('@getStories')

  cy.search('javascript')

  cy.get('div span a')
    .its('length')
    .should('be.equal', maxResults)
})
