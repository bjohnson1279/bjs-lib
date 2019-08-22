export default class TableRowElement extends HTMLTableRowElement {
    constructor(id = '') {
        super();
        this.id = id;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-tr', TableRowElement, { extends: 'tr' });