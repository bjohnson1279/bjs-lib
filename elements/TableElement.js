export default class TableElement extends HTMLTableElement {
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

customElements.define('custom-table', TableElement, { extends: 'table' });
