/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LinkIcons {
    }
    interface LinkItem {
        "alt"?: string;
        "height"?: number;
        "icon"?: string;
        "isAvailable": boolean;
        "link": string;
        "name": string;
        "width"?: number;
    }
    interface MainLinks {
    }
    interface MainPage {
    }
    interface MainProfile {
    }
    interface PageFooter {
    }
}
declare global {
    interface HTMLLinkIconsElement extends Components.LinkIcons, HTMLStencilElement {
    }
    var HTMLLinkIconsElement: {
        prototype: HTMLLinkIconsElement;
        new (): HTMLLinkIconsElement;
    };
    interface HTMLLinkItemElement extends Components.LinkItem, HTMLStencilElement {
    }
    var HTMLLinkItemElement: {
        prototype: HTMLLinkItemElement;
        new (): HTMLLinkItemElement;
    };
    interface HTMLMainLinksElement extends Components.MainLinks, HTMLStencilElement {
    }
    var HTMLMainLinksElement: {
        prototype: HTMLMainLinksElement;
        new (): HTMLMainLinksElement;
    };
    interface HTMLMainPageElement extends Components.MainPage, HTMLStencilElement {
    }
    var HTMLMainPageElement: {
        prototype: HTMLMainPageElement;
        new (): HTMLMainPageElement;
    };
    interface HTMLMainProfileElement extends Components.MainProfile, HTMLStencilElement {
    }
    var HTMLMainProfileElement: {
        prototype: HTMLMainProfileElement;
        new (): HTMLMainProfileElement;
    };
    interface HTMLPageFooterElement extends Components.PageFooter, HTMLStencilElement {
    }
    var HTMLPageFooterElement: {
        prototype: HTMLPageFooterElement;
        new (): HTMLPageFooterElement;
    };
    interface HTMLElementTagNameMap {
        "link-icons": HTMLLinkIconsElement;
        "link-item": HTMLLinkItemElement;
        "main-links": HTMLMainLinksElement;
        "main-page": HTMLMainPageElement;
        "main-profile": HTMLMainProfileElement;
        "page-footer": HTMLPageFooterElement;
    }
}
declare namespace LocalJSX {
    interface LinkIcons {
    }
    interface LinkItem {
        "alt"?: string;
        "height"?: number;
        "icon"?: string;
        "isAvailable"?: boolean;
        "link"?: string;
        "name"?: string;
        "width"?: number;
    }
    interface MainLinks {
    }
    interface MainPage {
    }
    interface MainProfile {
    }
    interface PageFooter {
    }
    interface IntrinsicElements {
        "link-icons": LinkIcons;
        "link-item": LinkItem;
        "main-links": MainLinks;
        "main-page": MainPage;
        "main-profile": MainProfile;
        "page-footer": PageFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "link-icons": LocalJSX.LinkIcons & JSXBase.HTMLAttributes<HTMLLinkIconsElement>;
            "link-item": LocalJSX.LinkItem & JSXBase.HTMLAttributes<HTMLLinkItemElement>;
            "main-links": LocalJSX.MainLinks & JSXBase.HTMLAttributes<HTMLMainLinksElement>;
            "main-page": LocalJSX.MainPage & JSXBase.HTMLAttributes<HTMLMainPageElement>;
            "main-profile": LocalJSX.MainProfile & JSXBase.HTMLAttributes<HTMLMainProfileElement>;
            "page-footer": LocalJSX.PageFooter & JSXBase.HTMLAttributes<HTMLPageFooterElement>;
        }
    }
}
