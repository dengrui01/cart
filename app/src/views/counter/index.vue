<template>
    <div class="counter">
        <div class="info">
          <button class="btn">-1</button>
          <span>{{count}}</span>
          <span>是否偶数 {{countIsOdd}}</span>
          <button class="btn" @click="increment">+1</button>
        </div>
        <button class="btn" @click="incrementDelay">+1 delay</button>
        <button class="btn" @click="incrementDelayWrong">+1 delay(wrong)</button>
    </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        count: state => state.counter.count
      }),
      ...mapGetters(['countIsOdd']),
    },
    methods: {
      ...mapActions(['increment', 'incrementDelay', 'incrementDelayWrong']),
    },
  }
</script>

<style scoped src="./detail.css"></style>
