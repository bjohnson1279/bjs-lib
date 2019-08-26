export class RowAttributes {
    constructor(indexField) {
        this.indexField = indexField; // Name of field used as the index for the report row
        this.classes = []; // CSS classes to apply to row
        this.columnFields = [];
    }

    set rowColumnFields(fields) {
        this.columnFields = fields;
    }
}
