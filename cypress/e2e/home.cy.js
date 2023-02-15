/// <reference types='cypress' />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

   it('Deve ser exbido o título "Nossas soluções_"', () => {
        
        cy.get('span[style="font-size:45px;"]')
            .contains('Nossas soluções')
            

        cy.get('span[style="color:#DC4179;"]')
            .contains('_')
    })

    it('Deve ser exbido o título "Nossos clientes_"', () => {
        
        cy.get('span[style="color:#121E8F;"]')
            .contains('Nossos clientes')

        cy.get('span[style="color:#DC4179;"]')
            .contains('_')
    })
})
