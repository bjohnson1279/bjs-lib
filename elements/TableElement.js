export default class TableElement extends HTMLTableElement {
    constructor(id = '') {
        super();
        this.id = id;
    }
}

customElements.define('custom-table', TableElement, { extends: 'table' });