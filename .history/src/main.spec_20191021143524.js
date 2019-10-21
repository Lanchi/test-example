// eslint-disable-next-line
import main from '@/main';
import utils from '@/utility';

jest.mock('@/utility');

console.log('MAIN SPEC');

describe('main.js', () => {
  it('init', () => {
    expect(utils.checkParentIframe).toHaveBeenCalled();
    expect(utils.addParentListeners).toHaveBeenCalled();
    expect(utils.loadOfferFromApi).toHaveBeenCalled();
  });
});
