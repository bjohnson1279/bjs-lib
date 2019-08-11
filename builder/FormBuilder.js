import FieldAttributes from ('./FieldAttributes.js');
import FormElement from ('../elements/FormElement.js');

export default class FormBuilder {
    constructor() {
        // TODO : this class will be for building a form for submission using correct input types and validating data before submission
        this.fields = [];
    }

    addNewField() {
        fieldAttr = new FieldAttributes();
    }

    build(id, action, method = 'POST') {
        const buildForm = new FormElement(id, action, method);
    }
}
