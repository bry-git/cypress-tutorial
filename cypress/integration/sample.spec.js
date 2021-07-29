describe('sample integration test', () => {
    it('always returns true', () => {
        return true
    })
    it('visit cypress.com', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.url('includes', 'commands/actions')

        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})