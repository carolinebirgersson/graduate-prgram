describe('Fan page', () => {
  it('should be accessible!', () => {
    cy.visit("http://127.0.0.1:8080/code/")
    cy.wait(500)
    cy.injectAxe()
    cy.checkA11y()
  })
})