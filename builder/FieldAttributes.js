export class FieldAttributes {
    constructor(name, value, type = '', id = '') {
        const numericTypes = ['int', 'float'];
        const validTypes = numericTypes.concat(['string', 'boolean', 'date']);

        this.name = name;
        this.value = value;
        this.type = type;
        this.id = id !== '' ? id : name;

        this.sortable = false;
        this.decimal = false;
        this.dollar = false;
        this.group = false;

    }

    isValid() {
        if (!this.validTypes.includes(this.type)) {
            return new Error('Invalid field type');
        }
        if (this.numericTypes.includes(this.type)) {
            if (Number.isNaN(this.value)) {
                return new Error(`Invalid value for type ${this.type}`);
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
    }

    set canSort(bool) {
        this.sortable = bool;
    }

    set isDecimal(bool) {
        this.decimal = bool;
    }

    set isDollar(bool) {
        this.dollar = bool;
    }

    set groupBy(bool) {
        this.group = bool;
    }
}