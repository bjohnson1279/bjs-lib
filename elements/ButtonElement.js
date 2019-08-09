export default class ButtonElement extends HTMLButtonElement {
    constructor(id, name = '', val = '', btnType='button') {
        super();
        this.id = id;
        this.name = name;
        this.value = val;
        this.textContent = val;
        this.type = btnType;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-button', ButtonElement, { extends: 'button' });