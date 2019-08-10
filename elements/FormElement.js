export default class FormElement extends HTMLFormElement {
    constructor(id = '', action = '', method = 'POST') {
        super();
        this.method = method;
        this.action = action;
        this.id = id;
    }
}

customElements.define('custom-form', FormElement, { extends: 'form' });