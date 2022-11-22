import dayjs from 'dayjs';
import { searchPage } from '../../pages/searchPage';
import { detailsPage } from '../../pages/detailsPage';
import { summaryPage } from '../../pages/summaryPage';

describe('Test car renting', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Rent a car - Toyota RAV4', () => {
    const country = 'Poland'
    const city = 'Wroclaw'
    const carModel = 'Toyota RAV4'
    const pickUpDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    const dropOffDate = dayjs().add(7, 'day').format('YYYY-MM-DD');

    searchPage.selectCountry(country);
    searchPage.selectCity(city);
    searchPage.fillModel(carModel);
    searchPage.selectPickUpDate(pickUpDate);
    searchPage.selectDropOffDate(dropOffDate);
    searchPage.submit();

    searchPage.checkIfSearchResultsTableIsDisplayed();
    searchPage.clickRentForFirstResult();

    detailsPage.checkDetails(carModel)
    detailsPage.clickRentButton();

    summaryPage.checkIfSummaryPageIsDisplayed();
    cy.fixture('user.json').then((testData) => {
      summaryPage.fillTheForm(testData);
    });
    summaryPage.clickRentButton();
    summaryPage.checkIfErrorPageIsNotDisplayed();
  })
})