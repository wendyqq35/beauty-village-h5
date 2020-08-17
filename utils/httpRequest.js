let baseUrl = "";


const HttpUlits = {
    request(url, header, method, data) {
        if (!method) {
            method = "GET"
        }
        method = method.toUpperCase();
        if (!header) {
            header = {}
        }
        header['X-Access-Token'] = uni.getStorageSync('token')
        const handlerData = function (reslove, reject) {
            let config = {}
            config.url = baseUrl + url
            config.method = method
            config.dataType = "json"
            config.header = header
            config.data = data
            config.success = function (resData) {
                let code = resData.data.status
                if (code === 500) {
                    if (resData.data.message === "Token失效，请重新登录") {
                        uni.navigateTo({
                            url: "/pages/user/login"
                        })
                        return
                    }
                    reject(resData)
                }

                if (resData.data.code == 200 || resData.data.code == 0) reslove(resData)
                else reject(resData)
            }
            config.fail = function (res) {
                console.log("错误", res);
                reject(res)
            }
            uni.request(config)
        }
        return new Promise(handlerData)
    },
    get
        (url, params) {
        return HttpUlits.request(url, null, "GET", params)
    }
    ,
    post(url, data) {
        return HttpUlits.request(url, null, "POST", data)
    }
    ,
    put(url, data) {
        return HttpUlits.request(url, null, "put", data)
    }
    ,
    delete(url, data) {
        return HttpUlits.request(url, null, "delete", data)
    }

}
export default HttpUlits
