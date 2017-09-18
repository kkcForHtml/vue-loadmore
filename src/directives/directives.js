//全局指令
const directives = new Object();

directives.install = Vue => {
    Vue.directive('alert', (el, binding) => {
        el.onclick = function () {
            alert(binding.value);
        }
    });
    //.....
}

export {
    directives
}
