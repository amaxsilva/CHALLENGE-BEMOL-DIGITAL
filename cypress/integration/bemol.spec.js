/// <reference types="cypress" />

describe('Correio', () => {
    it('Deve poder localizar um CEP existente', () => {        
               
               cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php?t')
            
               cy.get('#formulario > .campos > .campo > .controle > #endereco').click()
            
               cy.get('#formulario > .campos > .campo > .controle > #endereco').type('69005040')
            
               cy.get('#formulario > .campos > .campo > .botoes > #btn_pesquisar').click()
            
               cy.get('div > #resultado-DNEC > tbody > tr > td:nth-child(1)').click()
            
            })
           
           })
