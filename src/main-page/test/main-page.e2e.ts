import { newE2EPage } from '@stencil/core/testing';

describe('main-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-page></main-page>');

    const element = await page.find('main-page');
    expect(element).toHaveClass('hydrated');
  });
});
