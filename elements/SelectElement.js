export class SelectElement extends HTMLSelectElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
    }

    setText(txt) {
        this.textContent = txt;
    }
}

customElements.define('custom-select', SelectElement, { extends: 'select' });