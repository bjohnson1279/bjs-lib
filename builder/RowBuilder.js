import TableRowElement from ('../TableRowElement.js');
import RowAttributes from './RowAttributes.js';

export class RowBuilder extends TableRowElement {
    constructor() {
        const rowAttributes = new RowAttributes();
        this.fieldAttributes = [];
    }

    set fieldAttr(fieldAttributes) {
        this.fieldAttributes = fieldAttributes;
    }

    build() {
        //
    }
}
