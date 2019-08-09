import FieldAttributes from ('./FieldAttributes.js');

export default class ReportBuilder {
    constructor() {
        this.fields = [];
        this.dataRows = [];
    }

    addNewField() {
        fieldAttr = new FieldAttributes();
    }
}
