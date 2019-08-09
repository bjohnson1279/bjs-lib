export default class SelectElement extends HTMLSelectElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
    }

    setText(txt) {
        this.textContent = txt;
    }

    addOptGroup(optGroup) {
        // append options to optgroup first
        this.appendChild(optGroup);
    }

    addOption(option) {
        this.appendChild(option);
    }
}

customElements.define('custom-select', SelectElement, { extends: 'select' });