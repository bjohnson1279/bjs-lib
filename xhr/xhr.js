export default class XHR extends XMLHttpRequest {
    // Wrapper class for Fetch API
    constructor(method = 'GET', resType = 'innerHTML') {
        super();
        this._method = method;
        this._cache = 'no-cache';
        this._responseType = resType;
        this._credentials = 'same-origin';
        this._headers = new Headers();
        this._formData = new FormData();
        this._params = {};

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

    setRequestData(reqData) {
        this._reqData = reqData;
    }

    setResponseType(resType) {
        this._responseType = resType;
    }

    setHeaders(name, val) {
        if (this.validTypes.includes(name)) {
            this._headers.set(name, val);
        }
        else {
            const error = new Error(`Invalid header type ${name}`);
            error.statusCode = 400;
            throw error;
        }
    }

    setFormData(form) {
        this._formData = new FormData(form);
    }

    serializeFormData() {
        if (typeof this._formData === 'object' && typeof this._formData.entries === 'function') {
            for (const [key,value] of this._formData.entries()) {
                this._params[key] = value;
            }
        } else {
            const error = new Error(`FormData not configured`);
            error.statusCode = 400;
            throw error;
        }
    }

    setMethod(method) {
        if (this.validMethods.includes(method)) {
            this._method = method;
        }
        else {
            const error = new Error(`Invalid method type ${method}`);
            error.statusCode = 400;
            throw error;
        }
    }

    setUrl(url) {
        this._url = url;
    }

    getResponseData() {
        return this._responseData;
    }

    setResponseData(responseData) {
        this._responseData = responseData;
    }

    async exec() {
        this.validateParams();

        let params = {
            method: this._method,
            cache: this._cache,
            headers: this._headers,
            ...this._params,
        };

        const res = await fetch(this._url, params)
            .then( (response) => {
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
                    reader.read().then(({ done, value}) => {
                        if (done) {
                            return;
                        }
                    });
                    this.setResponseData(response);
                }
                else {
                    // response.reject(`{response.status} {response.statusText}`);
                }
            })
            .catch( (error) => console.error(error) );
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
