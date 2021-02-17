import InputElement from ('../elements/InputElement.js');
import FieldAttributes from ('../FieldAttributes.js');

export class InputBuilder extends InputElement {
    constructor(fieldAttributes) {
        this.validInputElements = ['input', 'select'];
        this.validInputTypes = [];

        if (typeof fieldAttributes !== 'FieldAttributes') {
            return new Error('Invalid for type FieldAttributes');
        }
        else {
            // Build input based on field attributes
        }

        this.useNumberInput = false; // Necessary because input type number in HTML5 sucks!
    }

    set inputType(elementType) {
        if (this.validInputElements.includes(elementType)) {
            this.type = elementType;
        }
        else {
            return new Error(`Invalid input type ${elementType}`);
        }
    }
}
