export default class ButtonElement extends HTMLButtonElement {
    constructor(id, name = '', val = '', btnType='button') {
        super();
        this.id = id;
        this.name = name;
        this.value = val;
        this.textContent = val;
        this.type = btnType;
    }
}

customElements.define('custom-button', ButtonElement, { extends: 'button' });