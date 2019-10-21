// eslint-disable-next-line
import main from '@/main';
const utils = jest.mock('@/utility');

console.log('MAIN SPEC');

describe('main.js', () => {
  /* beforeEach(() => {
    // jest.spyOn(console, 'log')
  }); */

  jest.spyOn(console, 'error');
  // const checkParentIframe = jest.fn().mockName('checkParentIframe');

  /* afterEach(() => {
    console.log.mockRestore()
    console.error.mockRestore()
  }) */

  it('init', () => {
    expect(utils.checkParentIframe).toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });
});
