//全局组件
import vHeader from './header'
const components = new Object();

components.install = Vue => {
    Vue.component('vHeader', vHeader)
    //.....
}

export {
    components
}
