export class InputElement extends HTMLInputElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
    }
}

customElements.define('custom-input', InputElement, { extends: 'input' });