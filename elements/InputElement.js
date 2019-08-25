export default class InputElement extends HTMLInputElement {
    constructor(id, name = '', fieldType = 'text', val = '') {
        super();
        this.type = fieldType;
        this.id = id;
        this.name = !name ? id : name;
        this.value = val;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-input', InputElement, { extends: 'input' });
