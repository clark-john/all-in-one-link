import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.css',
  scoped: true,
})
export class MainPage {

  render() {
    return (
      <Host>
        <slot>
          <div>
            <main-profile></main-profile>
            <link-icons></link-icons>
            <main-links></main-links>
            <page-footer></page-footer>
          </div>
        </slot>
      </Host>
    );
  }
}
