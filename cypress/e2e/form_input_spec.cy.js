describe('Form Input', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "./reservations.json"
    })
    .visit("http://localhost:3000/")
  })
  
  it('Should have inputs that you can type in', () => {
    cy.get(".resy-form")
    .get(".name-input").type("Chad").should("have.value", "Chad")
    .get(".date-input").type("05/24").should("have.value", "05/24")
    .get(".time-input").type("7:30").should("have.value", "7:30")
    .get(".number-input").type("2").should("have.value", "2")
    .get(".submit-button")
  })

  it('Should be able to add a new reservation to the page', () => {
    cy.get(".resy-form")
    .get(".name-input").type("Chad")
    .get(".date-input").type("05/24")
    .get(".time-input").type("7:30")
    .get(".number-input").type("2")
    .get(".submit-button").click()
    .get(".resy-container").get(".reservation-card").should('have.length', 10)
    .get(".reservation-name").last().contains("Chad")
    .get(".reservation-date").last().contains("05/24")
    .get(".reservation-time").last().contains("7:30")
    .get(".reservation-number").last().contains("2")
  })
})