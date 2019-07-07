<template>
  <div>
    <p>Action 页面</p>
    <!-- 使用方法一： 封装方法-->
    <button @click="ActionAdd">点我加1</button>
    {{ $store.state.count }} <br />
    <!-- 使用方法二：用【辅助函数】mapActions 来操作(数组) -->
    <button @click="localIncrementAsync">点我加2</button>
    {{ $store.state.count }} <br />
    <!-- 使用方法三：用【辅助函数】mapActions 来操作(对象) -->
    <button @click="localIncrementAsyncAlias">点我加3</button>
    {{ $store.state.count }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // 方法一
    ActionAdd () {
      // this.$store.dispatch('incrementAsync', {
      //   amount: 1
      // })
      this.$store.dispatch({
        type: 'incrementAsync',
        amount: 1
      })
    },
    // 方法二
    ...mapActions([ // 将 `this.incrementAsync()` 映射为 `this.$store.dispatch('incrementAsync')`
      'incrementAsync'
    ]),
    localIncrementAsync () {
      this.incrementAsync({
        amount: 2
      })
    },
    // 方法三
    ...mapActions({
      incrementAsyncAlias: 'incrementAsync' // 将 `this.incrementAsyncAlias()` 映射为 `this.$store.dispatch('incrementAsync')`
    }),
    localIncrementAsyncAlias () {
      this.incrementAsyncAlias({
        amount: 3
      })
    }
  }
}
</script>

<style>

</style>
