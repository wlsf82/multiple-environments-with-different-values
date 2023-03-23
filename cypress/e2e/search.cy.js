const env = Cypress.env('ENVIRONMENT')
const maxResults = Cypress.env('MAX_RESULTS_PER_PAGE')
const termToSearchFor = 'javascript'

it(`searching for "${termToSearchFor}" on ${env} environment returns ${maxResults} results`, () => {
  cy.intercept('GET', '**/search**').as('getStories')
  cy.visit('/')
  cy.wait('@getStories')

  cy.search(termToSearchFor)

  cy.get('div span a')
    .its('length')
    .should('be.equal', maxResults)
})
