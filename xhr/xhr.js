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
        this.open(this._method, this._url, true);
        this.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                // handle response
                switch (this._responseType) {
                    case 'JSON':
                        // JSON parsing and handling
                        this.responseData = this.response.json();
                        break;
                    case 'XML':
                        this.responseData = this.responseXML;
                        break;
                    case 'innerHTML':
                        this.responseData = this.responseText;
                        break;
                }
            }
        }
    }
}