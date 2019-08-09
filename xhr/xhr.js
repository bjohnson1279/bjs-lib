export class XHR extends XMLHttpRequest {
    // Wrapper class for XMLHttpRequest
    constructor(method = 'GET', resType = 'innerHTML') {
        super();
        this._method = method;
        this._responseType = resType;
        this._headers = new Headers();
        this._formData = new FormData();
    }

    set requestData(reqData) {
        this._reqData = reqData;
    }

    set responseType(resType) {
        this._responseType = resType;
    }

    set headers(name, val) {
        const validTypes = [
            'Cache-Control',
            'Content-Language',
            'Content-Type',
            'Expires',
            'Last-Modified',
            'Pragma',
        ];

        if (validTypes.includes(name)) {
            this._headers.set(name, val);
        }
        else {
            const error = new Error('Invalid header type');
            error.statusCode = 400;
            throw error;
        }
    }

    set formDataElem(sel) {
        const elem = document.querySelector(sel);
        this._formData.set(elem.name, elem.value);
    }

    set formData(name, val) {
        this._formData.set(name, val);
    }

    set method(method) {
        this._method = method;
    }

    set url(url) {
        this._url = url;
    }

    get responseData() {
        return this._responseData;
    }

    set responseData(responseData) {
        this._responseData = responseData;
    }

    exec() {
        let params = {
            method: this._method,
            cache: 'no-cache',
            headers: this._headers,
        };

        const res = fetch(this._url, params)
            .then(response => {
                console.log({ response });
                this.responseData(response);
            })
            .catch( (error) => console.error(error));
    }
}
