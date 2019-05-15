export default class DivElement extends HTMLDivElement {
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

customElements.define('custom-div', DivElement, { extends: 'div' });