import store from '../../../src/store'


describe('cart store', () => {

  it('should increment', () => {
    store.state.counter.count = 5
    store.dispatch('increment')
    expect(store.state.counter.count).toEqual(6)
  })

  it('should get correct total price', () => {
    store.state.counter.count = 5
    expect(store.getters.countIsOdd).toEqual(false)
    store.dispatch('increment')
    expect(store.getters.countIsOdd).toEqual(true)
  })

})
