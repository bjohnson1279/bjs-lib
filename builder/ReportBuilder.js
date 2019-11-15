import FieldAttributes from ('./FieldAttributes.js');
import DivElement from "../elements/DivElement";
import TableRowElement from "../elements/TableRowElement";
import TableCellElement from "../elements/TableCellElement";
import TableElement from "../elements/TableElement";

export default class ReportBuilder {
    constructor() {
        this.fields = [];
        this.dataRows = [];
    }

    addNewField(name, value) {
        const fieldAttributes = new FieldAttributes(name, value);
        return fieldAttributes;
    }

    addNewRow() {
        return new TableRowElement();
    }

    addNewCell() {
        return new TableCellElement();
    }

    build(id) {
        const reportContainer = new DivElement(id);
        const reportTable = new TableElement();
        this.dataRows.forEach( (dataRow) => {
            let row = this.addNewRow();
            let cellCollection = new HTMLCollection();
            this.fields.forEach( (field) => {
                let cell = this.addNewCell();
                cell.textContent = dataRow[field];
                cellCollection.appendChild(cell);
            });
            row.appendChild(cellCollection);
            reportTable.appendChild(row);
        });
        reportContainer.appendChild(reportTable);
    }

    filterColumns(fields) {
        this.dataRows = this.dataRows.map( (row) => {
            // fields.forEach(field => {});
        });
    }
}
