<template>
  <div>
    <p>Mutation 页面</p>
    <!-- 使用方法一： 封装方法-->
    <button @click="getAdd">点我加1</button>
    {{ $store.state.count }} <br />
    <!-- 使用方法二：用【辅助函数】mapMutations 来操作(数组) -->
    <button @click="localIncrement">点我加2</button>
    {{ $store.state.count }} <br />
    <!-- 使用方法三：用【辅助函数】mapMutations 来操作(对象) -->
    <button @click="localAddAlias">点我加3</button>
    {{ $store.state.count }}
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    // 方法一
    getAdd () {
      // this.$store.commit('increment', {
      //   amount: 1
      // })
      this.$store.commit({
        type: 'increment',
        amount: 1
      })
    },
    // 方法二
    ...mapMutations([ // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'increment'
    ]),
    localIncrement () {
      this.increment({
        amount: 2
      })
    },
    // 方法三
    ...mapMutations({
      addAlias: 'increment' // 将 `this.addAlias()` 映射为 `this.$store.commit('increment')`
    }),
    localAddAlias () {
      this.addAlias({
        amount: 3
      })
    }
  }
}
</script>

<style>

</style>
