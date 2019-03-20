const state = {
  cartProducts: [],
    isCheckAll:false,
    defaultProducts:[],
    indeterminate:false,
}

export const getters = {
  cartTotalPrice: state => state.cartProducts.reduce((prev, item) => {
    if (item.checkState) {
        return prev + item.price * item.amount
    }else {
      return prev
    }
  }, 0),
  cartTotalAmount: function cartTotalPrice(state) {
    return state.cartProducts.reduce(function (prev, item) {
        if (item.checkState) {
            return prev + item.amount;
        }else {
            return prev
        }
    }, 0);
  },
}

export const actions = {
  cartAddProduct({ commit, state }, product){
    const code = product.code
    const index = state.cartProducts.findIndex(item => item.code === code)
    if (index >= 0) {
      commit('cart_product_count', { code, amount: state.cartProducts[index].amount + 1 })
    } else {
      commit('cart_product_add', product)
    }
  },
  cartChangeCount({commit}, payload){
    commit('cart_product_count',
      {
        code: payload.code,
        amount: payload.amount
      }
    )
  },
    cartChangeCheck({commit}, data){
        commit('cart_product_check', data)
    },
    cartChangeCheckAll({commit}){
        commit('cart_product_checkAll')
    },
}

export const mutations = {
    cart_product_count(state, {code, amount}) {
        const index = state.cartProducts.findIndex(product => product.code === code)
        if (index >= 0) {
            state.cartProducts[index].amount = amount
        }
    },
    cart_product_add(state, product) {
        state.cartProducts.push(product)
        state.defaultProducts.push(product.code)
        if (state.defaultProducts.length == state.cartProducts.length) {
            state.isCheckAll = true
        }

    },
    cart_product_check(state, data) {
        const index = state.cartProducts.findIndex(product => product.code === data.code)
        state.cartProducts[index].checkState = data.checkState
        state.defaultProducts.splice(0,state.defaultProducts.length)
        for (let i = 0; i < state.cartProducts.length; i++) {
            if (state.cartProducts[i].checkState) {
                state.defaultProducts.push(state.cartProducts[i].code)
            }
        }
        let d = state.defaultProducts.length
        let c = state.cartProducts.length

        if (d == c){
            state.isCheckAll = true
            state.indeterminate = false
        }
        else if (d == 0){
            state.isCheckAll = false
            state.indeterminate = false
        }
        else if (d < c){
            state.indeterminate = true
        }
    },
    cart_product_checkAll(state) {
        state.isCheckAll = !state.isCheckAll
        for (let i = 0; i < state.cartProducts.length; i++) {
            if (state.isCheckAll){
                state.cartProducts[i].checkState = true
            }
           else {
                state.cartProducts[i].checkState = false
            }
        }
        state.indeterminate = false
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
