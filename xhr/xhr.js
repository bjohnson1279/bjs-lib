export class XHR extends XMLHttpRequest {
    // Wrapper class for XMLHttpRequest
    constructor(method = 'GET', resType = 'innerHTML') {
        super();
        this._method = method;
        this._cache = 'no-cache';
        this._responseType = resType;
        this._headers = new Headers();
        this._formData = new FormData();
        this._request = new Request();
        this._response = new Response();

        this.validTypes = [
            'Cache-Control',
            'Content-Language',
            'Content-Type',
            'Expires',
            'Last-Modified',
            'Pragma',
        ];

        this.validMethods = [
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE',
        ];

        this.validResponseTypes = [
            'innerHTML',
            'JSON',
            'XML',
        ];
    }

    set requestData(reqData) {
        this._reqData = reqData;
    }

    set responseType(resType) {
        this._responseType = resType;
    }

    set headers(name, val) {
        if (this.validTypes.includes(name)) {
            this._headers.set(name, val);
        }
        else {
            const error = new Error(`Invalid header type ${name}`);
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
        if (this.validMethods.includes(method)) {
            this._method = method;
        }
        else {
            const error = new Error(`Invalid method type ${method}`);
            error.statusCode = 400;
            throw error;
        }
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
        this.validateParams();

        let params = {
            method: this._method,
            cache: this._cache,
            headers: this._headers,
        };

        const res = fetch(this._url, params)
            .then( (response) => {
                console.log({ response });
                if (response.ok) {
                    const { type, body } = response;
                    switch (type) {
                        case 'basic':
                            break;
                        case 'cors':
                            break;
                        case 'error':
                            break;
                        case 'opaque':
                            break;
                        case 'opaqueredirect':
                            break;
                        default:
                            break;
                    }

                    const reader = body.getReader();
                    console.log({ reader });
                    this._responseData(response);
                }
                else {
                    console.error(`{response.status} {response.statusText}`);
                }
            })
            .catch( (error) => console.error(error) );
        console.log({ res });
    }

    validateParams() {
        if (!this.validMethods.includes(this._method)) {
            throw new Exception(`Invalid HTTP Request Method ${this._method}`);
        }

        this._headers.forEach( (header) => {
            if (!this.validTypes.includes(header)) {
                throw new Exception(`Invalid header ${header}`);
            }
        });


        return true;
    }
}
