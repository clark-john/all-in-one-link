import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'link-icons',
  styleUrl: 'link-icons.css',
  scoped: true,
})
export class LinkIcons {

  render() {
    // twitter toktik yt pinterest github telegarm
    return ( 
      <Host>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <slot>
          <div class="container">
            <a href="https://www.facebook.com/cl4rk.3702/" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/facebook.svg" alt="facebook" class="icon"/>
            </a>
            <a href="https://instagram.com/cl4rk_ig" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/instagram.svg" alt="instagram" class="icon"/>
            </a>
            <a href="https://twitter.com/cl4rk_tw" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/twitter.svg" alt="" class="icon" />
            </a>
            <a href="https://tiktok.com/@cl4rk_tiktok" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/tiktok.svg" alt="" class="icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCVHTymEnrVmpz7dtCsV6vpQ" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/youtube.svg" alt="" class="icon" />
            </a>
            <a href="https://pinterest.com/cl4rk_pics" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/pinterest.svg" alt="" class="icon" />
            </a>
            <a href="https://github.com/clark-john" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/github.svg" alt="" class="icon" />
            </a>
            <a href="https://www.reddit.com/user/cl4rk_reddit" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/reddit.svg" alt="" class="icon" />
            </a>
            <a href="https://t.me/cl4rk_tg" target="_blank">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@6.19.0/icons/telegram.svg" alt="" class="icon" />
            </a>
            <a href="mailto:daprogrammer1@gmail.com">
              <i class="fas fa-envelope icon"></i>
            </a>
          </div>
        </slot>
      </Host>
    );
  }

}
