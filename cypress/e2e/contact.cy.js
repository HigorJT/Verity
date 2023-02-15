/// <reference types='cypress' />

import formCorrect from '../pages/form.js'
  
describe('Contato', () => {
    
    let user

    before(() => {
        cy.fixture('user').then(u => user = u)
    })

    context('Sucesso ao preencher', () => {
        it('Deve preencher o formulário corretamente', () => {
            
            formCorrect.go()

            cy.fillInName(user.name)
            cy.fillInEmail(user.email)
            cy.fillInFone(user.fone)
            cy.fillInDescription(user.description)

            formCorrect.checkbox()

           
        })
    })

    context('Erro ao preencher', () => {
        it('Não deve preencher os campos do formulário', () => {

            formCorrect.go()

            cy.fillInName()
            cy.isRequired('input[name="nome"]')
            cy.fillInName(user.name)

            cy.fillInEmail()
            cy.isRequired('input[type="email"]')
            cy.fillInEmail(user.email)

            cy.fillInFone()
            cy.fillInDescription('input[type="tel"]')
            cy.fillInFone(user.fone)

            formCorrect.checkbox()

            formCorrect.alertMessageShouldBe()

        })
    })
})