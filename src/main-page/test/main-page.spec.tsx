import { newSpecPage } from '@stencil/core/testing';
import { MainPage } from '../main-page';

describe('main-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainPage],
      html: `<main-page></main-page>`,
    });
    expect(page.root).toEqualHtml(`
      <main-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-page>
    `);
  });
});
