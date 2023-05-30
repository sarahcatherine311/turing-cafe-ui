describe('Form Input', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "./reservations.json"
    })
    .visit("http://localhost:3000/")
  })
  
  it('Should be able to delete a reservation', () => {
    cy.get(".reservation-name").last().contains("Brittany")
    .get(".reservation-date").last().contains("9/9")
    .get(".delete-button").last().click()
    .get(".resy-container").get(".reservation-card").should('have.length', 8)
    .get(".reservation-name").last().contains("Travis")
    .get(".reservation-date").last().contains("6/8")
  })
})