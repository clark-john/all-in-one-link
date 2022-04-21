import { newSpecPage } from '@stencil/core/testing';
import { LinkIcons } from '../link-icons';

describe('link-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LinkIcons],
      html: `<link-icons></link-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <link-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </link-icons>
    `);
  });
});
