export class ImageElement extends HTMLImageElement {
    constructor(src = '') {
        super();
        this.src = src;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-image', ImageElement, { extends: 'img' });