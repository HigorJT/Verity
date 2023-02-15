class formCorrect {

    go () {

        cy.visit('/contato')
    }

    checkbox () {

        cy.get('input[data-testid="input"]')
            .click()
    }

    alertMessageShouldBe() {

        cy.get('input[data-testid="input"]')
                .invoke('prop', 'validationMessage')
                .should(text => expect('Marque esta caixa se deseja continuar.').to.eq(text))
    }



}

export default new formCorrect