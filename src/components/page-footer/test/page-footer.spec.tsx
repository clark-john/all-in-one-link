import { newSpecPage } from '@stencil/core/testing';
import { PageFooter } from '../page-footer';

describe('page-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageFooter],
      html: `<page-footer></page-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <page-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-footer>
    `);
  });
});
