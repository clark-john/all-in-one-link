import { newE2EPage } from '@stencil/core/testing';

describe('link-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-icons></link-icons>');

    const element = await page.find('link-icons');
    expect(element).toHaveClass('hydrated');
  });
});
