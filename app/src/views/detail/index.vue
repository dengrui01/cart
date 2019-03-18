<template>
  <div v-if="product" class="product">
    <section v-if="false">
      <h3>购物车总价</h3>
    </section>
    <section class="product-detail">
      <h3>产品信息</h3>
      <ul class="product-info">
        <li class="product-code">编号：{{ id }}</li>
        <li>名称：{{ product.name }}</li>
        <li>品牌：{{ product.brand }}</li>
        <li class="product-cost">价格：¥ {{ product.cost }}</li>
      </ul>
    </section>
    <section class="product-desc">
      <h3>产品介绍</h3>
      <div class="product-image">
        <img :src="product.image" alt="product">
      </div>
    </section>
    <p>
      wonderful products, think different.
    </p>
  </div>
</template>
<script>
import product_data from '../../assets/product.json'

export default {
  data() {
    return {
      // 获取路由中的参数
      id: this.$route.params.id,
      product: null,
    }
  },
  computed: {},
  methods: {
    getProduct() {
      // 真实环境通过 ajax 获取，这里用异步模拟
      setTimeout(() => {
        this.product = product_data
      }, 500)
    },
  },
  mounted() {
    this.getProduct()
  },
}
</script>
<style scoped src="./detail.css"></style>
