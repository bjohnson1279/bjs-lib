export class CanvasElement extends HTMLCanvasElement {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}
