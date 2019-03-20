import Vue from 'vue'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import cart from './modules/cart'
import counter from './modules/counter'

Vue.use(Vuex)
Vue.use(Antd)


const store = new Vuex.Store({
    modules: {
        cart,
        counter,
    },
})

export default store
