//自定义插件
import Axios from 'axios'
import {Toast} from 'mint-ui'
import {Indicator} from 'mint-ui'

const plugin = new Object();

plugin.install = Vue => {
    //axios再封装
    Vue.prototype.$axios = function ({
        methods = 'get',
        url = '',
        params = {},
        showLoading = true
    }) {
        showLoading && Indicator.open('加载中...');
        return new Promise((resolve, reject) => {
            Axios[methods](url, params).then(data => {
                setTimeout(() => {
                    resolve(data);
                    Indicator.close();
                }, 700); //模拟真实接口，加上等待时间
            }).catch(data => {
                reject(data);
                Indicator.close();
                Toast({
                    message: JSON.stringify(data),
                    position: 'bottom'
                })
            })
        });
    };

    //.........

}

export {
    plugin
}
