export default class LabelElement extends HTMLLabelElement {
    constructor(isFor) {
        super();
        this.for = isFor;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-label', LabelElement, { extends: 'label' });