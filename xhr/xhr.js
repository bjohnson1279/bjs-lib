export default class XHR extends XMLHttpRequest {
    // Wrapper class for XMLHttpRequest
    constructor(method = 'GET', resType = 'innerHTML') {
        super();
        this._method = method;
        this._cache = 'no-cache';
        this._responseType = resType;
        this._credentials = 'same-origin';
        this._headers = new Headers();
        this._formData = new FormData();
        this._params = {}

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
        console.log('entries', typeof this._formData.entries);
        if (typeof this._formData === 'object' && typeof this._formData.entries === 'function') {
            for (const entry of this._formData.entries()) {
                this._params[entry[0]] = entry[1];
            }
        }
        console.log('this params', this._params);
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
        console.log('xhr.exec');
        this.validateParams();

        let params = {
            method: this._method,
            cache: this._cache,
            headers: this._headers,
            ...this._params,
        };
        console.log({ params });

        const res = await fetch(this._url, params)
            .then( (response) => {
                console.log({ response });
                if (response.ok) {
                    const { type, body } = response;
                    console.log({ type, body });
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
                    reader.read().then(({ done, value}) => {
                        if (done) {
                            console.log({ done });
                            return;
                        }
                        console.log({ value });
                    });
                    this.setResponseData(response);
                }
                else {
                    console.error(`${response.status} ${response.statusText}`);
                    // response.reject(`{response.status} {response.statusText}`);
                }
            })
            .catch( (error) => console.error(error) );
        console.log({ res });
        console.log('responseData', this._responseData);
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
