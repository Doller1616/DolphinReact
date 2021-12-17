// Singalton Service Class
import apiEndPoints from './apiEndPoints';
class RootService {
    BASEURL = 'https://reqres.in';
    ENDPOINTS = apiEndPoints;

    constructor() {
        this.interceptor();
        console.log(">>>>>>>>>>>>>>>> New");
    }

  interceptor = () => {
        const {fetch: origFetch} = window;
        // override fetch
        window.fetch = async (...args) => {
            // Request -------------------------------------------
            // Pass token, loader
                // console.log("Request --->", args);


            return await origFetch(...args)
            .then((res) => {
                // Response -------------------------------------
                // console.log("Response --->", res);

                return res;
            }).catch(() => console.error(err));
        };
    }

    _getO = async(end_point, params) =>{
        const url = new URL(this.BASEURL + end_point);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return await fetch(url).then(data => data.json());
    }

    _postO = async(end_point, obj) =>{
        console.log(">>>>>post");
        return await fetch(this.BASEURL + end_point, {
           method: 'POST',
           headers: new Headers({'content-type': 'application/json'}),
           body: JSON.stringify(obj)
        });
    }

    _deleteO = (params) => {
        console.log(">>>>>delete");
    }
}

export default new RootService();