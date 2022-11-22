import dayjs from 'dayjs';
import { searchPage } from '../../pages/searchPage';

describe('Test car searching', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Search for specific model - Toyota RAV4', () => {
    searchPage.selectCountry('Poland');
    searchPage.selectCity('Wroclaw');
    const carModel = 'Toyota RAV4'
    searchPage.fillModel(carModel);
    const pickUpDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    const dropOffDate = dayjs().add(7, 'day').format('YYYY-MM-DD');
    searchPage.selectPickUpDate(pickUpDate);
    searchPage.selectDropOffDate(dropOffDate);
    searchPage.submit();
    searchPage.checkIfSearchResultsTableIsDisplayed();
    searchPage.checkIfModelMatchesOnlySearchedValue(carModel)
  })

  it('Search for cars without specifying model', () => {
    searchPage.selectCountry('Poland');
    searchPage.selectCity('Wroclaw');
    const pickUpDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    const dropOffDate = dayjs().add(7, 'day').format('YYYY-MM-DD');
    searchPage.selectPickUpDate(pickUpDate);
    searchPage.selectDropOffDate(dropOffDate);
    searchPage.submit();
    searchPage.checkIfSearchResultsTableIsDisplayed();
  })

  it('Search for cars using drop off date < pick up date - expecting error message', () => {
    searchPage.selectCountry('Poland');
    searchPage.selectCity('Wroclaw');
    const pickUpDate = dayjs().add(7, 'day').format('YYYY-MM-DD');
    const dropOffDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    searchPage.selectPickUpDate(pickUpDate);
    searchPage.selectDropOffDate(dropOffDate);
    searchPage.submit();
    searchPage.checkErrorMessage('Please enter a valid date!')
  })
})