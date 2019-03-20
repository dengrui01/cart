<template>
  <div class="page-cart">
    <div class="title">总价 {{totalPrice}}</div>
    <div class="title">已选择的商品数量 {{totalNum}}</div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <a-checkbox :checked="isCheckAll" @change="cartChangeCheckAll" :indeterminate="indeterminate">
              <!--@change="onCheckAllChange"-->
              <!--:checked="checkAll"-->
        全部选择
      </a-checkbox>
    </div>
      <div class="list">
        <cart-item
                v-for="(product, index) in cartProducts"
                :key="index"
                :product="product"
                :checkState="product.checkState"
                @amount-change="handleAmountChange(product, arguments)" @checkChange="cartChangeCheck"
        />
      </div>

    <add-product @add="handleAddProduct"/>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import cartItem from './components/cartItem'
  import addProduct from './components/addProduct'

  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
    checkState:true
  })

  export default {
    name: 'cart',
    components: {
      cartItem,
      addProduct,
    },
    computed: {
      ...mapState({
          cartProducts: state => state.cart.cartProducts,//??
          isCheckAll:state => state.cart.isCheckAll,
          indeterminate:state => state.cart.indeterminate,
      }),
      ...mapGetters({
        totalPrice: 'cartTotalPrice',
        totalNum: 'cartTotalAmount',
      }),
    },
    methods: {
      ...mapActions([
        'cartAddProduct',
        'cartChangeCount',
        'cartChangeCheck',
        'cartChangeCheckAll',
      ]),
      handleAmountChange(product, agrs) {
        const amount = agrs[0]
        this.cartChangeCount({
          code: product.code,
          amount,
        })
      },
      handleAddProduct: function(code) {
        this.cartAddProduct(generateProduct(code))
      },
    },
  }
</script>

<style src="./cart.css"></style>
