export default {
  checkParentIframe: jest.fn(() => {
    console.log('MOCK: Checking parent Iframe');
  }),
  addParentListeners: jest.fn(() => {
    console.log('MOCK: Adding listeners for parent messages');
  }),
  loadOfferFromApi: jest.fn(() => {
    console.log('MOCK: Loading offer...');
  }),
};
