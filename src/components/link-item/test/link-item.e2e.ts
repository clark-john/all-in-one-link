import { newE2EPage } from '@stencil/core/testing';

describe('link-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-item></link-item>');

    const element = await page.find('link-item');
    expect(element).toHaveClass('hydrated');
  });
});
