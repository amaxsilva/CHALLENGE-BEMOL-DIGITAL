/// <reference types="cypress" />

describe('Trivago', () => {
    it('Deve localizar Manaus', () => {

        cy.viewport(1366, 578) 

        cy.visit('https://www.trivago.com.br/') 
        
        cy.get('.dealform > .dealform__flex-wrapper > .dealform__query-wrapper > div > #querytext').click()
            
        cy.get('.dealform > .dealform__flex-wrapper > .dealform__query-wrapper > div > #querytext').type('Manaus')
            
        cy.get('.ssg-holder > .ssg-suggest > #ssg-suggestions > #suggestion-56507\/200 > .ssg-suggestion__info').click()
            
        cy.get('.hero__content > .dealform > .dealform__flex-wrapper > .btn > .search-button__label').click()
            
        cy.get('#js_itemlistcontrols > .itemlistcontrols-wrapper > #js_price_disclaimer > .itemlistcontroller__sorting > #mf-select-sortby').click()
            
        cy.get('#js_itemlistcontrols > .itemlistcontrols-wrapper > #js_price_disclaimer > .itemlistcontroller__sorting > #mf-select-sortby').select('7')
            
        cy.get('#js_itemlistcontrols > .itemlistcontrols-wrapper > #js_price_disclaimer > .itemlistcontroller__sorting > #mf-select-sortby').click()
            
        cy.get('.clearfix > div > .rat-index > .inline-block > .item-components__pillValue--9101f').click()
               
            
            })
        })