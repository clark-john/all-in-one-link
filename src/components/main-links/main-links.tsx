import { Component, Host, h, Fragment } from '@stencil/core';
import { links } from './links';

@Component({
  tag: 'main-links',
  styleUrl: 'main-links.css',
  shadow: true,
})
export class MainLinks {
  render() {
    const linksList = links.map(x => {
      return (
        <>
          <link-item name={x.title} link={x.link} icon={x.icon} width={x.width} isAvailable={x.isAvailable} />
        </>
      )
    })
    return (
      <Host>
        <slot>
          <div class="links">
            {linksList}
          </div>
        </slot>
      </Host>
    );
  }
}
