import axios from "axios";


export class MainService {
    static uniqueApiMethod(url, method, header, data, responseType) {
        const urlPath = sessionStorage.getItem('baseUrl');
        const headers = header;
        const path = `${urlPath}${url}`;

        const recursive = (resolveProm, rejectProm) => {
            const apiCall = data
                ? axios({
                    method,
                    headers,
                    url: path,
                    data,
                    responseType
                })
                : axios({
                    method,
                    headers,
                    url: path
                });
            apiCall
                .then(res => {
                    if (res.status >= 200 && res.status < 300) {
                        resolveProm(res);
                    }
                })
                .catch(error => {
                    if (
                        error &&
                        error.response &&
                        error.response.status === 401
                    ) {

                    }
                    rejectProm(error);
                });
        }

        return new Promise((resolveProm, rejectProm) => {
            const responseCall = recursive(resolveProm, rejectProm);
            
            return responseCall;
        })
    }
}