export class ImageElement extends HTMLImageElement {
    constructor(src = '') {
        super();
        this.src = src;
    }
}

customElements.define('custom-image', ImageElement, { extends: 'img' });