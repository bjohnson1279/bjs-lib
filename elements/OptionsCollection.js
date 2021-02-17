export class OptionsCollection extends HTMLOptionsCollection {
    constructor(val, txt) {
        this.value = val;
        this.text = txt;
    }

    set optionValue(val) {
        this.value = val;
    }

    set optionText(txt) {
        this.text = txt;
    }
}
