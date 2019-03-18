import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    counter,
  },
})

export default store
