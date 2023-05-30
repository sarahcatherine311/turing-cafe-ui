describe('User View', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "./reservations.json"
    })
    .visit("http://localhost:3000/")
  })
  
  it('Should have a title', () => {
    cy.get(".app-title").contains("Turing Cafe Reservations")
  })

  it('Should have a form', () => {
    cy.get(".resy-form").should("be.visible")
  })
  
  it('Should have reservations', () => {
    cy.get(".resy-container").get(".reservation-card").should('have.length', 9)
  })

})