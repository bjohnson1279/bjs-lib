export default class CustomElement extends HTMLElement {
    constructor(name, id = '', val = '') {
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

    setClass(className) {
        this.addClassName(className);
    }

    removeClass(className) {
        this.removeClassName(className);
    }
}

customElements.define('custom-elm', CustomElement);
