export class TableRowElement extends HTMLTableRowElement {
    constructor(id = '') {
        super();
        this.id = id;
    }
}

customElements.define('custom-tr', TableRowElement, { extends: 'tr' });