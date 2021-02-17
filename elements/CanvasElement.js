export class CanvasElement extends HTMLCanvasElement {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    set canvasHeight(height) {
        this.height = height;
    }

    set canvasWidth(width) {
        this.width = width;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}
