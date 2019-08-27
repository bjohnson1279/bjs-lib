import FieldAttributes from ('./FieldAttributes.js');
import DivElement from "../elements/DivElement";
import TableRowElement from "../elements/TableRowElement";
import TableCellElement from "../elements/TableCellElement";

export default class ReportBuilder {
    constructor() {
        this.fields = [];
        this.dataRows = [];
    }

    addNewField(name, value) {
        return new FieldAttributes(name, value);
    }

    addNewRow() {
        return new TableRowElement();
    }

    addNewCell() {
        return new TableCellElement();
    }

    build(id) {
        const reportContainer = new DivElement(id);
        this.dataRows.forEach( (dataRow) => {
            let row = this.addNewRow();
            let cellCollection = new HTMLCollection();
            this.fields.forEach( (field) => {
                let cell = this.addNewCell();
            });
        });
    }
}
