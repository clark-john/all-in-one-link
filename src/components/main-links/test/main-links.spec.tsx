import { newSpecPage } from '@stencil/core/testing';
import { MainLinks } from '../main-links';

describe('main-links', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainLinks],
      html: `<main-links></main-links>`,
    });
    expect(page.root).toEqualHtml(`
      <main-links>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-links>
    `);
  });
});
