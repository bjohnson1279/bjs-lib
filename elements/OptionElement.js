export default class OptionElement extends HTMLOptionElement {
    constructor(val = '', txt = '') {
        super();
        this.value = val;
        this.text = txt;
    }
}

customElements.define('custom-option', OptionElement, { extends: 'option' });