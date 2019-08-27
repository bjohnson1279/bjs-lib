export class ImageElement extends HTMLImageElement {
    constructor(src = '') {
        super();
        this.src = src;
    }

    set imageAlign(align) {
        if (['left','right','justify','center'].includes(align)) {
            this.align = align;
        }
        else {
            throw new Exception(`Invalid value ${align} for align property`);
        }
    }

    set imgBorder(border) {
        this.border = border;
    }

    set imgHeight(height) {
        this.height = height;
    }

    set imgWidth(width) {
        this.width = width;
    }

    set imgName(name) {
        this.name = name;
    }

    set imgSrc(src) {
        this.src = src;
    }

    addClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-image', ImageElement, { extends: 'img' });
