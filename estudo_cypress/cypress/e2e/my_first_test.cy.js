/// <reference types="cypress" />

it('visiting university website', () => {
    cy.visit('https://www.ft.unicamp.br/')

    cy.get('#menu-1137-1 > .sf-depth-1').click()

    cy.get('.menu-mlid-1214 > a').click()

    cy.get('.menu-mlid-1219 > a').click()

    cy.get('#edit-search-block-form--2').click().type('lala')

    cy.get('#edit-submit--2').click()

})

it('almost login twitter not password', () => {
    cy.visit('https://twitter.com/')

    cy.get('[data-testid="loginButton"] > .r-1awozwy').click()

    cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox').type('gustarrafil')


})