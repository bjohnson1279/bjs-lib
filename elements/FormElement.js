export default class FormElement extends HTMLFormElement {
    constructor(method = 'POST', action = '', id = '') {
        super();
        this.method = method;
        this.action = action;
        this.id = id;
    }
}

customElements.define('custom-form', FormElement, { extends: 'form' });