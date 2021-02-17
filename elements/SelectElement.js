export default class SelectElement extends HTMLSelectElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name != '' ? name : id;
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

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-select', SelectElement, { extends: 'select' });
