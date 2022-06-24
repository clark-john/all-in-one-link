import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'link-item',
  styleUrl: 'link-item.css',
  shadow: true,
})
export class LinkItem {

  @Prop() name: string;
  @Prop() icon?: string;
  @Prop() alt?: string;
  @Prop() width?: number;
  @Prop() height?: number;
  @Prop() link: string;

  render() {
    return (
      <Host>
        <slot>
          <a href={this.link} target="_blank">
            <div class="link">
              {this.name} 
              <img 
                src={this.icon} 
                alt={this.alt} 
                width={this.width} 
                height={this.height} 
                class="icon"
              />
            </div>
          </a>
        </slot>
      </Host>
    );
  }
}
