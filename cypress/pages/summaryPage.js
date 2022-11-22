const content = '#content';
const nameInput = '#name';
const lastNameInput = '#last_name';
const cardNumberInput = '#card_number';
const emailInput = '#email';

export const summaryPage = {
  checkIfSummaryPageIsDisplayed: () => {
    cy.get('h2').should('contain.text', 'Summary')
  },
  checkDetails: (expectedValue) => {
    cy.get(content).should('contain.text', expectedValue);
  },
  fillName: (name) => {
    cy.get(nameInput).type(name)
  },
  fillLastName: (lastName) => {
    cy.get(lastNameInput).type(lastName)
  },
  fillCardNumber: (cardNumber) => {
    cy.get(cardNumberInput).type(cardNumber)
  },
  fillEmail: (email) => {
    cy.get(emailInput).type(email)
  },
  fillTheForm: ({ name, lastName, cardNumber, email }) => {
    summaryPage.fillName(name);
    summaryPage.fillLastName(lastName);
    summaryPage.fillCardNumber(cardNumber);
    summaryPage.fillEmail(email);
  },
  clickRentButton: () => {
    cy.contains('Rent').click()
  },
  checkIfErrorPageIsNotDisplayed: () => {
    cy.contains('Page not found').should('not.be.visible');
  }
};
