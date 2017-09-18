//全局过滤器
const filters = new Object();

filters.install = Vue => {
    Vue.filter('test', (val, n) => val.toUpperCase() + n);
    //.....
}

export {
    filters
}
