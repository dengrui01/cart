import store from '../../../src/store'

const generateProduct = (code, amount=1) => ({
  code,
  amount,
  price: 100,
})

describe('cart store', () => {

  it('should add product when add not existed product', () => {
    store.state.cart.cartProducts = [generateProduct('001')]
    const product2 = generateProduct('002')
    store.dispatch('cartAddProduct', product2)
    expect(store.state.cart.cartProducts.length).toEqual(2)
    expect(store.state.cart.cartProducts[1]).toEqual(product2)
  })

  it('should add product amount when add existed product', () => {
    const product = generateProduct('001')
    store.state.cart.cartProducts = [product]
    store.dispatch('cartAddProduct', product)
    expect(store.state.cart.cartProducts[0].amount).toEqual(2)
    expect(store.state.cart.cartProducts.length).toEqual(1)
  })

  it('should update product amount', () => {
    const code = '001'
    const product = generateProduct(code, 10)
    store.state.cart.cartProducts = [product]
    const newAmount = 20
    store.dispatch('cartChangeCount', {code, amount: newAmount})
    expect(store.state.cart.cartProducts[0].amount).toEqual(newAmount)
  })

  it('should not update product amount when product not existed', () => {
    const code = '001'
    const product = generateProduct(code, 10)
    store.state.cart.cartProducts = [product]
    const newAmount = 20
    store.dispatch('cartChangeCount', {code: 'othercode', amount: newAmount})
    expect(store.state.cart.cartProducts[0].amount).toEqual(10)
  })

  it('should get correct total price', () => {
    store.state.cart.cartProducts = [
      generateProduct(1, 10),
      generateProduct(2, 10),
      generateProduct(4, 10),
    ]
    expect(store.state.cart.cartProducts.length).toEqual(3)
    expect(store.getters.cartTotalPrice).toEqual(100*30)
  })

})
