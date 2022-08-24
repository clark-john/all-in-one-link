import { Component, Host, h, Fragment } from '@stencil/core';
import { links } from './links';

@Component({
  tag: 'link-icons',
  styleUrl: 'link-icons.scss',
  scoped: true,
})
export class LinkIcons {
  render() {
    const linksIcons = links.map(x => {
      return (
        <>
          <a href={x.link} target="_blank">
            <img src={x.icon} alt={x.alt} class="icon" />
          </a>
        </>
      )
    });
    return ( 
      <Host>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <slot>
          <div class="container">
            {linksIcons}
            <a href="mailto:daprogrammer1@gmail.com">
              <i class="fas fa-envelope icon"></i>
            </a>
          </div>
        </slot>
      </Host>
    );
  }
}
