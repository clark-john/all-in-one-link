import { Component, Host, h} from '@stencil/core';

@Component({
  tag: 'main-links',
  styleUrl: 'main-links.css',
  shadow: true,
})
export class MainLinks {
  render() {
    return (
      <Host>
        <slot>
          <div class="links">
            <link-item name='Web Blog' link="https://blog-clark.vercel.app"></link-item>
            <link-item name='Blogspot Area' link="https://clark-john.blogspot.com/"></link-item>
            <link-item name='Tumblr' link="http://cl4rk-tmblr.tumblr.com/"></link-item>
            <link-item name="Download PostgreSQL" link="https://www.postgresql.org/" icon="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/postgresql.svg" width={25}></link-item>
            <link-item name="ClarkDoesTech on Twitter" link="https://twitter.com/ClarkDoesTech"></link-item>
            <link-item name="Configure TOML with Python Tutorial" link="https://blog-clark.vercel.app/#/python-toml"></link-item>
          </div>
        </slot>
      </Host>
    );
  }
}
