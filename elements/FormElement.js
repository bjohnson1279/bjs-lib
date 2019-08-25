export default class FormElement extends HTMLFormElement {
    constructor(id = '', action = '', method = 'POST') {
        super();
        this.method = method;
        this.action = action;
        this.id = id;
        this.enctype = null;
    }

    set formEnctype(enctype) {
        if (['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'].includes(enctype)) {
            this.enctype = enctype;
        }
        else {
            const enctypeError = new Error(`Invalid value for enctype ${enctype}`);
            enctypeError.status = 400;
            return enctypeError;
        }
    }    
}

customElements.define('custom-form', FormElement, { extends: 'form' });
