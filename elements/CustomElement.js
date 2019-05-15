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
}

customElements.define('custom-elm', CustomElement);