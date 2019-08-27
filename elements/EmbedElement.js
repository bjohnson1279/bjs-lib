export class EmbedElement extends HTMLEmbedElement {
    constructor(src = '', height = '', width = '') {
        this.src = src;
        this.height = height;
        this.width = width;
    }

    set embedSrc(src) {
        this.src = src;
    }

    set embedAlign(align) {
        this.align = align;
    }

    set embedHeight(height) {
        if (Number(height) && height >= 0) {
            this.height = height;
        }
    }

    set embedWidth(width) {
        if (Number(width) && width >= 0) {
            this.width = width;
        }
        else {
            const widthError = new Error(`Invalid value for width ${width}`);
            widthError.status = 400;
            return widthError;
        }
    }
}
