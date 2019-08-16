export default class LabelElement extends HTMLLabelElement {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-label', LabelElement, { extends: 'label' });