const detailsContent = '#content';

export const detailsPage = {
  checkDetails: (expectedValue) => {
    cy.get(detailsContent).should('contain.text', expectedValue);
  },
  clickRentButton: () => {
    cy.contains('Rent!').click()
  }
};
