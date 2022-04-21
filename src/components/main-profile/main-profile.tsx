import { Component, Host, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'main-profile',
  styleUrl: 'main-profile.css',
  scoped: true,
  assetsDirs: ['assets']
})
export class MainProfile {
  render() {
    return (
      <Host>
        <slot>
          <div>
            <div class="container">
              <img src={ getAssetPath('assets/profile.png') } alt="monkey" />
              <div class="clark">
                Clark
              </div>
              <div>All Socials</div>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
