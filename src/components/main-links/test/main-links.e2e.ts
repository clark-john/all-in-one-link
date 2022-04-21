import { newE2EPage } from '@stencil/core/testing';

describe('main-links', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-links></main-links>');

    const element = await page.find('main-links');
    expect(element).toHaveClass('hydrated');
  });
});
