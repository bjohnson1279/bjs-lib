import FieldAttributes from ('./FieldAttributes.js');
import InputBuilder from ('./InputBuilder.js');
import FormElement from ('../elements/FormElement.js');
import DivElement from "../elements/DivElement";

export default class FormBuilder {
    constructor() {
        this.fields = [];
        this.requiredFields = [];
        this.existingFieldData = {};
    }

    addNewField() {
        // Add new input field to form
        let fieldAttr = new FieldAttributes();

        let fieldInput = new InputBuilder(); // TODO : handle cases where <select> is needed
    }

    addRequired(fieldName) {
        // Add field required for submission
        this.requiredFields.push(fieldName);
    }

    validateForm() {
        // TODO : Validate required fields and data types of fields for submission
    }

    build(id, action, method = 'POST') {
        const buildForm = new FormElement(id, action, method);

        const containerId = `${id}Container`;
        const containerDiv = new DivElement(containerId);

        this.fields.forEach( (field) => {
            // TODO : Create input field with label, set value to pre-existing or default value if necessary
            let fieldContainer = new DivElement(`${field.name}Container`);

            containerDiv.appendChild(fieldContainer);
        });

        buildForm.appendChild(containerDiv);
    }
}
