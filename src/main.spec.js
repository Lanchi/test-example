// eslint-disable-next-line
import main from '@/main';
import utils from '@/utility';

jest.mock('@/utility');

describe('main.js', () => {
  it('init', () => {
    expect(utils.checkParentIframe).toHaveBeenCalled();
    expect(utils.addParentListeners).toHaveBeenCalled();
    expect(utils.loadOfferFromApi).toHaveBeenCalled();

    // if calling order is important - https://github.com/facebook/jest/issues/4402#issuecomment-343267817
  });
});
