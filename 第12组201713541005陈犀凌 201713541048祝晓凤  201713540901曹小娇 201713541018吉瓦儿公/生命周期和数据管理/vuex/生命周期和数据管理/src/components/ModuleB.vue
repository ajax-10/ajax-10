<template>
  <div>
    <p>B 页面</p>
    <p>
      B模块数据：{{ name}} -- {{ gender }} -- {{ age }} -- {{ BgetGender }}
    </p>
    <p>
      全局数据：{{ count }}
    </p>
    <button @click="add">操作B模块 点我加2个</button>
    <button @click="addGolbal">操作全局 加2</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    // 映射局部模块A
    ...mapState('b', { // 加命名空间
      name: 'name',
      title: 'title',
      amount: 'amount'
    }),
    ...mapGetters('b', { // 加命名空间
      BgetGender: 'BgetGender'
    }),
    // 映射全局数据
    ...mapState({
      count: 'count'
    })
  },
  methods: {
    // 映射局部模块A中的 actions
    ...mapActions('b', { // 加命名空间
      Bincrement: 'Bincrement'
    }),
    add () {
      this.Bincrement({
        amount: 2
      })
    },
    // 映射全局 actions
    ...mapActions({
      incrementAsync: 'incrementAsync'
    }),
    addGolbal () {
      this.incrementAsync({
        amount: 2
      })
    }
  }
}
</script>

<style>

</style>
