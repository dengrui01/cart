import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

export default localVue
