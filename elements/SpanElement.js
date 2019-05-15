export default class SpanElement extends HTMLSpanElement {
    constructor(id, name = '', val = '') {
        super();
        this.name = name;
        this.value = val;
        this.id = id;
    }

    setAttributes(obj) {
        Object.keys(obj).forEach(key => {
            this.setAttributes(key, obj.key);
        });
    }

    setText(txt) {
        this.textContent = txt;
    }
}

customElements.define('custom-span', SpanElement, { extends: 'span' });