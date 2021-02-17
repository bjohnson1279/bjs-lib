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

    setDisplay(disp) {
        this.style.display = disp;
    }

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-span', SpanElement, { extends: 'span' });
