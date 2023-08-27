/// <reference types="cypress" />

it('google test', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('automation step by step{enter}')

})