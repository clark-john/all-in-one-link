import { newE2EPage } from '@stencil/core/testing';

describe('main-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-profile></main-profile>');

    const element = await page.find('main-profile');
    expect(element).toHaveClass('hydrated');
  });
});
