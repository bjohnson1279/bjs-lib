import TableRowElement from ('../TableRowElement.js');
import RowAttributes from './RowAttributes.js';

export class RowBuilder extends TableRowElement {
    constructor(idxField) {
        this.rowAttributes = new RowAttributes(idxField);
        this.fieldAttributes = [];
    }

    set fieldAttr(fieldAttributes) {
        this.fieldAttributes = fieldAttributes;
    }

    build() {
        //
    }
}
