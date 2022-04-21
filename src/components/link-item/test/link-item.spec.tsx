import { newSpecPage } from '@stencil/core/testing';
import { LinkItem } from '../link-item';

describe('link-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LinkItem],
      html: `<link-item></link-item>`,
    });
    expect(page.root).toEqualHtml(`
      <link-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </link-item>
    `);
  });
});
