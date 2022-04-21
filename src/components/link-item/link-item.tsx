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
      <Host class="link">
        <a href={this.link} target="_blank">
          <slot>
            <div class="link-item">
              <div>
              {this.name}
              </div> 
              <span>
                <img src={this.icon} alt={this.alt} width={this.width} height={this.height} />
              </span>
            </div>
          </slot>
        </a>
      </Host>
    );
  }
}
