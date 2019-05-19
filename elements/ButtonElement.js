export default class ButtonElement extends HTMLButtonElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
    }
}

customElements.define('custom-button', ButtonElement, { extends: 'button' });