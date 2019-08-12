import InputElement from ('../elements/InputElement.js');
import FieldAttributes from ('../FieldAttributes.js');

export class InputBuilder extends InputElement {
    constructor(fieldAttributes) {
        if (typeof fieldAttributes !== 'FieldAttributes') {
            return new Error('Invalid for type FieldAttributes');
        }

        this.useNumberInput = false; // Necessary because input type number in HTML5 sucks!
    }
}