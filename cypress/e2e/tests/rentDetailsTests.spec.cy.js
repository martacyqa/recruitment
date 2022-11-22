import dayjs from 'dayjs';
import { searchPage } from '../../pages/searchPage';
import { detailsPage } from '../../pages/detailsPage';
import { summaryPage } from '../../pages/summaryPage';


describe('Test rent details page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Check rent details on details page', () => {
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
    detailsPage.checkDetails(country)
    detailsPage.checkDetails(city)
    detailsPage.checkDetails(pickUpDate)
    detailsPage.checkDetails(dropOffDate)
  })

  it('Check rent details on summary page', () => {
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
    detailsPage.clickRentButton()

    summaryPage.checkDetails(carModel)
    summaryPage.checkDetails(country)
    summaryPage.checkDetails(city)
    summaryPage.checkDetails(pickUpDate)
    summaryPage.checkDetails(dropOffDate)
  })
})