// eslint-disable-next-line
import main from '@/main';

console.log('MAIN SPEC');

describe('main.js', () => {
  /* beforeEach(() => {
    // jest.spyOn(console, 'log')
  }); */

  jest.spyOn(console, 'error');
  const

  /* afterEach(() => {
    console.log.mockRestore()
    console.error.mockRestore()
  }) */

  it('init', () => {
    // expect(console.log).not.toHaveBeenCalled()
    expect(console.error).not.toHaveBeenCalled();
  });
});
