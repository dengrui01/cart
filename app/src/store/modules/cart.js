const state = {
  cartProducts: []
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
    }
}

export const mutations = {
  cart_product_count(state, { code, amount }) {
    const index = state.cartProducts.findIndex(product => product.code === code)
    if(index >= 0){
      state.cartProducts[index].amount = amount
    }
  },
  cart_product_add(state, product) {
    state.cartProducts.push(product)
  },
    cart_product_check(state, data){
        const index = state.cartProducts.findIndex(product => product.code === data.code)
        state.cartProducts[index].checkState = data.checkState
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
