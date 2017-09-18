import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//基础类
const base = {
    namespaced: true,
    state: {
        header_name: '',
        link: '',
        isShowLoading: false
    },
    mutations: {
        changeStaticValue(state, params) {
            state[params.name] = params.newValue;
        }
    },
    actions: {
        //......
    }
}


export default new Vuex.Store({
    modules: {
        base
    }
})
