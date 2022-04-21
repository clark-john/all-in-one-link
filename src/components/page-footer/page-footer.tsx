import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-footer',
  styleUrl: 'page-footer.css',
  scoped: true,
})
export class PageFooter {

  render() {
    return (
      <Host>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <slot>
          <div class="footer">
            <div class="flex-col">
              <div>&copy; 2022 John Clark</div>
              <div>All rights reserved.</div>
            </div>
            <div class="flex-col">
              <div>
                Contact Me:
              </div>
              <div class="footer-right-icons">
                <a href="https://instagram.com/cl4rk_ig" target='_blank'>
                  <i class="fab fa-instagram" />
                </a>
                <a href="https://twitter.com/cl4rk_tw" target='_blank'>
                  <i class="fab fa-twitter" />
                </a>
                <a href="" target='_blank'>
                  <i class="fab fa-telegram" />
                </a>
              </div>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
