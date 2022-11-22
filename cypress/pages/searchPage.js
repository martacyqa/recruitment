const countrySelect = '#country';
const citySelect = '#city';
const modelInput = '#model';
const pickUpDate = '#pickup';
const dropOffDate = '#dropoff';
const submitButton = '//button[@type="submit"]'
const errorMessage = './/*[contains(@class,"alert")]'
const searchResultsTable = '#search-results'

export const searchPage = {
  selectCountry: (country) => {
    cy.get(countrySelect).select(country);
  },
  selectCity: (city) => {
    cy.get(citySelect).select(city);
  },
  fillModel: (model) => {
    cy.get(modelInput).type(model);
  },
  selectPickUpDate: (date) => {
    cy.get(pickUpDate).type(date);
  },
  selectDropOffDate: (date) => {
    cy.get(dropOffDate).type(date);
  },
  submit: () => {
    cy.xpath(submitButton).click();
  },
  checkErrorMessage: (expectedErrorMsg) => {
    cy.xpath(errorMessage).should('have.text', expectedErrorMsg)
  },
  checkIfSearchResultsTableIsDisplayed: () => {
    cy.get(searchResultsTable).should('be.visible')
  },
  getFirstLicencePlate: () => {
    return cy.xpath('//tbody/tr/td[3]').then(($licencePlate) => {
      const value = $licencePlate.text()
      return value;
    })
  },
  clickRentForFirstResult: () => {
    cy.contains('Rent').click()
  },
  checkIfModelMatchesOnlySearchedValue: (value) => {
    cy.xpath('//tbody/tr/td[2]')
      .each((item, index) => {
        cy.wrap(item).should('have.text', value)
      })
  }
}
