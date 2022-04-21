import { newSpecPage } from '@stencil/core/testing';
import { MainProfile } from '../main-profile';

describe('main-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainProfile],
      html: `<main-profile></main-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <main-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-profile>
    `);
  });
});
