export default class TableCellElement extends HTMLTableCellElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
        this.colSpan = 1;
    }

    setText(txt) {
        this.textContent = txt;
    }

    setColspan(colspan) {
        if (Number.isSafeInteger(colspan)) {
            throw new Exception(`Non-numeric value ${colspan} for attribute colspan is invalid`);
        }

        this.colspan = Number.parseInt(colspan);
    }

    setRowspan(rowspan) {
        if (Number.isSafeInteger(rowspan)) {
            throw new Exception(`Non-numeric value ${rowspan} for attribute rowspan is invalid`);
        }

        this.rowspan = Number.parseInt(rowspan);
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-td', TableCellElement, { extends: 'td' });
