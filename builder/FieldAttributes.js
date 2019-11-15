export class FieldAttributes {
    constructor(name, value, type = '', id = '') {
        const validInputTypes = ['text', 'number', 'email', 'date', 'hidden', 'password', 'search', 'submit', 'tel', 'url', 'radio', 'checkbox'];
        const validInputFields  = ['input', 'select'];

        const numericTypes = ['int', 'float'];
        const validTypes = numericTypes.concat(['string', 'boolean', 'date']);

        this.inputField = 'input';
        this.name = name;
        this.value = value;
        this.type = type;
        this.id = id !== '' ? id : name;

        this.sortable = false;
        this.decimal = false;
        this.dollar = false;
        this.group = false;
    }

    buildInput() {
        switch (this.inputField) {
            case 'input':
                break;
            case 'select':
                break;
        }
    }

    isValid() {
        if (!this.validTypes.includes(this.type)) {
            return new Error(`Invalid field type ${this.type}`);
        }

        if (this.numericTypes.includes(this.type)) {
            if (Number.isNaN(this.value)) {
                return new Error(`Invalid value ${this.value} for type ${this.type}`);
            }

            switch (this.type) {
                case 'int':
                    this.value = parseInt(this.value);
                    break;
                default:
                    this.value = parseFloat(this.value);
                    break;
            }
        }
        else {
            // Non-numeric types
            try {
                switch (this.type) {
                    case 'string':
                        break;
                    case 'boolean':
                        this.value = Boolean(this.value);
                        break;
                    case 'date':
                        this.value = new Date(this.value);
                        break;
                }
            }
            catch (exception) {
                throw new Exception(`Invalid type ${type} for ${this.value}`);
            }
        }
    }

    set inputFieldType(type) {
        if (this.validInputTypes(type)) {
            this.inputField = type;
        } 
        else {
            return new Error(`Invalid input type ${type}`);
        }
    }

    set canSort(bool) {
        this.sortable = Boolean(bool);
    }

    set isDecimal(bool) {
        this.decimal = Boolean(bool);
    }

    set isDollar(bool) {
        this.dollar = Boolean(bool);
    }

    set groupBy(bool) {
        this.group = Boolean(bool);
    }
}
