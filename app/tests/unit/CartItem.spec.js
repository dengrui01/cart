import { shallowMount } from '@vue/test-utils'
import localVue from './setup'

import CartItem from '../../src/views/cart/components/cartItem'

describe('CartItem component', () => {

  it('should emit event when click minus button', () => {
    // given
    const product = { code: 'one', price: 100, amount: 2 }

    // when
    const wrapper = shallowMount(CartItem, { localVue, propsData: { product }})
    wrapper.find('button').trigger('click')

    // then
    expect(wrapper.emitted('amount-change')).toBeTruthy()
  })

  it('should not emit event when amount is below 1 and click minus button', () => {
    // given
    const product = { code: 'one', price: 100, amount: 1 }

    // when
    const wrapper = shallowMount(CartItem, { localVue, propsData: { product }})
    wrapper.find('button').trigger('click')

    // then
    expect(wrapper.emitted('amount-change')).not.toBeTruthy()
  })

})
