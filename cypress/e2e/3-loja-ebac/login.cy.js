/// <reference types="cypress"/>

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {       
        cy.get('#username').type('gustavo.voltando@gmail.com')
        cy.get('#password').type('gustavo2323')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gustavo.voltando')
    
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gustavo.oltando@gmail.com')
        cy.get('#password').type('gustavo2323')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('gustavo.voltando@gmail.com')
        cy.get('#password').type('gusta2323')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail gustavo.voltando@gmail.com está incorreta')
    
    });

})