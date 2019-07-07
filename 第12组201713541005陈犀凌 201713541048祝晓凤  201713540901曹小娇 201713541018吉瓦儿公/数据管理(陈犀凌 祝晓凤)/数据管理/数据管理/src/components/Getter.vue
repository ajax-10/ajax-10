<template>
  <div>
    <p>Getter 页面</p>
    <!-- 使用 vuex 仓库(store) 中的 getters 属性，其相当于 vue 中的计算属性 -->
    <!-- Getter 使用方法一：用属性的方式直接访问 -->
    {{ $store.getters.reverseMsg }}
    <!-- Getter 使用方法二：用【辅助函数】mapGetters 来操作 -->
    <!-- 辅助函数可以接收一个数组(会导致接收的属性与原getter属性同名)，想将一个 getter 属性另取一个名字，则使用对象形式 -->
    {{ reverseMsgAlias }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      reverseMsgAlias: 'reverseMsg' // {{ reverseMsgAlias }} 输出：gsMerots
    })
  }
}
</script>

<style>

</style>
