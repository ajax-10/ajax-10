<template>
  <div>
    <p>State 页面</p>
   
   
    {{ $store.state.msg }}

    
    {{ getMsg() }}

    {{ msgAlias }}
    {{ reverseMsg }}
  </div>
</template>

<script>
// 导入辅助函数
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msg: 'localMsg' // data 中的 msg 会优先于数组映射的 msg
    }
  },
  methods: {
    // 方法二
    getMsg () {
      return this.$store.state.msg // {{ getMsg() }} 输出：storeMsg
    }
  },
  
  computed: {
   
    reverseMsg () {
      return this.msg.split('').reverse().join('') // {{ reverseMsg }} 输出：gsMlacol
    },
    ...mapState({
      msgAlias: 'msg' // {{ msgAlias }} 输出：storeMsg
    })
  }
}
</script>

<style>

</style>
