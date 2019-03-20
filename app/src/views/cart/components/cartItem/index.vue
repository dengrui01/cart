<template>
      <div class="product">
        <a-checkbox @change="aclick" defaultChecked :checked="this.checkState"></a-checkbox>
        <h3 class="code">
          <router-link :to="`/products/${product.code}`">
            商品编号: {{product.code}}
          </router-link>
        </h3>
        <div class="actions">
          <a-button shape="circle" icon="minus"  @click="minusCount"/>
          <span>数量 {{product.amount}}</span>
          <a-button shape="circle" icon="plus"  @click="plusCount"/>
        </div>
      </div>
</template>
<script>
  export default{
      props: {
          product: {
              type: Object,
          },
          checkState:{
              type:Boolean
          }
          // isCheckAll:{
          //     type:Boolean,
          // },
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
