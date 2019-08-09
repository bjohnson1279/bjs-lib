export class CanvasElement extends HTMLCanvasElement {
    constructor() {
        //
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}
