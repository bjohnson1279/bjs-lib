export default class DivElement extends HTMLDivElement {
    constructor(id, name = '') {
        super();
        this.name = name;
        this.id = id;
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

customElements.define('custom-div', DivElement, { extends: 'div' });
