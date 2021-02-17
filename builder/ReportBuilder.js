import FieldAttributes from ('./FieldAttributes.js');
import DivElement from "../elements/DivElement";
import TableRowElement from "../elements/TableRowElement";
import TableCellElement from "../elements/TableCellElement";
import TableElement from "../elements/TableElement";

export default class ReportBuilder {
    constructor() {
        this.fields = [];
        this.fieldClasses = {};
        this.dataRows = [];
    }

    addFieldClass(fieldName, className) {
        if (this.fields.includes(fieldName)) {
            if (!this.fieldClasses.hasOwnProperty(fieldName)) {
                Object.defineProperty(this.fieldClasses, fieldName, [className]);
            }
            else {
                this.fieldClasses[fieldName].push(className);
            }
        }
        else {
            console.error(`Field ${fieldName} not found`);
        }
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
}
