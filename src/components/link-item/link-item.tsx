import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'link-item',
  styleUrl: 'link-item.scss',
  shadow: true,
})
export class LinkItem {

  @Prop() name: string;
  @Prop() link: string;
  @Prop() icon?: string;
  @Prop() alt?: string;
  @Prop() width?: number;
  @Prop() height?: number;
  @Prop() isAvailable: boolean;

  render() {
    return (
      <Host>
        <slot>
          <a href={this.isAvailable ? this.link : '#'} target={this.isAvailable ? '_blank' : ''}>
            <div class={this.isAvailable ? "link" : "unavailable"}>
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
