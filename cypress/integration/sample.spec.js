describe('sample integration test', () => {
    xit('always returns true', () => {
        return true
    })
    xit('visit cypress.com', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.url('includes', 'commands/actions')

        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
    it('searches for platform one from google.com', () => {
        cy.visit('https://google.com')
        cy.get('.gLFyf').type('platform one{enter}')

        cy.findAllByText(/https:\/\/software.af.mil/).should('exist')
    })
})