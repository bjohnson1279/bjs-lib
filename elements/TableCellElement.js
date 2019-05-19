export class TableCellElement extends HTMLTableCellElement {
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

customElements.define('custom-td', TableCellElement, { extends: 'td' });