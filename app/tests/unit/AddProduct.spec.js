import { mount } from '@vue/test-utils'

import AddProduct from '../../src/views/cart/components/addProduct'

describe('AddProduct component', () => {

  it('should toggle cart when click add product button', () => {
    //given
    const wrapper = mount(AddProduct)
    const stubToggleCart = jest.fn()
    wrapper.setMethods({ toggleCart: stubToggleCart })

    // when
    wrapper.find('.btn').trigger('click')

    // then
    expect(stubToggleCart).toHaveBeenCalled()
  })
})
