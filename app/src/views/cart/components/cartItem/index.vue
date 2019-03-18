<template>
  <div class="product">
    <input type="checkbox" checked="true"  @click="aclick"/>
    <h3 class="code">
      <router-link :to="`/products/${product.code}`">
        商品编号: {{product.code}}
      </router-link>
    </h3>
    <div class="actions">
      <button @click="minusCount">-</button>
      <span>数量 {{product.amount}}</span>
      <button @click="plusCount">+</button>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      product: {
        type: Object,
      },
    },
    data:function(){
          return {
              state:true
          }
    },
    methods: {
      minusCount(){
        if (this.product.amount > 1) {
          this.$emit('amount-change', this.product.amount - 1)
        }
      },
      plusCount(){
        this.$emit('amount-change', this.product.amount + 1)
      },
        aclick(){
          this.product.checkState = !this.product.checkState
            this.$emit('checkChange',{checkState:this.product.checkState, code:this.product.code})
        }
    },
  }
</script>

<style scoped src="./styles.css" />
