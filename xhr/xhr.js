export class XHR extends XMLHttpRequest {
    // Wrapper class for XMLHttpRequest
    constructor(method = 'GET', resType = 'innerHTML') {
        super();
        this._method = method;
        this._responseType = resType;
    }

    set requestData(reqData) {
        this._reqData = reqData;
    }

    set responseType(resType) {
        this._responseType = resType;
    }

    set method(method) {
        this._method = method;
    }

    set url (url) {
        this._url = url;
    }

    get responseData() {
        return this.responseData;
    }

    exec() {
	const res = fetch(this._url);
    }
}
