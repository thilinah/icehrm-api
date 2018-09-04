class ApiResponse {

    static get STATUS_SUCCESS() {return 'SUCCESS'}
    static get STATUS_ERROR() {return 'ERROR'}
    static get STATUS_FAIL() {return 'FAIL'}

    static get HTTP_200() {return 200}
    static get HTTP_201() {return 201}
    static get HTTP_404() {return 404}
    static get HTTP_500() {return 500}

    constructor(status, data, errorCode = null) {
        this._status = status;
        this._data = data;
        this._errorCode = errorCode;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get errorCode() {
        return this._errorCode;
    }

    set errorCode(value) {
        this._errorCode = value;
    }

    getJSON() {
        return {
            'status': this._status,
            'data': this._data,
        }
    }
}

module.exports = ApiResponse;